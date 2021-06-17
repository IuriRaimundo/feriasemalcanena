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
  menuPáginaCartaz: document.getElementById('menu-cartaz'),
  highlightItem: (currentPage) => {
    const pageRefs = {
      '/feriasemalcanena/': menu.menuPáginaInicial,
      '/feriasemalcanena/index.html': menu.menuPáginaInicial,
      '/feriasemalcanena/inscricoes.html': menu.menuPáginaInscrição,
      '/feriasemalcanena/normas_especificas.html': menu.menuPáginaNormasEspecíficas,
      '/feriasemalcanena/regulamento.html': menu.menuPáginaRegulamento,
      '/feriasemalcanena/projeto.html': menu.menuPáginaProjeto,
      '/feriasemalcanena/atividades.html': menu.menuPáginaAtividades,
      '/feriasemalcanena/cartaz.html': menu.menuPáginaCartaz,
    };
    if (pageRefs[currentPage]) pageRefs[currentPage].style.backgroundColor = 'var(--MenuHoverColor)';
  },
};

menu.openIcon.addEventListener('click', menu.open);
menu.closeIcon.addEventListener('click', menu.close);
// Destacar item do menu
const currentPage = window.location.pathname;
menu.highlightItem(currentPage);
