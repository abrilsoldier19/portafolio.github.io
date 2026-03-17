function loadCertificationsView() {
    fetch('views/certificaciones.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('contenido-certificaciones').innerHTML = html;
        })
        .catch(error => console.error('Error loading certifications:', error));
}

// Cargar automáticamente al abrir la página
document.addEventListener('DOMContentLoaded', loadCertificationsView);
