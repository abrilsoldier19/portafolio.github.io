function loadCertificationsView() {
    fetch('views/certificaciones.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('certificates').innerHTML = html;
        })
        .catch(error => console.error('Error loading certifications:', error));
}

// Cargar automáticamente al abrir la página
document.addEventListener('DOMContentLoaded', loadCertificationsView);

function cargarExperienciaVista() {
    fetch('views/experiencia.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('experience').innerHTML = html;
        })
        .catch(error => console.error('Error loading experience:', error));
}

// Cargar automáticamente al abrir la página
document.addEventListener('DOMContentLoaded', cargarExperienciaVista);

function cargarEducacionVista() {
    fetch('views/estudios.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('education').innerHTML = html;
        })
        .catch(error => console.error('Error loading education:', error));
    }

document.addEventListener('DOMContentLoaded', cargarEducacionVista);
