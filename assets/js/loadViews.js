function loadCertificationsView() {
    fetch('../views/certifications.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('certificates').innerHTML = html;
        })
        .catch(error => console.error('Error loading certifications:', error));
}

// Cargar automáticamente al abrir la página
document.addEventListener('DOMContentLoaded', loadCertificationsView);
