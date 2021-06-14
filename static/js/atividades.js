const container = document.getElementById('cronograma');
const container2 = document.getElementById('cronograma-2');
let selected = document.getElementById('3f'); // Seleção inicial
selected.className = 'atividades-menu-destacado'; // Destacar inicial

const buttons = [
  document.getElementById('3f'),
  document.getElementById('4f'),
  document.getElementById('5f'),
  document.getElementById('6f'),
  document.getElementById('2f-2'),
  document.getElementById('3f-2'),
  document.getElementById('4f-2'),
  document.getElementById('5f-2'),
  document.getElementById('6f-2'),
];

buttons.forEach((element) => {
  element.addEventListener('click', (e) => {
    selected.className = '';
    selected = e.target;
    selected.className = 'atividades-menu-destacado';
    if (!selected.id.includes('-2')) {
      // Renderizar conteúdo
      tdManhã.innerHTML = content[selected.id].tdManhã;
      tdTarde.innerHTML = content[selected.id].tdTarde;
      container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      tdManhã2.innerHTML = content[selected.id].tdManhã;
      tdTarde2.innerHTML = content[selected.id].tdTarde;
      container2.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});

// Campos do cronograma 1

const tdManhã = document.getElementById('td-manhã');
const tdTarde = document.getElementById('td-tarde');

const tds = [tdManhã, tdTarde];

// Campos do cronograma 2

const tdManhã2 = document.getElementById('td-manhã2');
const tdTarde2 = document.getElementById('td-tarde2');

const tds2 = [tdManhã2, tdTarde2];

// Conteúdo
const content = {
  '3f': {
    tdManhã: `
      <p>9h: concentração na Zona Desportiva de Alcanena</p>
      Atividades:
      <ul class="cronograma-atividades">
        <li>Dinâmicas de grupo</li>
      </ul>
    `,
    tdTarde: `
    Atividades:
    <ul class="cronograma-atividades">
      <li>Hora do conto invertida</li>
    </ul>
    <p>17h30: Despedida / entrega aos pais (Biblioteca Municipal)</p>
    `,
  },
  '4f': {
    tdManhã: `
    <p>9h: concentração no Cine-Teatro São Pedro</p>
    Atividades:
    <ul class="cronograma-atividades">
      <li>Ser ator por um dia</li>
    </ul>
  `,
    tdTarde: `
    Atividades:
    <ul class="cronograma-atividades">
      <li>Ser ator por um dia</li>
      <li>Piscinas municipais de Alcanena</li>
    </ul>
    <p>17h30: Despedida / entrega aos pais (Piscina Municipal)</p>
    `,
  },
  '5f': {
    tdManhã: `
    <p>9h: concentração na Zona Desportiva de Alcanena</p>
    Atividades:
    <ul class="cronograma-atividades">
      <li>Canoagem</li>
      <li>Padel</li>
      <li>Banhos</li>
    </ul>
    `,
    tdTarde: `
    Atividades:
    <ul class="cronograma-atividades">
      <li>Mindfulness na natureza</li>
    </ul>
    <p>17h30: chegada à Zona Desportiva de Alcanena / despedida / entrega aos pais</p>
    `,
  },
  '6f': {
    tdManhã: `
    <p>9h: concentração na Zona Desportiva de Alcanena</p>
    Atividades:
    <ul class="cronograma-atividades">
      <li>Dia na praia</li>
    </ul>
    `,
    tdTarde: `
    Atividades:
    <ul class="cronograma-atividades">
      <li>Dia na praia</li>
    </ul>
    <p>17h30: chegada à Zona Desportiva de Alcanena / despedida / entrega aos pais</p>
    `,
  },
  '2f-2': {
    tdManhã: `
    <p>9h: concentração na Zona Desportiva de Alcanena</p>
    Atividades:
    <ul class="cronograma-atividades">
      <li>Dinâmicas de grupo</li>
    </ul>
    `,
    tdTarde: `
    Atividades:
    <ul class="cronograma-atividades">
      <li>Cinema</li>
      <li>Piscinas Municipais de Alcanena</li>
    </ul>
    <p>17:30 despedida / entrega aos pais (Piscina Municipal)</p>
    `,
  },
  '3f-2': {
    tdManhã: `
    <p>9h: concentração na Zona Desportiva de Alcanena</p>
    Atividades:
    <ul class="cronograma-atividades">
      <li>Manhã Desportiva</li>
    </ul>
    `,
    tdTarde: `
    Atividades:
    <ul class="cronograma-atividades">
      <li>Hora do conto invertida</li>
    </ul>
    <p>17:30 despedida / entrega aos pais (Biblioteca Municipal)</p>
    `,
  },
  '4f-2': {
    tdManhã: `
    <p>9h: concentração na Zona Desportiva de Alcanena</p>
    Atividades:
    <ul class="cronograma-atividades">
      <li>Party games</li>
    </ul>
    `,
    tdTarde: `
    Atividades:
    <ul class="cronograma-atividades">
      <li>Ser ator por um dia</li>
    </ul>
    <p>17:30 despedida / entrega aos pais (CTSP)</p>
    
    `,
  },
  '5f-2': {
    tdManhã: `
    <p>9h: concentração na Zona Desportiva de Alcanena</p>
    Atividades:
    <ul class="cronograma-atividades">
      <li>Canoagem</li>
      <li>Padel</li>
      <li>Banhos</li>
    </ul>
    `,
    tdTarde: `
    Atividades:
    <ul class="cronograma-atividades">
      <li>Mindfulness na natureza</li>
    </ul>
    <p>17h30: chegada à Zona Desportiva de Alcanena / despedida / entrega aos pais</p>
    `,
  },
  '6f-2': {
    tdManhã: `
    <p>9h: concentração na Zona Desportiva de Alcanena</p>
    Atividades:
    <ul class="cronograma-atividades">
      <li>Dia na praia</li>
    </ul>
    `,
    tdTarde: `
    Atividades:
    <ul class="cronograma-atividades">
      <li>Dia na praia</li>
    </ul>
    <p>17h30: chegada à Zona Desportiva de Alcanena / despedida / entrega aos pais</p>
    `,
  },
};
