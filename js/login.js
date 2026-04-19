if (obtenerToken()) {
    window.location.href = obtenerRol() === 'ADMIN' ? 'admin-perfumes.html' : 'catalogo.html';
}

async function iniciarSesion() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const alerta = document.getElementById('alerta');

    if (!email || !password) {
        alerta.textContent = 'Por favor completa todos los campos.';
        alerta.classList.remove('d-none');
        return;
    }

    try {
        const data = await api.login({ email, password });
        guardarSesion(data);
        window.location.href = data.rol === 'ADMIN' ? 'admin-perfumes.html' : 'catalogo.html';
    } catch (err) {
        alerta.textContent = err.error || 'Credenciales incorrectas.';
        alerta.classList.remove('d-none');
    }
}

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') iniciarSesion();
});