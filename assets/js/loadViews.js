function loadCertificationsView() {
    fetch('views/certifications.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading certifications:', error));
}

// Load certifications view when page loads or on button click
document.addEventListener('DOMContentLoaded', () => {
    const certButton = document.getElementById('certificado-btn');
    if (certButton) {
        certButton.addEventListener('click', loadCertificationsView);
    }
});