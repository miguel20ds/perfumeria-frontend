const traducciones = {
    es: {
        //inicio
        'inicio.hero.titulo1': 'Descubre el arte',
        'inicio.hero.titulo2': 'del perfume exclusivo',
        'inicio.hero.btn': 'Explorar catálogo',
        'inicio.por.que': '¿Por qué elegirnos?',
        'inicio.por.que.sub': 'Calidad y exclusividad en cada fragancia',
        'inicio.marcas.titulo': 'Marcas exclusivas',
        'inicio.marcas.desc': 'Trabajamos con las mejores casas de perfumería del mundo.',
        'inicio.originales.titulo': '100% originales',
        'inicio.originales.desc': 'Todos nuestros productos son auténticos y certificados.',
        'inicio.reserva.titulo': 'Reserva fácil',
        'inicio.reserva.desc': 'Reserva tu fragancia favorita en pocos clics y recógela en tienda.',
        'inicio.visitanos': 'Visítanos',
        'inicio.visitanos.sub': 'Estamos esperándote',
        'inicio.direccion': 'Dirección',
        'inicio.horario': 'Horario',
        'inicio.contacto': 'Contacto',
        'inicio.redes': 'Redes sociales',
        'inicio.derechos': '© 2026 Tu Aroma Encantador. Todos los derechos reservados.',
        'nav.iniciar.sesion': 'Iniciar sesión',
        'nav.registrarse': 'Registrarse',
        'nav.mi.catalogo': 'Mi catálogo',
        'nav.cerrar.sesion': 'Cerrar sesión',

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
        'nav.perfumes': 'Perfumes',
        'nav.reservas': 'Reservas',
        'nav.usuarios': 'Usuarios',
        'admin.perfumes.editar': 'Editar perfume',
        'admin.perfumes.eliminar.titulo': 'Eliminar perfume',
        'admin.perfumes.eliminar.texto': '¿Estás seguro de que deseas eliminar',
        'admin.perfumes.cancelar': 'Cancelar',
        'admin.perfumes.eliminar.btn': 'Eliminar',
        'admin.reservas.subtitulo': 'Administra todas las reservas de los usuarios',
        'admin.reservas.pendientes': 'Pendientes',
        'admin.reservas.entregadas': 'Entregadas',
        'admin.reservas.usuarios.activos': 'Usuarios activos',
        'admin.reservas.total': 'Total reservas',
        'admin.usuarios.subtitulo': 'Listado de todos los usuarios del sistema',
        'admin.perfumes.cargando': 'Cargando perfumes...',
        'admin.perfumes.sin.perfumes': 'No hay perfumes en el catálogo.',
        'admin.perfumes.col.perfume': 'Perfume',
        'admin.perfumes.col.marca': 'Marca',
        'admin.perfumes.col.precio': 'Precio',
        'admin.perfumes.col.stock': 'Stock',
        'admin.perfumes.col.acciones': 'Acciones',
        'admin.perfumes.label.nombre': 'Nombre',
        'admin.perfumes.label.marca': 'Marca',
        'admin.perfumes.label.precio': 'Precio',
        'admin.perfumes.label.stock': 'Stock',
        'admin.perfumes.label.imagen': 'Imagen',
        'admin.perfumes.label.subir': 'Sube la imagen',
        'admin.perfumes.label.url': 'o usa una URL',
        'admin.perfumes.label.descripcion': 'Descripción',
        'admin.perfumes.modal.nuevo': 'Nuevo perfume',
        'admin.perfumes.modal.cancelar': 'Cancelar',
        'admin.perfumes.eliminar.titulo': 'Eliminar perfume',
        'admin.perfumes.eliminar.texto': '¿Estás seguro de que deseas eliminar',
        'admin.perfumes.eliminar.accion': 'Esta acción no se puede deshacer.',
        'admin.perfumes.eliminar.btn': 'Eliminar',
        'admin.reporte.descargar': 'Descargar reporte',
        'admin.reporte.exito': 'Reporte descargado correctamente.',

        // Admin reservas
        'admin.reservas.titulo': 'Gestión de reservas',
        'admin.reservas.entregado': 'Reserva marcada como entregada.',
        'admin.reservas.eliminada': 'Reserva eliminada correctamente.',
        'admin.reservas.cargando': 'Cargando reservas...',
        'admin.reservas.sin.reservas': 'No hay reservas.',
        'admin.reservas.col.usuario': 'Usuario',
        'admin.reservas.col.perfume': 'Perfume',
        'admin.reservas.col.fecha': 'Fecha',
        'admin.reservas.col.estado': 'Estado',
        'admin.reservas.col.acciones': 'Acciones',
        'admin.reservas.filtro.todos': 'Todos',
        'admin.reservas.filtro.pendientes': 'Pendientes',
        'admin.reservas.filtro.entregados': 'Entregados',
        'admin.reservas.eliminar.titulo': 'Eliminar reserva',
        'admin.reservas.eliminar.texto': '¿Estás seguro de que deseas eliminar la reserva de',
        'admin.reservas.eliminar.btn': 'Eliminar',
        'admin.reservas.modal.cancelar': 'Cancelar',
        'admin.reporte.todos': 'Todas las reservas',
        'admin.reporte.pendientes': 'Solo pendientes',
        'admin.reporte.entregados': 'Solo entregados',


        // Admin usuarios
        'admin.usuarios.titulo': 'Usuarios registrados',
        'admin.usuarios.subtitulo': 'Listado de todos los usuarios del sistema',
        'admin.usuarios.buscar': 'Buscar usuario...',
        'admin.usuarios.cargando': 'Cargando usuarios...',
        'admin.usuarios.sin.usuarios': 'No hay usuarios registrados.',
        'admin.usuarios.col.usuario': 'Usuario',
        'admin.usuarios.col.email': 'Email',
        'admin.usuarios.col.rol': 'Rol',
        'admin.usuarios.col.fecha': 'Fecha registro',

        //slider internacionalización
        'idioma.es': 'Español',
        'idioma.en': 'Inglés',
        'idioma.fr': 'Francés',
    },
    en: {
        //inicio
        'inicio.hero.titulo1': 'Discover the art',
        'inicio.hero.titulo2': 'of exclusive perfume',
        'inicio.hero.btn': 'Explore catalog',
        'inicio.por.que': 'Why choose us?',
        'inicio.por.que.sub': 'Quality and exclusivity in every fragrance',
        'inicio.marcas.titulo': 'Exclusive brands',
        'inicio.marcas.desc': 'We work with the best perfume houses in the world.',
        'inicio.originales.titulo': '100% originals',
        'inicio.originales.desc': 'All our products are authentic and certified.',
        'inicio.reserva.titulo': 'Easy reservation',
        'inicio.reserva.desc': 'Reserve your favorite fragrance in a few clicks and pick it up in store.',
        'inicio.visitanos': 'Visit us',
        'inicio.visitanos.sub': 'We are waiting for you',
        'inicio.direccion': 'Address',
        'inicio.horario': 'Hours',
        'inicio.contacto': 'Contact',
        'inicio.redes': 'Social media',
        'inicio.derechos': '© 2026 Tu Aroma Encantador. All rights reserved.',
        'nav.iniciar.sesion': 'Login',
        'nav.registrarse': 'Register',
        'nav.mi.catalogo': 'My catalog',
        'nav.cerrar.sesion': 'Logout',

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
        'nav.perfumes': 'Perfumes',
        'nav.reservas': 'Reservations',
        'nav.usuarios': 'Users',
        'admin.perfumes.editar': 'Edit perfume',
        'admin.perfumes.eliminar.titulo': 'Delete perfume',
        'admin.perfumes.eliminar.texto': 'Are you sure you want to delete',
        'admin.perfumes.cancelar': 'Cancel',
        'admin.perfumes.eliminar.btn': 'Delete',
        'admin.reservas.subtitulo': 'Manage all user reservations',
        'admin.reservas.pendientes': 'Pending',
        'admin.reservas.entregadas': 'Delivered',
        'admin.reservas.usuarios.activos': 'Active users',
        'admin.reservas.total': 'Total reservations',
        'admin.usuarios.subtitulo': 'List of all system users',
        'admin.perfumes.cargando': 'Loading perfumes...',
        'admin.perfumes.sin.perfumes': 'No perfumes in the catalog.',
        'admin.perfumes.col.perfume': 'Perfume',
        'admin.perfumes.col.marca': 'Brand',
        'admin.perfumes.col.precio': 'Price',
        'admin.perfumes.col.stock': 'Stock',
        'admin.perfumes.col.acciones': 'Actions',
        'admin.perfumes.label.nombre': 'Name',
        'admin.perfumes.label.marca': 'Brand',
        'admin.perfumes.label.precio': 'Price',
        'admin.perfumes.label.stock': 'Stock',
        'admin.perfumes.label.imagen': 'Image',
        'admin.perfumes.label.subir': 'Upload image',
        'admin.perfumes.label.url': 'or use a URL',
        'admin.perfumes.label.descripcion': 'Description',
        'admin.perfumes.modal.nuevo': 'New perfume',
        'admin.perfumes.modal.cancelar': 'Cancel',
        'admin.perfumes.eliminar.titulo': 'Delete perfume',
        'admin.perfumes.eliminar.texto': 'Are you sure you want to delete',
        'admin.perfumes.eliminar.accion': 'This action cannot be undone.',
        'admin.perfumes.eliminar.btn': 'Delete',
        'admin.reporte.descargar': 'Download report',
        'admin.reporte.exito': 'Report downloaded successfully.',

        // Admin reservas
        'admin.reservas.titulo': 'Reservation management',
        'admin.reservas.entregado': 'Reservation marked as delivered.',
        'admin.reservas.eliminada': 'Reservation deleted successfully.',
        'admin.reservas.cargando': 'Loading reservations...',
        'admin.reservas.sin.reservas': 'No reservations found.',
        'admin.reservas.col.usuario': 'User',
        'admin.reservas.col.perfume': 'Perfume',
        'admin.reservas.col.fecha': 'Date',
        'admin.reservas.col.estado': 'Status',
        'admin.reservas.col.acciones': 'Actions',
        'admin.reservas.filtro.todos': 'All',
        'admin.reservas.filtro.pendientes': 'Pending',
        'admin.reservas.filtro.entregados': 'Delivered',
        'admin.reservas.eliminar.titulo': 'Delete reservation',
        'admin.reservas.eliminar.texto': 'Are you sure you want to delete the reservation of',
        'admin.reservas.eliminar.btn': 'Delete',
        'admin.reservas.modal.cancelar': 'Cancel',
        'admin.reporte.todos': 'All reservations',
        'admin.reporte.pendientes': 'Pending only',
        'admin.reporte.entregados': 'Delivered only',
        

        // Admin usuarios
        'admin.usuarios.titulo': 'Registered users',
        'admin.usuarios.subtitulo': 'List of all system users',
        'admin.usuarios.buscar': 'Search user...',
        'admin.usuarios.cargando': 'Loading users...',
        'admin.usuarios.sin.usuarios': 'No registered users.',
        'admin.usuarios.col.usuario': 'User',
        'admin.usuarios.col.email': 'Email',
        'admin.usuarios.col.rol': 'Role',
        'admin.usuarios.col.fecha': 'Registration date',

        //slider internacionalización
        'idioma.es': 'Spanish',
        'idioma.en': 'English',
        'idioma.fr': 'French',
    },
    fr: {
        // Navbar
        'nav.catalogo': 'Catalogue',
        'nav.mis.reservas': 'Mes réservations',
        'nav.salir': 'Déconnexion',
        'nav.iniciar.sesion': 'Connexion',
        'nav.registrarse': "S'inscrire",
        'nav.perfumes': 'Parfums',
        'nav.reservas': 'Réservations',
        'nav.usuarios': 'Utilisateurs',
        'nav.mi.catalogo': 'Mon catalogue',
        'nav.cerrar.sesion': 'Déconnexion',

        // Login
        'login.titulo': 'Connexion',
        'login.email': 'Adresse e-mail',
        'login.password': 'Mot de passe',
        'login.btn': 'Se connecter',
        'login.no.cuenta': "Vous n'avez pas de compte?",
        'login.registrate': "S'inscrire",
        'login.campos.vacios': 'Veuillez remplir tous les champs.',

        // Registro
        'registro.titulo': 'Inscription',
        'registro.nombre': 'Nom complet',
        'registro.email': 'Adresse e-mail',
        'registro.password': 'Mot de passe',
        'registro.btn': 'Créer un compte',
        'registro.ya.cuenta': 'Vous avez déjà un compte?',
        'registro.inicia': 'Se connecter',
        'registro.exito': 'Compte créé avec succès. Redirection...',
        'registro.campos.vacios': 'Veuillez remplir tous les champs.',
        'registro.password.corta': 'Le mot de passe doit contenir au moins 6 caractères.',

        // Catálogo
        'catalogo.titulo': 'Catalogue de parfums',
        'catalogo.subtitulo': 'Découvrez notre collection exclusive',
        'catalogo.buscar': 'Rechercher un parfum...',
        'catalogo.cargando': 'Chargement des parfums...',
        'catalogo.sin.resultados': 'Aucun parfum trouvé.',
        'catalogo.disponibles': 'disponibles',
        'catalogo.reservar': 'Réserver',
        'catalogo.sin.stock': 'Rupture de stock',
        'catalogo.error.cargar': 'Erreur lors du chargement des parfums.',

        // Modal reserva
        'modal.reserva.titulo': 'Confirmer la réservation',
        'modal.reserva.texto': 'Voulez-vous réserver',
        'modal.reserva.info': 'Vous pouvez récupérer votre réservation en magasin pendant nos heures d\'ouverture.',
        'modal.reserva.cancelar': 'Annuler',
        'modal.reserva.confirmar': 'Confirmer la réservation',
        'modal.reserva.exito': 'Réservation effectuée avec succès.',

        // Mis reservas
        'reservas.titulo': 'Mes réservations',
        'reservas.subtitulo': 'Gérez vos réservations actives',
        'reservas.cargando': 'Chargement des réservations...',
        'reservas.sin.reservas': "Vous n'avez pas encore de réservations.",
        'reservas.ver.catalogo': 'Voir le catalogue',
        'reservas.cancelar': 'Annuler',
        'reservas.entregado': 'Livré',
        'reservas.pendiente': 'EN ATTENTE',
        'reservas.error.cargar': 'Erreur lors du chargement des réservations.',
        'reservas.cancelada': 'Réservation annulée avec succès.',

        // Admin perfumes
        'admin.perfumes.titulo': 'Gestion des parfums',
        'admin.perfumes.subtitulo': 'Créez, modifiez et supprimez des parfums du catalogue',
        'admin.perfumes.nuevo': 'Nouveau parfum',
        'admin.perfumes.guardar': 'Enregistrer',
        'admin.perfumes.creado': 'Parfum créé avec succès.',
        'admin.perfumes.actualizado': 'Parfum mis à jour avec succès.',
        'admin.perfumes.eliminado': 'Parfum supprimé avec succès.',
        'admin.perfumes.campos': 'Veuillez remplir les champs obligatoires.',
        'admin.perfumes.cargando': 'Chargement des parfums...',
        'admin.perfumes.sin.perfumes': 'Aucun parfum dans le catalogue.',
        'admin.perfumes.col.perfume': 'Parfum',
        'admin.perfumes.col.marca': 'Marque',
        'admin.perfumes.col.precio': 'Prix',
        'admin.perfumes.col.stock': 'Stock',
        'admin.perfumes.col.acciones': 'Actions',
        'admin.perfumes.label.nombre': 'Nom',
        'admin.perfumes.label.marca': 'Marque',
        'admin.perfumes.label.precio': 'Prix',
        'admin.perfumes.label.stock': 'Stock',
        'admin.perfumes.label.imagen': 'Image',
        'admin.perfumes.label.subir': "Télécharger l'image",
        'admin.perfumes.label.url': 'ou utilisez une URL',
        'admin.perfumes.label.descripcion': 'Description',
        'admin.perfumes.modal.nuevo': 'Nouveau parfum',
        'admin.perfumes.modal.cancelar': 'Annuler',
        'admin.perfumes.eliminar.titulo': 'Supprimer le parfum',
        'admin.perfumes.eliminar.texto': 'Êtes-vous sûr de vouloir supprimer',
        'admin.perfumes.eliminar.accion': 'Cette action est irréversible.',
        'admin.perfumes.eliminar.btn': 'Supprimer',
        'admin.reporte.descargar': 'Télécharger le rapport',
        'admin.reporte.exito': 'Rapport téléchargé avec succès.',

        // Admin reservas
        'admin.reservas.titulo': 'Gestion des réservations',
        'admin.reservas.subtitulo': 'Gérez toutes les réservations des utilisateurs',
        'admin.reservas.total': 'Total réservations',
        'admin.reservas.pendientes': 'En attente',
        'admin.reservas.entregadas': 'Livrées',
        'admin.reservas.usuarios.activos': 'Utilisateurs actifs',
        'admin.reservas.cargando': 'Chargement des réservations...',
        'admin.reservas.sin.reservas': 'Aucune réservation.',
        'admin.reservas.col.usuario': 'Utilisateur',
        'admin.reservas.col.perfume': 'Parfum',
        'admin.reservas.col.fecha': 'Date',
        'admin.reservas.col.estado': 'Statut',
        'admin.reservas.col.acciones': 'Actions',
        'admin.reservas.filtro.todos': 'Tous',
        'admin.reservas.filtro.pendientes': 'En attente',
        'admin.reservas.filtro.entregados': 'Livrés',
        'admin.reservas.eliminar.titulo': 'Supprimer la réservation',
        'admin.reservas.eliminar.texto': 'Êtes-vous sûr de vouloir supprimer la réservation de',
        'admin.reservas.eliminar.btn': 'Supprimer',
        'admin.reservas.modal.cancelar': 'Annuler',
        'admin.reservas.entregado': 'Réservation marquée comme livrée.',
        'admin.reservas.eliminada': 'Réservation supprimée avec succès.',
        'admin.reporte.todos': 'Toutes les réservations',
        'admin.reporte.pendientes': 'En attente seulement',
        'admin.reporte.entregados': 'Livrées seulement',

        // Admin usuarios
        'admin.usuarios.titulo': 'Utilisateurs enregistrés',
        'admin.usuarios.subtitulo': 'Liste de tous les utilisateurs du système',
        'admin.usuarios.buscar': 'Rechercher un utilisateur...',
        'admin.usuarios.cargando': 'Chargement des utilisateurs...',
        'admin.usuarios.sin.usuarios': 'Aucun utilisateur enregistré.',
        'admin.usuarios.col.usuario': 'Utilisateur',
        'admin.usuarios.col.email': 'E-mail',
        'admin.usuarios.col.rol': 'Rôle',
        'admin.usuarios.col.fecha': "Date d'inscription",

        // Inicio
        'inicio.hero.titulo1': "Découvrez l'art",
        'inicio.hero.titulo2': 'du parfum exclusif',
        'inicio.hero.btn': 'Explorer le catalogue',
        'inicio.por.que': 'Pourquoi nous choisir?',
        'inicio.por.que.sub': 'Qualité et exclusivité dans chaque fragrance',
        'inicio.marcas.titulo': 'Marques exclusives',
        'inicio.marcas.desc': 'Nous travaillons avec les meilleures maisons de parfumerie du monde.',
        'inicio.originales.titulo': '100% originaux',
        'inicio.originales.desc': 'Tous nos produits sont authentiques et certifiés.',
        'inicio.reserva.titulo': 'Réservation facile',
        'inicio.reserva.desc': 'Réservez votre fragrance préférée en quelques clics et récupérez-la en magasin.',
        'inicio.visitanos': 'Visitez-nous',
        'inicio.visitanos.sub': 'Nous vous attendons',
        'inicio.direccion': 'Adresse',
        'inicio.horario': 'Horaires',
        'inicio.contacto': 'Contact',
        'inicio.redes': 'Réseaux sociaux',
        'inicio.derechos': '© 2026 Tu Aroma Encantador. Tous droits réservés.',

        // Errores
        'error.imagen.subida': "Erreur lors du téléchargement de l'image",
        'error.servidor': 'Erreur interne du serveur',

        //slider internacionalización
        'idioma.es': 'Espagnol',
        'idioma.en': 'Anglais',
        'idioma.fr': 'Français',
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

function crearSelectorIdioma(esAdmin = false) {
    const idiomas = [
        { codigo: 'es', bandera: '🇨🇴', clave: 'idioma.es' },
        { codigo: 'en', bandera: '🇺🇸', clave: 'idioma.en' },
        { codigo: 'fr', bandera: '🇫🇷', clave: 'idioma.fr' }
    ];

    const actual = obtenerIdioma();
    const actualData = idiomas.find(i => i.codigo === actual);

    const selector = document.createElement('div');
    selector.className = 'idioma-selector';

    selector.innerHTML = `
        <button class="idioma-btn ${esAdmin ? 'idioma-btn-admin' : ''}" id="idioma-toggle">
            <span>${actualData.bandera}</span>
            <span id="idioma-actual-nombre">${t(actualData.clave)}</span>
            <i class="bi bi-chevron-down" style="font-size:0.7rem;"></i>
        </button>
        <div class="idioma-dropdown" id="idioma-dropdown">
            ${idiomas.map(i => `
                <button class="idioma-option ${i.codigo === actual ? 'activo' : ''}"
                    onclick="cambiarIdioma('${i.codigo}')">
                    <span class="idioma-flag">${i.bandera}</span>
                    <span>${t(i.clave)}</span>
                    ${i.codigo === actual ? '<i class="bi bi-check ms-auto" style="color:#7c3aed;"></i>' : ''}
                </button>
            `).join('')}
        </div>
    `;

    const toggle = selector.querySelector('#idioma-toggle');
    const dropdown = selector.querySelector('#idioma-dropdown');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
    });

    return selector;
}

function inicializarSelectorIdioma(esAdmin = false) {
    const contenedores = document.querySelectorAll('.idioma-selector-container');
    contenedores.forEach(c => {
        c.appendChild(crearSelectorIdioma(esAdmin));
    });
}