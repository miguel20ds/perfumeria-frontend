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

async function descargarReporteReservas(estado) {
    try {
        const token = obtenerToken();
        const url = estado
            ? `${API_URL}/admin/reportes/reservas?estado=${estado}`
            : `${API_URL}/admin/reportes/reservas`;

        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            mostrarToast(t('error.servidor'), 'danger');
            return;
        }

        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectUrl;
        a.download = estado
            ? `reporte_reservas_${estado.toLowerCase()}.pdf`
            : 'reporte_reservas.pdf';
        a.click();
        URL.revokeObjectURL(objectUrl);
        mostrarToast(t('admin.reporte.exito'), 'success');
    } catch (err) {
        mostrarToast(t('error.servidor'), 'danger');
    }
}