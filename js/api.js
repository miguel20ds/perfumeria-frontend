async function request(endpoint, method = 'GET', body = null, auth = true) {
    const headers = { 
        'Content-Type': 'application/json',
        'Accept-Language': obtenerIdioma()
     };

    if (auth) {
        const token = obtenerToken();
        if (token) headers['Authorization'] = `Bearer ${token}`;
    }

    const config = { method, headers };
    if (body) config.body = JSON.stringify(body);

    const response = await fetch(`${API_URL}${endpoint}`, config);

    if (response.status === 401 && !endpoint.includes('/auth/')) {
    cerrarSesion();
    return;
}

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
        throw data || { error: 'Error en el servidor' };
    }

    return data;
}

const api = {
    // Auth
    login: (body) => request('/auth/login', 'POST', body, false),
    registro: (body) => request('/auth/registro', 'POST', body, false),

    // Perfumes
    listarPerfumes: () => request('/perfumes', 'GET', null, false),
    crearPerfume: (body) => request('/perfumes', 'POST', body),
    actualizarPerfume: (id, body) => request(`/perfumes/${id}`, 'PUT', body),
    eliminarPerfume: (id) => request(`/perfumes/${id}`, 'DELETE'),

    // Reservas
    crearReserva: (perfumeId) => request('/reservas', 'POST', { perfumeId }),
    misReservas: () => request('/reservas/mis-reservas'),
    eliminarReserva: (id) => request(`/reservas/${id}`, 'DELETE'),

    // Admin
    listarUsuarios: () => request('/admin/usuarios'),
    listarTodasReservas: () => request('/admin/reservas'),
    marcarEntregado: (id) => request(`/admin/reservas/${id}/entregar`, 'PUT'),
    eliminarReservaAdmin: (id) => request(`/admin/reservas/${id}`, 'DELETE'),
};