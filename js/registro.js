document.addEventListener('DOMContentLoaded', () => {
    aplicarTraducciones();
});

if (obtenerToken()) {
    window.location.href = obtenerRol() === 'ADMIN' ? 'admin-perfumes.html' : 'catalogo.html';
}

async function registrarse() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    alerta.classList.add('d-none');

    if (!nombre || !email || !password) {
        mostrarAlerta('Por favor completa todos los campos.', 'danger');
        return;
    }

    if (password.length < 6) {
        mostrarAlerta('La contraseña debe tener al menos 6 caracteres.', 'danger');
        return;
    }

    try {
        const data = await api.registro({ nombre, email, password });
        guardarSesion(data);
        mostrarAlerta('Cuenta creada exitosamente. Redirigiendo...', 'success');
        setTimeout(() => {
            window.location.href = 'catalogo.html';
        }, 1500);
    } catch (err) {
        mostrarAlerta(err.error || 'Error al crear la cuenta.', 'danger');
    }
}

function mostrarAlerta(mensaje, tipo) {
    const alerta = document.getElementById('alerta');
    alerta.textContent = mensaje;
    alerta.className = `alert alert-${tipo}`;
}

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') registrarse();
});