// Isto obriga a reiniciar a animação ao refrescar a página
const scrolldownIcon = document.getElementById('scrolldown-icon');
scrolldownIcon.addEventListener('load', () => {
  scrolldownIcon.style.animation = '';
  const width = window.innerWidth;
  setTimeout(() => {
    scrolldownIcon.style.animation = width > 501 ? 'scrolldown' : 'scrolldownMobile';
    scrolldownIcon.style.animationIterationCount = 'infinite';
    scrolldownIcon.style.animationDuration = '3s';
  }, 100);
});
