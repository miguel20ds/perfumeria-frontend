const API_URL = 'http://localhost:8080';

function guardarSesion(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('nombre', data.nombre);
    localStorage.setItem('email', data.email);
    localStorage.setItem('rol', data.rol);
}

function obtenerToken() {
    return localStorage.getItem('token');
}

function obtenerRol() {
    return localStorage.getItem('rol');
}

function obtenerNombre() {
    return localStorage.getItem('nombre');
}

function cerrarSesion() {
    localStorage.clear();
    window.location.href = 'inicio.html';
}

function verificarAutenticacion() {
    const token = obtenerToken();
    if (!token) {
        window.location.href = 'index.html';
    }
}

function verificarAdmin() {
    verificarAutenticacion();
    if (obtenerRol() !== 'ADMIN') {
        window.location.href = 'catalogo.html';
    }
}

function obtenerIdioma() {
    return localStorage.getItem('idioma') || 'es';
}

function cambiarIdioma(idioma) {
    localStorage.setItem('idioma', idioma);
    location.reload();
}