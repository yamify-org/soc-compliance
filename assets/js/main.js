// Fonction pour ajouter la classe 'active' au lien de navigation actif
document.addEventListener('DOMContentLoaded', function() {
  // Ajouter la classe 'active' au lien de navigation actif
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
  
  // Ajouter un gestionnaire d'événements pour les ancres dans la même page
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initialiser les tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// Fonction pour le mode sombre
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  
  // Sauvegarder la préférence
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

// Vérifier la préférence de mode sombre au chargement
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});

// Exporter les fonctions si nécessaire
window.toggleDarkMode = toggleDarkMode;
