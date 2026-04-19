verificarAdmin();

let todasReservas = [];
let reservaIdEliminando = null;

document.getElementById('nombre-usuario').textContent = obtenerNombre();

async function cargarReservas() {
    try {
        todasReservas = await api.listarTodasReservas();
        actualizarEstadisticas(todasReservas);
        renderizarTabla(todasReservas);
    } catch (err) {
        mostrarToast('Error al cargar las reservas.', 'danger');
    } finally {
        document.getElementById('loading').classList.add('d-none');
    }
}

function actualizarEstadisticas(lista) {
    const pendientes = lista.filter(r => r.estado === 'PENDIENTE').length;
    const entregadas = lista.filter(r => r.estado === 'ENTREGADO').length;
    const usuarios = new Set(lista.map(r => r.usuario.id)).size;

    document.getElementById('total-reservas').textContent = lista.length;
    document.getElementById('total-pendientes').textContent = pendientes;
    document.getElementById('total-entregadas').textContent = entregadas;
    document.getElementById('total-usuarios').textContent = usuarios;
}

function filtrar(estado) {
    const filtradas = estado === 'TODOS'
        ? todasReservas
        : todasReservas.filter(r => r.estado === estado);
    renderizarTabla(filtradas);
}

function renderizarTabla(lista) {
    const tablaContainer = document.getElementById('tabla-container');
    const sinReservas = document.getElementById('sin-reservas');

    if (lista.length === 0) {
        tablaContainer.classList.add('d-none');
        sinReservas.classList.remove('d-none');
        return;
    }

    sinReservas.classList.add('d-none');
    tablaContainer.classList.remove('d-none');

    document.getElementById('tabla-body').innerHTML = lista.map(r => `
        <tr>
            <td class="ps-4 text-muted small">#${r.id}</td>
            <td>
                <p class="fw-semibold mb-0 small">${r.usuario.nombre}</p>
                <p class="text-muted mb-0" style="font-size:0.78rem;">${r.usuario.email}</p>
            </td>
            <td>
                <p class="fw-semibold mb-0 small">${r.perfume.nombre}</p>
                <p class="text-muted mb-0" style="font-size:0.78rem;">${r.perfume.marca} — $${r.perfume.precio.toLocaleString('es-CO')}</p>
            </td>
            <td class="text-muted small">
                ${new Date(r.fechaReserva).toLocaleDateString('es-CO', { year:'numeric', month:'short', day:'numeric' })}
            </td>
            <td>
                <span class="badge badge-${r.estado.toLowerCase()} px-3 py-2 rounded-pill">
                    <i class="bi bi-${r.estado === 'ENTREGADO' ? 'check-circle' : 'clock'} me-1"></i>
                    ${r.estado}
                </span>
            </td>
            <td class="text-end pe-4">
                ${r.estado === 'PENDIENTE' ? `
                    <button class="btn btn-sm btn-outline-success me-1" onclick="marcarEntregado(${r.id})" title="Marcar como entregado">
                        <i class="bi bi-check-lg"></i>
                    </button>
                ` : ''}
                <button class="btn btn-sm btn-outline-danger" onclick="abrirModalEliminar(${r.id}, '${r.perfume.nombre}')" title="Eliminar">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

async function marcarEntregado(id) {
    try {
        await api.marcarEntregado(id);
        mostrarToast('Reserva marcada como entregada.', 'success');
        cargarReservas();
    } catch (err) {
        mostrarToast(err.error || 'Error al actualizar la reserva.', 'danger');
    }
}

function abrirModalEliminar(id, nombre) {
    reservaIdEliminando = id;
    document.getElementById('nombre-eliminar').textContent = nombre;
    new bootstrap.Modal(document.getElementById('modalEliminar')).show();
}

async function confirmarEliminar() {
    try {
        await api.eliminarReservaAdmin(reservaIdEliminando);
        bootstrap.Modal.getInstance(document.getElementById('modalEliminar')).hide();
        mostrarToast('Reserva eliminada correctamente.', 'success');
        cargarReservas();
    } catch (err) {
        bootstrap.Modal.getInstance(document.getElementById('modalEliminar')).hide();
        mostrarToast(err.error || 'Error al eliminar la reserva.', 'danger');
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