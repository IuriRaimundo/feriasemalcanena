// Isto obriga a reiniciar a animação ao refrescar a página
const scrolldownIcon = document.getElementById('scrolldown-icon');
scrolldownIcon.addEventListener('load', () => {
  scrolldownIcon.style.animation = '';
  setTimeout(() => {
    scrolldownIcon.style.animation = 'scrolldown';
    scrolldownIcon.style.animationIterationCount = 'infinite';
    scrolldownIcon.style.animationDuration = '3s';
  }, 100);
});
