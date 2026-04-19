verificarAdmin();

let todosUsuarios = [];

document.getElementById('nombre-usuario').textContent = obtenerNombre();

async function cargarUsuarios() {
    try {
        todosUsuarios = await api.listarUsuarios();
        renderizarTabla(todosUsuarios);
    } catch (err) {
        console.error(err);
    } finally {
        document.getElementById('loading').classList.add('d-none');
    }
}

function renderizarTabla(lista) {
    const tablaContainer = document.getElementById('tabla-container');
    const sinUsuarios = document.getElementById('sin-usuarios');

    if (lista.length === 0) {
        tablaContainer.classList.add('d-none');
        sinUsuarios.classList.remove('d-none');
        return;
    }

    sinUsuarios.classList.add('d-none');
    tablaContainer.classList.remove('d-none');

    document.getElementById('tabla-body').innerHTML = lista.map(u => `
        <tr>
            <td class="ps-4">
                <div class="d-flex align-items-center gap-3">
                    <div class="avatar">${u.nombre.charAt(0).toUpperCase()}</div>
                    <span class="fw-semibold small">${u.nombre}</span>
                </div>
            </td>
            <td class="text-muted small">${u.email}</td>
            <td>
                <span class="badge badge-${u.rol.toLowerCase()} px-3 py-2 rounded-pill">
                    <i class="bi bi-${u.rol === 'ADMIN' ? 'shield-check' : 'person'} me-1"></i>
                    ${u.rol}
                </span>
            </td>
            <td class="text-muted small">
                ${new Date(u.fechaRegistro).toLocaleDateString('es-CO', { year:'numeric', month:'short', day:'numeric' })}
            </td>
        </tr>
    `).join('');
}

document.getElementById('buscador').addEventListener('input', (e) => {
    const texto = e.target.value.toLowerCase();
    const filtrados = todosUsuarios.filter(u =>
        u.nombre.toLowerCase().includes(texto) ||
        u.email.toLowerCase().includes(texto)
    );
    renderizarTabla(filtrados);
});

cargarUsuarios();