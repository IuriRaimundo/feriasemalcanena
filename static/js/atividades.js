const container = document.getElementById('cronograma');
let selected = document.getElementById('2f'); // Seleção inicial
selected.className = 'atividades-menu-destacado'; // Destacar inicial

const buttons = [
  document.getElementById('2f'),
  document.getElementById('3f'),
  document.getElementById('4f'),
  document.getElementById('5f'),
  document.getElementById('6f'),
];

buttons.forEach((element) => {
  element.addEventListener('click', (e) => {
    selected.className = '';
    selected = e.target;
    selected.className = 'atividades-menu-destacado';
    renderContent();
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const td1 = document.getElementById('td1');
const td2 = document.getElementById('td2');
const td3 = document.getElementById('td3');
const td4 = document.getElementById('td4');
const td5 = document.getElementById('td5');
const td6 = document.getElementById('td6');
const td7 = document.getElementById('td7');
const td8 = document.getElementById('td8');
const td9 = document.getElementById('td9');
const td10 = document.getElementById('td10');
const td11 = document.getElementById('td11');

const tds = [td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11];

class ContentUl {
  constructor(title, listItems) {
    this.title = title;
    this.listItems = listItems;

    const div = document.createElement('div');
    div.appendChild(document.createTextNode(title));
    const ul = document.createElement('ul');
    ul.className = 'cronograma-atividades';

    const liArray = Array.from(
      listItems.map((item) => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(item));
        return li;
      })
    );

    liArray.forEach((li) => {
      ul.appendChild(li);
    });

    div.appendChild(ul);

    return div;
  }
}

// Conteúdo para cada dia
// 2f, 3f, 4f, etc... representam os dias da semana
// document.createTextNode(texto) para aidcionar texto
// new ContentUl(titulo lista, array com os itens da lista)
const content = {
  '2f': {
    td1: document.createTextNode(
      'Concentração dos participantes no Jardim da República (Jardim do Planeta) / Zona Desportiva de Alcanena.'
    ),
    td2: new ContentUl('Ínicio das atividades:', [
      'Exercício Físico (Aeróbica, circuitos de força, entre outras)',
      'Zona Desportiva de Alcanena',
    ]),
    td3: document.createTextNode('Encerramento das atividades'),
    td4: document.createTextNode('Partida para a Escola Secundária de Alcanena'),
    td5: document.createTextNode('Refeitório da Escola Secundária de Alcanena'),
    td6: document.createTextNode(
      'Regresso ao Jardim da República (Jardim do Planeta) / Zona Desportiva de Alcanena (exceção à 3f em que os grupos seguem para a Biblioteca Municipal)'
    ),
    td7: new ContentUl('Ínicio das atividades:', ['Caça ao tesouro', 'Zona Desportiva de Alcanena', 'Zona Urbana de Alcanena']),
    td8: document.createTextNode('Encerramento das atividades'),
    td9: document.createTextNode('Lanche'),
    td10: document.createTextNode('Tempo livre'),
    td11: document.createTextNode('Regresso a casa'),
  },
  '3f': {
    td1: document.createTextNode(
      'Concentração dos participantes no Jardim da República (Jardim do Planeta) / Zona Desportiva de Alcanena.'
    ),
    td2: new ContentUl('Ínicio das atividades:', ['Atletismo', 'Pista de Atletismo Manuel da Peidade Costa']),
    td3: document.createTextNode('Encerramento das atividades'),
    td4: document.createTextNode('Partida para a Escola Secundária de Alcanena'),
    td5: document.createTextNode('Refeitório da Escola Secundária de Alcanena'),
    td6: document.createTextNode(
      'Regresso ao Jardim da República (Jardim do Planeta) / Zona Desportiva de Alcanena (exceção à 3f em que os grupos seguem para a Biblioteca Municipal)'
    ),
    td7: new ContentUl('Ínicio das atividades:', [
      'Atividades a designar',
      'Colaboração B.M.A.',
      'Jardim da Biblioteca Municipal',
    ]),
    td8: document.createTextNode('Encerramento das atividades'),
    td9: document.createTextNode('Lanche'),
    td10: document.createTextNode('Tempo livre'),
    td11: document.createTextNode('Regresso a casa'),
  },
  '4f': {
    td1: document.createTextNode(
      'Concentração dos participantes no Jardim da República (Jardim do Planeta) / Zona Desportiva de Alcanena.'
    ),
    td2: new ContentUl('Ínicio das atividades:', ['Jogos recreativos individuais', 'Zona Desportiva de Alcanena']),
    td3: document.createTextNode('Encerramento das atividades'),
    td4: document.createTextNode('Partida para a Escola Secundária de Alcanena'),
    td5: document.createTextNode('Refeitório da Escola Secundária de Alcanena'),
    td6: document.createTextNode(
      'Regresso ao Jardim da República (Jardim do Planeta) / Zona Desportiva de Alcanena (exceção à 3f em que os grupos seguem para a Biblioteca Municipal)'
    ),
    td7: new ContentUl('Ínicio das atividades:', ['Pedi paper', 'Zona Desportiva de Alcanena', 'Zona Urbana de Alcanena']),
    td8: document.createTextNode('Encerramento das atividades'),
    td9: document.createTextNode('Lanche'),
    td10: document.createTextNode('Tempo livre'),
    td11: document.createTextNode('Regresso a casa'),
  },
  '5f': {
    td1: document.createTextNode(
      'Concentração dos participantes no Jardim da República (Jardim do Planeta) / Zona Desportiva de Alcanena.'
    ),
    td2: new ContentUl('Ínicio das atividades:', ['Ténis', 'Campo de Ténis de Alcanena']),
    td3: document.createTextNode('Encerramento das atividades'),
    td4: document.createTextNode('Partida para a Escola Secundária de Alcanena'),
    td5: document.createTextNode('Refeitório da Escola Secundária de Alcanena'),
    td6: document.createTextNode(
      'Regresso ao Jardim da República (Jardim do Planeta) / Zona Desportiva de Alcanena (exceção à 3f em que os grupos seguem para a Biblioteca Municipal)'
    ),
    td7: new ContentUl('Ínicio das atividades:', [
      'Jogo do Sábio',
      'Cultura geral',
      'Zona Desportiva de Alcanena',
      'Zona Urbana de Alcanena',
    ]),
    td8: document.createTextNode('Encerramento das atividades'),
    td9: document.createTextNode('Lanche'),
    td10: document.createTextNode('Tempo livre'),
    td11: document.createTextNode('Regresso a casa'),
  },
  '6f': {
    td1: document.createTextNode(
      'Concentração dos participantes no Jardim da República (Jardim do Planeta) / Zona Desportiva de Alcanena.'
    ),
    td2: new ContentUl('Ínicio das atividades:', [
      'Expressão Motora',
      'Circuito de deslocamentos e equílibrios, entre outras',
      'Zona Desportiva de Alcanena',
    ]),
    td3: document.createTextNode('Encerramento das atividades'),
    td4: document.createTextNode('Partida para a Escola Secundária de Alcanena'),
    td5: document.createTextNode('Refeitório da Escola Secundária de Alcanena'),
    td6: document.createTextNode(
      'Regresso ao Jardim da República (Jardim do Planeta) / Zona Desportiva de Alcanena (exceção à 3f em que os grupos seguem para a Biblioteca Municipal)'
    ),
    td7: new ContentUl('Ínicio das atividades:', ['Orientação Urbana', 'Zona Desportiva de Alcanena', 'Zona Urbana de Alcanena']),
    td8: document.createTextNode('Encerramento das atividades'),
    td9: document.createTextNode('Lanche'),
    td10: document.createTextNode('Tempo livre'),
    td11: document.createTextNode('Regresso a casa'),
  },
};

// Renderizar conteúdo

function renderContent() {
  const contentToRender = content[selected.id];
  tds.forEach((td) => {
    td.replaceChildren(contentToRender[td.id]);
  });
}
