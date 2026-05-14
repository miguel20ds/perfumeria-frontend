async function descargarReporte(tipo) {
    try {
        const token = obtenerToken();
        const response = await fetch(`${API_URL}/admin/reportes/${tipo}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            mostrarToast(t('error.servidor'), 'danger');
            return;
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `reporte_${tipo}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
        mostrarToast(t('admin.reporte.exito'), 'success');
    } catch (err) {
        mostrarToast(t('error.servidor'), 'danger');
    }
}