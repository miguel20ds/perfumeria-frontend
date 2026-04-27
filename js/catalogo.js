verificarAutenticacion();

let perfumes = [];
let perfumeIdSeleccionado = null;

document.addEventListener('DOMContentLoaded', () => {
    aplicarTraducciones();
});

document.getElementById('nombre-usuario').textContent = obtenerNombre();

async function cargarPerfumes() {
    try {
        perfumes = await api.listarPerfumes();
        renderizarPerfumes(perfumes);
    } catch (err) {
        mostrarToast(t('catalogo.error.cargar'), 'danger');
    } finally {
        document.getElementById('loading').classList.add('d-none');
    }
}

function renderizarPerfumes(lista) {
    const grid = document.getElementById('perfumes-grid');
    const sinResultados = document.getElementById('sin-resultados');

    if (lista.length === 0) {
        grid.classList.add('d-none');
        sinResultados.classList.remove('d-none');
        return;
    }

    sinResultados.classList.add('d-none');
    grid.classList.remove('d-none');

    grid.innerHTML = lista.map(p => `
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div class="perfume-card d-flex flex-column" style="height: 100%;">
                ${p.imagenUrl
                    ? `<img src="${p.imagenUrl.startsWith('http') ? p.imagenUrl : API_URL + p.imagenUrl}" class="perfume-img" alt="${p.nombre}"
                          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                       <div class="perfume-img-placeholder" style="display:none;"><i class="bi bi-droplet-fill"></i></div>`
                    : `<div class="perfume-img-placeholder"><i class="bi bi-droplet-fill"></i></div>`
                }
                <div class="p-3 d-flex flex-column flex-grow-1">
                    <span class="marca-badge mb-1">${p.marca}</span>
                    <h6 class="fw-semibold mb-1">${p.nombre}</h6>
                    <p class="text-muted small mb-3" style="font-size: 0.82rem;">${p.descripcion || ''}</p>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="precio">$${p.precio.toLocaleString('es-CO')}</span>
                            <span class="text-muted small">
                                <i class="bi bi-box-seam me-1"></i>${p.stock} ${t('catalogo.disponibles')}
                            </span>
                        </div>
                        <button class="btn btn-purple w-100 btn-sm"
                            ${p.stock === 0 ? 'disabled' : ''}
                            onclick="abrirModalReserva(${p.id}, '${p.nombre}')">
                            ${p.stock === 0
                                ? t('catalogo.sin.stock')
                                : `<i class="bi bi-bag-plus me-1"></i>${t('catalogo.reservar')}`
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function abrirModalReserva(id, nombre) {
    perfumeIdSeleccionado = id;
    document.getElementById('nombre-perfume-modal').textContent = nombre;
    new bootstrap.Modal(document.getElementById('modalReserva')).show();
}

async function confirmarReserva() {
    try {
        await api.crearReserva(perfumeIdSeleccionado);
        bootstrap.Modal.getInstance(document.getElementById('modalReserva')).hide();
        mostrarToast(t('modal.reserva.exito'), 'success');
    } catch (err) {
        bootstrap.Modal.getInstance(document.getElementById('modalReserva')).hide();
        mostrarToast(err.error || t('catalogo.error.cargar'), 'danger');
    }
}

function mostrarToast(mensaje, tipo) {
    const toast = document.getElementById('toast');
    const toastMensaje = document.getElementById('toast-mensaje');
    toastMensaje.textContent = mensaje;
    toast.className = `toast align-items-center text-white border-0 bg-${tipo === 'success' ? 'success' : 'danger'}`;
    new bootstrap.Toast(toast, { delay: 3000 }).show();
}

document.getElementById('buscador').addEventListener('input', (e) => {
    const texto = e.target.value.toLowerCase();
    const filtrados = perfumes.filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        p.marca.toLowerCase().includes(texto)
    );
    renderizarPerfumes(filtrados);
});

cargarPerfumes();