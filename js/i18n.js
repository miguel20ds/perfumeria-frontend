const traducciones = {
    es: {
        // Navbar
        'nav.catalogo': 'Catálogo',
        'nav.mis.reservas': 'Mis reservas',
        'nav.salir': 'Salir',
        'nav.iniciar.sesion': 'Iniciar sesión',
        'nav.registrarse': 'Registrarse',

        // Login
        'login.titulo': 'Iniciar sesión',
        'login.email': 'Correo electrónico',
        'login.password': 'Contraseña',
        'login.btn': 'Iniciar sesión',
        'login.no.cuenta': '¿No tienes cuenta?',
        'login.registrate': 'Regístrate',
        'login.campos.vacios': 'Por favor completa todos los campos.',

        // Registro
        'registro.titulo': 'Registro',
        'registro.nombre': 'Nombre completo',
        'registro.email': 'Correo electrónico',
        'registro.password': 'Contraseña',
        'registro.btn': 'Crear cuenta',
        'registro.ya.cuenta': '¿Ya tienes cuenta?',
        'registro.inicia': 'Inicia sesión',
        'registro.exito': 'Cuenta creada exitosamente. Redirigiendo...',
        'registro.campos.vacios': 'Por favor completa todos los campos.',
        'registro.password.corta': 'La contraseña debe tener al menos 6 caracteres.',

        // Catálogo
        'catalogo.titulo': 'Catálogo de perfumes',
        'catalogo.subtitulo': 'Descubre nuestra colección exclusiva',
        'catalogo.buscar': 'Buscar perfume...',
        'catalogo.cargando': 'Cargando perfumes...',
        'catalogo.sin.resultados': 'No se encontraron perfumes.',
        'catalogo.disponibles': 'disponibles',
        'catalogo.reservar': 'Reservar',
        'catalogo.sin.stock': 'Sin stock',
        'catalogo.error.cargar': 'Error al cargar los perfumes.',

        // Modal reserva
        'modal.reserva.titulo': 'Confirmar reserva',
        'modal.reserva.texto': '¿Deseas reservar',
        'modal.reserva.info': 'Puedes recoger tu reserva en tienda durante nuestro horario de atención.',
        'modal.reserva.cancelar': 'Cancelar',
        'modal.reserva.confirmar': 'Confirmar reserva',
        'modal.reserva.exito': 'Reserva realizada exitosamente.',

        // Mis reservas
        'reservas.titulo': 'Mis reservas',
        'reservas.subtitulo': 'Gestiona tus reservas activas',
        'reservas.cargando': 'Cargando reservas...',
        'reservas.sin.reservas': 'No tienes reservas aún.',
        'reservas.ver.catalogo': 'Ver catálogo',
        'reservas.cancelar': 'Cancelar',
        'reservas.entregado': 'Entregado',
        'reservas.error.cargar': 'Error al cargar las reservas.',
        'reservas.cancelada': 'Reserva cancelada correctamente.',
        'reservas.pendiente': 'PENDIENTE',

        // Admin perfumes
        'admin.perfumes.titulo': 'Gestión de perfumes',
        'admin.perfumes.subtitulo': 'Crea, edita y elimina perfumes del catálogo',
        'admin.perfumes.nuevo': 'Nuevo perfume',
        'admin.perfumes.guardar': 'Guardar',
        'admin.perfumes.creado': 'Perfume creado correctamente.',
        'admin.perfumes.actualizado': 'Perfume actualizado correctamente.',
        'admin.perfumes.eliminado': 'Perfume eliminado correctamente.',
        'admin.perfumes.campos': 'Por favor completa los campos obligatorios.',

        // Admin reservas
        'admin.reservas.titulo': 'Gestión de reservas',
        'admin.reservas.entregado': 'Reserva marcada como entregada.',
        'admin.reservas.eliminada': 'Reserva eliminada correctamente.',

        // Admin usuarios
        'admin.usuarios.titulo': 'Usuarios registrados',
        'admin.usuarios.subtitulo': 'Listado de todos los usuarios del sistema',
        'admin.usuarios.buscar': 'Buscar usuario...',
    },
    en: {
        // Navbar
        'nav.catalogo': 'Catalog',
        'nav.mis.reservas': 'My reservations',
        'nav.salir': 'Logout',
        'nav.iniciar.sesion': 'Login',
        'nav.registrarse': 'Register',

        // Login
        'login.titulo': 'Login',
        'login.email': 'Email address',
        'login.password': 'Password',
        'login.btn': 'Login',
        'login.no.cuenta': "Don't have an account?",
        'login.registrate': 'Register',
        'login.campos.vacios': 'Please fill in all fields.',

        // Registro
        'registro.titulo': 'Register',
        'registro.nombre': 'Full name',
        'registro.email': 'Email address',
        'registro.password': 'Password',
        'registro.btn': 'Create account',
        'registro.ya.cuenta': 'Already have an account?',
        'registro.inicia': 'Login',
        'registro.exito': 'Account created successfully. Redirecting...',
        'registro.campos.vacios': 'Please fill in all fields.',
        'registro.password.corta': 'Password must be at least 6 characters.',

        // Catálogo
        'catalogo.titulo': 'Perfume catalog',
        'catalogo.subtitulo': 'Discover our exclusive collection',
        'catalogo.buscar': 'Search perfume...',
        'catalogo.cargando': 'Loading perfumes...',
        'catalogo.sin.resultados': 'No perfumes found.',
        'catalogo.disponibles': 'available',
        'catalogo.reservar': 'Reserve',
        'catalogo.sin.stock': 'Out of stock',
        'catalogo.error.cargar': 'Error loading perfumes.',

        // Modal reserva
        'modal.reserva.titulo': 'Confirm reservation',
        'modal.reserva.texto': 'Do you want to reserve',
        'modal.reserva.info': 'You can pick up your reservation at the store during our opening hours.',
        'modal.reserva.cancelar': 'Cancel',
        'modal.reserva.confirmar': 'Confirm reservation',
        'modal.reserva.exito': 'Reservation made successfully.',

        // Mis reservas
        'reservas.titulo': 'My reservations',
        'reservas.subtitulo': 'Manage your active reservations',
        'reservas.cargando': 'Loading reservations...',
        'reservas.sin.reservas': 'You have no reservations yet.',
        'reservas.ver.catalogo': 'View catalog',
        'reservas.cancelar': 'Cancel',
        'reservas.entregado': 'Delivered',
        'reservas.error.cargar': 'Error loading reservations.',
        'reservas.cancelada': 'Reservation cancelled successfully.',
        'reservas.pendiente': 'PENDING',

        // Admin perfumes
        'admin.perfumes.titulo': 'Perfume management',
        'admin.perfumes.subtitulo': 'Create, edit and delete perfumes from the catalog',
        'admin.perfumes.nuevo': 'New perfume',
        'admin.perfumes.guardar': 'Save',
        'admin.perfumes.creado': 'Perfume created successfully.',
        'admin.perfumes.actualizado': 'Perfume updated successfully.',
        'admin.perfumes.eliminado': 'Perfume deleted successfully.',
        'admin.perfumes.campos': 'Please fill in all required fields.',

        // Admin reservas
        'admin.reservas.titulo': 'Reservation management',
        'admin.reservas.entregado': 'Reservation marked as delivered.',
        'admin.reservas.eliminada': 'Reservation deleted successfully.',

        // Admin usuarios
        'admin.usuarios.titulo': 'Registered users',
        'admin.usuarios.subtitulo': 'List of all system users',
        'admin.usuarios.buscar': 'Search user...',
    }
};

function t(key) {
    const idioma = obtenerIdioma();
    return traducciones[idioma][key] || key;
}

function aplicarTraducciones() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const traduccion = t(key);
        if (!traduccion || traduccion === key) return;
        
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = traduccion;
        } else {
            el.textContent = traduccion;
        }
    });
}