if (obtenerToken()) {
    const btnAcceso = document.getElementById('btn-acceso');
    if (btnAcceso) {
        btnAcceso.innerHTML = `
            <a href="${obtenerRol() === 'ADMIN' ? 'admin-perfumes.html' : 'catalogo.html'}" class="btn btn-login btn-sm px-3">Mi catálogo</a>
            <button onclick="cerrarSesion()" class="btn btn-registro btn-sm px-3">Cerrar sesión</button>
        `;
    }
}