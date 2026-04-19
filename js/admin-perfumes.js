verificarAdmin();

let perfumeIdEditando = null;
let perfumeIdEliminando = null;

document.getElementById('nombre-usuario').textContent = obtenerNombre();

async function cargarPerfumes() {
    try {
        const perfumes = await api.listarPerfumes();
        renderizarTabla(perfumes);
    } catch (err) {
        mostrarToast('Error al cargar los perfumes.', 'danger');
    } finally {
        document.getElementById('loading').classList.add('d-none');
    }
}

function renderizarTabla(lista) {
    const tablaContainer = document.getElementById('tabla-container');
    const sinPerfumes = document.getElementById('sin-perfumes');

    if (lista.length === 0) {
        tablaContainer.classList.add('d-none');
        sinPerfumes.classList.remove('d-none');
        return;
    }

    sinPerfumes.classList.add('d-none');
    tablaContainer.classList.remove('d-none');

    document.getElementById('tabla-body').innerHTML = lista.map(p => `
        <tr>
            <td class="ps-4">
                <div class="d-flex align-items-center gap-3">
                    ${p.imagenUrl
                        ? `<img src="${p.imagenUrl.startsWith('http') ? p.imagenUrl : API_URL + p.imagenUrl}" class="perfume-thumb" alt="${p.nombre}"
                               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                           <div class="perfume-thumb-placeholder" style="display:none;"><i class="bi bi-droplet-fill"></i></div>`
                        : `<div class="perfume-thumb-placeholder"><i class="bi bi-droplet-fill"></i></div>`
                    }
                    <div>
                        <p class="fw-semibold mb-0 small">${p.nombre}</p>
                        <p class="text-muted mb-0" style="font-size:0.78rem;">${p.descripcion ? p.descripcion.substring(0, 40) + '...' : ''}</p>
                    </div>
                </div>
            </td>
            <td><span class="badge" style="background:#ede9fe; color:#7c3aed;">${p.marca}</span></td>
            <td class="fw-semibold">$${p.precio.toLocaleString('es-CO')}</td>
            <td>
                <span class="badge ${p.stock === 0 ? 'bg-danger' : 'bg-success'} bg-opacity-10 ${p.stock === 0 ? 'text-danger' : 'text-success'}">
                    ${p.stock} uds.
                </span>
            </td>
            <td class="text-end pe-4">
                <button class="btn btn-sm btn-outline-secondary me-1" onclick="abrirModalEditar(${JSON.stringify(p).replace(/"/g, '&quot;')})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" onclick="abrirModalEliminar(${p.id}, '${p.nombre}')">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function abrirModalCrear() {
    perfumeIdEditando = null;
    document.getElementById('modal-titulo').textContent = 'Nuevo perfume';
    document.getElementById('f-nombre').value = '';
    document.getElementById('f-marca').value = '';
    document.getElementById('f-precio').value = '';
    document.getElementById('f-stock').value = '';
    document.getElementById('f-imagen-file').value = '';
    document.getElementById('f-descripcion').value = '';
    document.getElementById('f-imagen-url').value = '';
    document.getElementById('alerta-modal').classList.add('d-none');
    new bootstrap.Modal(document.getElementById('modalPerfume')).show();
}

function abrirModalEditar(perfume) {
    perfumeIdEditando = perfume.id;
    document.getElementById('modal-titulo').textContent = 'Editar perfume';
    document.getElementById('f-nombre').value = perfume.nombre;
    document.getElementById('f-marca').value = perfume.marca;
    document.getElementById('f-precio').value = perfume.precio;
    document.getElementById('f-stock').value = perfume.stock;
    document.getElementById('f-imagen-file').value = '';
    document.getElementById('f-imagen-url').value = perfume.imagenUrl || '';
    document.getElementById('f-descripcion').value = perfume.descripcion || '';
    document.getElementById('alerta-modal').classList.add('d-none');
    new bootstrap.Modal(document.getElementById('modalPerfume')).show();
}

async function guardarPerfume() {
    const nombre = document.getElementById('f-nombre').value.trim();
    const marca = document.getElementById('f-marca').value.trim();
    const precio = document.getElementById('f-precio').value;
    const stock = document.getElementById('f-stock').value;
    const descripcion = document.getElementById('f-descripcion').value.trim();
    const fileInput = document.getElementById('f-imagen-file');
    const urlInput = document.getElementById('f-imagen-url').value.trim();

    if (!nombre || !marca || !precio || !stock) {
        mostrarAlertaModal('Por favor completa los campos obligatorios.', 'danger');
        return;
    }

    let imagenUrl = urlInput;

    if (fileInput.files.length > 0) {
        try {
            const formData = new FormData();
            formData.append('file', fileInput.files[0]);

            const token = obtenerToken();
            const response = await fetch(`${API_URL}/perfumes/upload`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });

            const data = await response.json();
            if (!response.ok) throw data;
            imagenUrl = data.url;
        } catch (err) {
            mostrarAlertaModal('Error al subir la imagen.', 'danger');
            return;
        }
    }

    const datos = {
        nombre,
        marca,
        precio: parseFloat(precio),
        stock: parseInt(stock),
        imagenUrl,
        descripcion
    };

    try {
        if (perfumeIdEditando) {
            await api.actualizarPerfume(perfumeIdEditando, datos);
            mostrarToast('Perfume actualizado correctamente.', 'success');
        } else {
            await api.crearPerfume(datos);
            mostrarToast('Perfume creado correctamente.', 'success');
        }
        bootstrap.Modal.getInstance(document.getElementById('modalPerfume')).hide();
        cargarPerfumes();
    } catch (err) {
        mostrarAlertaModal(err.error || 'Error al guardar el perfume.', 'danger');
    }
}

function abrirModalEliminar(id, nombre) {
    perfumeIdEliminando = id;
    document.getElementById('nombre-eliminar').textContent = nombre;
    new bootstrap.Modal(document.getElementById('modalEliminar')).show();
}

async function confirmarEliminar() {
    try {
        await api.eliminarPerfume(perfumeIdEliminando);
        bootstrap.Modal.getInstance(document.getElementById('modalEliminar')).hide();
        mostrarToast('Perfume eliminado correctamente.', 'success');
        cargarPerfumes();
    } catch (err) {
        bootstrap.Modal.getInstance(document.getElementById('modalEliminar')).hide();
        mostrarToast(err.error || 'Error al eliminar el perfume.', 'danger');
    }
}

function mostrarAlertaModal(mensaje, tipo) {
    const alerta = document.getElementById('alerta-modal');
    alerta.textContent = mensaje;
    alerta.className = `alert alert-${tipo}`;
}

function mostrarToast(mensaje, tipo) {
    const toast = document.getElementById('toast');
    const toastMensaje = document.getElementById('toast-mensaje');
    toastMensaje.textContent = mensaje;
    toast.className = `toast align-items-center text-white border-0 bg-${tipo === 'success' ? 'success' : 'danger'}`;
    new bootstrap.Toast(toast, { delay: 3000 }).show();
}

cargarPerfumes();