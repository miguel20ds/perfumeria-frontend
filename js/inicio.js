document.addEventListener('DOMContentLoaded', () => {
   const esAdmin = document.querySelector('.idioma-selector-container[data-admin]') !== null;
    inicializarSelectorIdioma(esAdmin);
    aplicarTraducciones();
});

if (obtenerToken()) {
    const btnAcceso = document.getElementById('btn-acceso');
    if (btnAcceso) {
        btnAcceso.innerHTML = `
            <a href="${obtenerRol() === 'ADMIN' ? 'admin-perfumes.html' : 'catalogo.html'}" 
                class="btn btn-login btn-sm px-3" data-i18n="nav.mi.catalogo">${t('nav.mi.catalogo')}</a>
            <button onclick="cerrarSesion()" class="btn btn-registro btn-sm px-3" 
                data-i18n="nav.cerrar.sesion">${t('nav.cerrar.sesion')}</button>
        `;
    }
}