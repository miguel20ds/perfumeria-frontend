verificarAutenticacion();

let reservaIdSeleccionada = null;

document.getElementById('nombre-usuario').textContent = obtenerNombre();

async function cargarReservas() {
    try {
        const reservas = await api.misReservas();
        renderizarReservas(reservas);
    } catch (err) {
        mostrarToast('Error al cargar las reservas.', 'danger');
    } finally {
        document.getElementById('loading').classList.add('d-none');
    }
}

function renderizarReservas(lista) {
    const container = document.getElementById('reservas-container');
    const sinReservas = document.getElementById('sin-reservas');

    if (lista.length === 0) {
        sinReservas.classList.remove('d-none');
        container.classList.add('d-none');
        return;
    }

    sinReservas.classList.add('d-none');
    container.classList.remove('d-none');

    container.innerHTML = lista.map(r => `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="reserva-card p-4 h-100 d-flex flex-column">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <div>
                        <span class="badge badge-${r.estado.toLowerCase()} px-3 py-2 rounded-pill">
                            <i class="bi bi-${r.estado === 'ENTREGADO' ? 'check-circle' : 'clock'} me-1"></i>
                            ${r.estado}
                        </span>
                    </div>
                    <span class="text-muted small">#${r.id}</span>
                </div>

                <div class="mb-3">
                    <div class="d-flex align-items-center gap-2 mb-2">
                        <div style="width:40px; height:40px; background:#ede9fe; border-radius:10px; display:flex; align-items:center; justify-content:center; color:#7c3aed;">
                            <i class="bi bi-droplet-fill"></i>
                        </div>
                        <div>
                            <p class="fw-semibold mb-0 small">${r.perfume.nombre}</p>
                            <p class="text-muted mb-0" style="font-size:0.8rem;">${r.perfume.marca}</p>
                        </div>
                    </div>
                    <p class="text-muted small mb-0">
                        <i class="bi bi-calendar3 me-1"></i>
                        ${new Date(r.fechaReserva).toLocaleDateString('es-CO', { year:'numeric', month:'long', day:'numeric' })}
                    </p>
                </div>

                <div class="mt-auto d-flex justify-content-between align-items-center">
                    <span class="fw-bold" style="color:#7c3aed;">$${r.perfume.precio.toLocaleString('es-CO')}</span>
                    ${r.estado === 'PENDIENTE' ? `
                        <button class="btn btn-sm btn-outline-danger" onclick="abrirModalEliminar(${r.id}, '${r.perfume.nombre}')">
                            <i class="bi bi-trash me-1"></i>Cancelar
                        </button>
                    ` : `
                        <span class="text-success small"><i class="bi bi-check-circle me-1"></i>Entregado</span>
                    `}
                </div>
            </div>
        </div>
    `).join('');
}

function abrirModalEliminar(id, nombre) {
    reservaIdSeleccionada = id;
    document.getElementById('nombre-perfume-modal').textContent = nombre;
    new bootstrap.Modal(document.getElementById('modalEliminar')).show();
}

async function confirmarEliminar() {
    try {
        await api.eliminarReserva(reservaIdSeleccionada);
        bootstrap.Modal.getInstance(document.getElementById('modalEliminar')).hide();
        mostrarToast('Reserva cancelada correctamente.', 'success');
        cargarReservas();
    } catch (err) {
        bootstrap.Modal.getInstance(document.getElementById('modalEliminar')).hide();
        mostrarToast(err.error || 'Error al cancelar la reserva.', 'danger');
    }
}

function mostrarToast(mensaje, tipo) {
    const toast = document.getElementById('toast');
    const toastMensaje = document.getElementById('toast-mensaje');
    toastMensaje.textContent = mensaje;
    toast.className = `toast align-items-center text-white border-0 bg-${tipo === 'success' ? 'success' : 'danger'}`;
    new bootstrap.Toast(toast, { delay: 3000 }).show();
}

cargarReservas();