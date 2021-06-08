const main = document.getElementById('main');

const menu = {
  openIcon: document.getElementById('menu-icon'),
  closeIcon: document.getElementById('close-icon'),
  nav: document.querySelector('nav'),
  open: () => {
    // Abrir menu
    menu.nav.style.width = '22rem';
    // Desaparecer icon de abrir
    menu.openIcon.style.opacity = '0';
    menu.openIcon.style.pointerEvents = 'none';
  },
  close: () => {
    // Fechar menu, e ocultar icon de abrir menu
    menu.nav.style.width = '0rem';
    // Aparecer icon de abrir
    menu.openIcon.style.opacity = '1';
    menu.openIcon.style.pointerEvents = 'all';
  },
  menuPáginaInicial: document.getElementById('menu-inicial'),
  menuPáginaInscrição: document.getElementById('menu-inscrição'),
  menuPáginaNormasEspecíficas: document.getElementById('menu-normas-específicas'),
  menuPáginaRegulamento: document.getElementById('menu-regulamento'),
  menuPáginaProjeto: document.getElementById('menu-projeto'),
  menuPáginaAtividades: document.getElementById('menu-atividades'),
  highlightItem: (currentPage) => {
    const pageRefs = {
      'index.html': menu.menuPáginaInicial,
      'inscricoes.html': menu.menuPáginaInscrição,
      'normas_especificas.html': menu.menuPáginaNormasEspecíficas,
      'regulamento.html': menu.menuPáginaRegulamento,
      'projeto.html': menu.menuPáginaProjeto,
      'atividades.html': menu.menuPáginaAtividades,
    };
    if (pageRefs[currentPage]) pageRefs[currentPage].style.backgroundColor = 'var(--MenuHoverColor)';
  },
};

menu.openIcon.addEventListener('click', menu.open);
menu.closeIcon.addEventListener('click', menu.close);
// Destacar item do menu
const currentPage = window.location.pathname.replace('/vanilla/', '');
menu.highlightItem(currentPage);
