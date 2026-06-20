const icons = {
  logo: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5" stroke="currentColor" stroke-width="2"/><path d="M12 7a5 5 0 1 0 5 5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/><path d="M16.5 3.5h4v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="m20.2 3.8-4.6 4.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  dashboard: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="3" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" stroke-width="1.8"/></svg>`,
  map: `<svg viewBox="0 0 24 24" fill="none"><path d="m3 6 5-3 8 3 5-3v15l-5 3-8-3-5 3V6Z" stroke="currentColor" stroke-width="1.8"/><path d="M8 3v15M16 6v15" stroke="currentColor" stroke-width="1.8"/></svg>`,
  tasks: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor" stroke-width="1.8"/><path d="m8 9 1.5 1.5L12 8M8 15h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" stroke-width="1.8"/><path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" stroke-width="1.8"/><path d="M8 14h3M14 14h2M8 17h2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 18.5 3.5 21l4-1.2c1.3.7 2.8 1.2 4.5 1.2 5 0 9-3.8 9-8.5S17 4 12 4s-9 3.8-9 8.5c0 2.3.7 4.4 2 6Z" stroke="currentColor" stroke-width="1.8"/><path d="M8 12h8M8 15h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  files: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 5a2 2 0 0 1 2-2h5l2 3h5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z" stroke="currentColor" stroke-width="1.8"/></svg>`,
  management: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20V10m5 10V4m6 16v-7m5 7V7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  store: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 9h16l-1 12H5L4 9Z" stroke="currentColor" stroke-width="1.8"/><path d="M8 9V7a4 4 0 0 1 8 0v2" stroke="currentColor" stroke-width="1.8"/></svg>`,
  bots: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="13" rx="4" stroke="currentColor" stroke-width="1.8"/><path d="M12 3v4M8 12h.01M16 12h.01M8 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
};

const accounts = {
  ceo: { name: "Helena Sousa", role: "CEO", initials: "HS", scope: "Visão executiva" },
  gestor: { name: "Bruno Lima", role: "Gestor", initials: "BL", scope: "Operações" },
  colaborador: { name: "Clara Mendes", role: "Colaborador", initials: "CM", scope: "Produto" },
};

const appState = {
  user: null,
  page: "dashboard",
  selectedRoom: "hub",
  taskFilter: "todas",
  tasks: [
    { id: 1, title: "Revisar entrega do novo onboarding", owner: "Clara Mendes", due: "Hoje, 17:00", status: "Em andamento", tone: "info", priority: "Alta" },
    { id: 2, title: "Consolidar indicadores da semana", owner: "Bruno Lima", due: "Amanhã, 10:00", status: "Pendente", tone: "warning", priority: "Média" },
    { id: 3, title: "Validar materiais da apresentação", owner: "Helena Sousa", due: "20 jun, 09:00", status: "Pendente", tone: "warning", priority: "Alta" },
    { id: 4, title: "Atualizar central de arquivos", owner: "Clara Mendes", due: "18 jun, 14:00", status: "Concluída", tone: "success", priority: "Baixa" },
  ],
  messages: [
    { mine: false, author: "Bruno Lima", text: "Equipe, o roteiro da apresentação já está na pasta compartilhada.", time: "09:24" },
    { mine: true, author: "Você", text: "Perfeito. Vou revisar a parte do escritório virtual.", time: "09:28" },
    { mine: false, author: "Helena Sousa", text: "Ótimo. Vamos manter a demonstração direta e objetiva.", time: "09:31" },
  ],
};

const navItems = [
  { id: "dashboard", label: "Visão geral", icon: "dashboard" },
  { id: "map", label: "Escritório virtual", icon: "map" },
  { id: "tasks", label: "Tarefas", icon: "tasks" },
  { id: "calendar", label: "Calendário", icon: "calendar" },
  { id: "communication", label: "Comunicação", icon: "chat" },
  { id: "files", label: "Arquivos", icon: "files" },
  { id: "management", label: "Gestão", icon: "management", leaderOnly: true },
  { id: "store", label: "Loja", icon: "store" },
  { id: "bots", label: "Bots", icon: "bots" },
];

const pageTitles = {
  dashboard: ["Central operacional", "Visão geral"],
  map: ["Escritório virtual", "Mapa operacional"],
  tasks: ["Operação", "Tarefas"],
  calendar: ["Agenda", "Calendário"],
  communication: ["Colaboração", "Comunicação"],
  files: ["Conhecimento", "Arquivos"],
  management: ["Executivo", "Gestão e Diretoria"],
  store: ["Benefícios", "Loja"],
  bots: ["Inteligência operacional", "Área dos Bots"],
};

function brand() {
  return `<div class="brand"><span class="brand-mark">${icons.logo}</span><span>LevelCorp<small>Escritório virtual</small></span></div>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toast(message) {
  const region = document.querySelector("#toast-region");
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  region.append(node);
  window.setTimeout(() => node.remove(), 2800);
}

function renderLogin() {
  document.querySelector("#app").innerHTML = `
    <main class="login-page">
      <section class="login-showcase">
        ${brand()}
        <div class="showcase-copy">
          <span class="eyebrow">SaaS operacional map-first</span>
          <h1>Seu time trabalha melhor quando tudo está no mesmo lugar.</h1>
          <p>Entre no escritório virtual, acompanhe demandas, comunicação, agenda e decisões em uma experiência única.</p>
        </div>
        <div class="showcase-stats">
          <div class="showcase-stat"><strong>8</strong><span>áreas operacionais</span></div>
          <div class="showcase-stat"><strong>24</strong><span>tarefas em fluxo</span></div>
          <div class="showcase-stat"><strong>100%</strong><span>frontend demonstrativo</span></div>
        </div>
      </section>
      <section class="login-panel">
        <form class="login-card" id="login-form">
          <span class="eyebrow">Acesso demonstrativo</span>
          <h2>Bem-vindo de volta</h2>
          <p>Escolha um perfil abaixo ou use qualquer email e senha.</p>
          <div class="field">
            <label for="email">Email</label>
            <input class="input" id="email" name="email" type="email" placeholder="voce@empresa.com" required />
          </div>
          <div class="field">
            <label for="password">Senha</label>
            <input class="input" id="password" name="password" type="password" placeholder="Digite sua senha" required />
          </div>
          <button class="primary-button full-button" type="submit">Entrar na LevelCorp</button>
          <div class="demo-accounts">
            <p>Entrar rapidamente como</p>
            <div class="demo-account-grid">
              <button class="demo-account" type="button" data-account="ceo">CEO</button>
              <button class="demo-account" type="button" data-account="gestor">Gestor</button>
              <button class="demo-account" type="button" data-account="colaborador">Colaborador</button>
            </div>
          </div>
        </form>
      </section>
    </main>`;

  document.querySelector("#login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    const key = String(email).toLowerCase().includes("gestor")
      ? "gestor"
      : String(email).toLowerCase().includes("colaborador")
        ? "colaborador"
        : "ceo";
    loginAs(key);
  });

  document.querySelectorAll("[data-account]").forEach((button) => {
    button.addEventListener("click", () => loginAs(button.dataset.account));
  });
}

function loginAs(key) {
  appState.user = accounts[key] ?? accounts.ceo;
  appState.page = "dashboard";
  localStorage.setItem("levelcorp-demo-role", key);
  renderApp();
  toast(`Sessão iniciada como ${appState.user.role}.`);
}

function logout() {
  appState.user = null;
  localStorage.removeItem("levelcorp-demo-role");
  renderLogin();
}

function renderApp() {
  const title = pageTitles[appState.page];
  const visibleNav = navItems.filter(
    (item) => !item.leaderOnly || appState.user.role !== "Colaborador",
  );

  document.querySelector("#app").innerHTML = `
    <div class="app-shell">
      <aside class="sidebar" id="sidebar">
        ${brand()}
        <div class="nav-group-label">Plataforma</div>
        <nav class="nav-list">
          ${visibleNav.map((item) => `
            <button class="nav-item ${appState.page === item.id ? "active" : ""}" data-page="${item.id}">
              ${icons[item.icon]}<span>${item.label}</span>
            </button>`).join("")}
        </nav>
        <div class="sidebar-user">
          <span class="avatar">${appState.user.initials}</span>
          <span><strong>${appState.user.name}</strong><small>${appState.user.role}</small></span>
          <button class="logout-icon" id="logout" title="Sair">↗</button>
        </div>
      </aside>
      <section class="main-column">
        <header class="topbar">
          <button class="mobile-menu" id="mobile-menu" aria-label="Abrir menu">${icons.menu}</button>
          <div class="topbar-context">
            <span>${title[0]}</span>
            <h1>${title[1]}</h1>
          </div>
          <div class="topbar-actions">
            <span class="status-pill"><span class="status-dot"></span>Demo online</span>
            <span class="chip badge info">${appState.user.role}</span>
          </div>
        </header>
        <div class="page-content" id="page-content">${renderPage()}</div>
      </section>
    </div>`;

  document.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.page = button.dataset.page;
      renderApp();
    });
  });
  document.querySelector("#logout").addEventListener("click", logout);
  document.querySelector("#mobile-menu").addEventListener("click", () => {
    document.querySelector("#sidebar").classList.toggle("open");
  });
  bindPageEvents();
}

function metric(label, value, detail, accent = false) {
  return `<article class="metric ${accent ? "accent" : ""}">
    <div class="metric-label">${label}</div>
    <div class="metric-value">${value}</div>
    <div class="metric-detail">${detail}</div>
  </article>`;
}

function hero(eyebrow, title, description, actions = "") {
  return `<section class="hero">
    <div class="hero-copy">
      <span class="eyebrow">${eyebrow}</span>
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
    ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
  </section>`;
}

function renderPage() {
  switch (appState.page) {
    case "map": return renderMap();
    case "tasks": return renderTasks();
    case "calendar": return renderCalendar();
    case "communication": return renderCommunication();
    case "files": return renderFiles();
    case "management": return renderManagement();
    case "store": return renderStore();
    case "bots": return renderBots();
    default: return renderDashboard();
  }
}

function renderDashboard() {
  const firstName = appState.user.name.split(" ")[0];
  return `<div class="page-stack">
    ${hero(
      "Ambiente LevelCorp",
      `Olá, ${firstName}. Sua operação está em movimento.`,
      `Acompanhe tarefas, agenda, comunicação e pessoas a partir de uma visão simples e conectada.`,
      `<button class="primary-button" data-go="map">Entrar no escritório</button><button class="ghost-button" data-go="tasks">Ver tarefas</button>`,
    )}
    <section class="metrics-grid">
      ${metric("Tarefas abertas", "12", "3 vencem hoje", true)}
      ${metric("Equipe online", "7", "de 9 colaboradores")}
      ${metric("Eventos hoje", "3", "próximo às 14:30")}
      ${metric("Entregas da semana", "86%", "acima da meta")}
    </section>
    <section class="content-grid">
      <div class="panel">
        <div class="panel-header"><div><h3>Prioridades de hoje</h3><p>Demandas que merecem atenção imediata.</p></div><button class="link-button" data-go="tasks">Ver todas</button></div>
        <div class="list">
          ${appState.tasks.slice(0, 3).map(taskRow).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header"><div><h3>Atividade recente</h3><p>Movimentos da equipe.</p></div></div>
        <div class="activity-item"><strong>Bruno</strong> concluiu “Planejamento semanal”.<br />há 12 minutos</div>
        <div class="activity-item"><strong>Clara</strong> enviou um arquivo em Comunicação.<br />há 26 minutos</div>
        <div class="activity-item"><strong>Helena</strong> criou um evento executivo.<br />há 1 hora</div>
      </div>
    </section>
  </div>`;
}

function taskRow(task) {
  return `<div class="list-row" data-task-row="${task.id}">
    <div><div class="row-title">${escapeHtml(task.title)}</div><div class="row-subtitle">${task.owner} · ${task.due} · Prioridade ${task.priority}</div></div>
    <div class="row-actions"><span class="badge ${task.tone}">${task.status}</span>${task.status !== "Concluída" ? `<button class="mini-button" data-complete-task="${task.id}">Concluir</button>` : ""}</div>
  </div>`;
}

function renderTasks() {
  const filtered = appState.taskFilter === "todas"
    ? appState.tasks
    : appState.tasks.filter((task) => task.status.toLowerCase().includes(appState.taskFilter));

  return `<div class="page-stack">
    ${hero(
      "Produtividade",
      "Tarefas e entregas",
      "Organize prioridades, acompanhe responsáveis e mantenha o time alinhado.",
      appState.user.role !== "Colaborador" ? `<button class="primary-button" id="new-task">+ Nova tarefa</button>` : "",
    )}
    <div class="toolbar">
      <div class="tabs">
        ${["todas", "pendente", "andamento", "concluída"].map((filter) => `<button class="tab ${appState.taskFilter === filter ? "active" : ""}" data-task-filter="${filter}">${filter === "todas" ? "Todas" : filter[0].toUpperCase() + filter.slice(1)}</button>`).join("")}
      </div>
      <input class="search" id="task-search" placeholder="Buscar tarefas..." />
    </div>
    <section class="panel">
      <div class="panel-header"><div><h3>Fila operacional</h3><p>${filtered.length} tarefas neste recorte.</p></div></div>
      <div class="list" id="task-list">${filtered.map(taskRow).join("")}</div>
    </section>
  </div>`;
}

const rooms = {
  hub: { name: "Praça Central", category: "Hub", description: "Ponto principal de orientação e circulação do escritório.", status: "Ambiente ativo", code: "LC" },
  tasks: { name: "Tarefas", category: "Operação", description: "Prioridades, prazos e acompanhamento das entregas.", status: "12 tarefas abertas", code: "TK" },
  communication: { name: "Comunicação", category: "Social", description: "Canais, mensagens e alinhamentos rápidos da equipe.", status: "4 mensagens novas", code: "CM" },
  calendar: { name: "Calendário", category: "Agenda", description: "Eventos, reuniões e compromissos do time.", status: "3 eventos hoje", code: "CA" },
  files: { name: "Arquivos", category: "Conhecimento", description: "Documentos e materiais compartilhados da empresa.", status: "18 arquivos", code: "AR" },
  management: { name: "Gestão / Diretoria", category: "Executivo", description: "Indicadores operacionais e apoio à decisão.", status: "Visão executiva", code: "GT" },
  store: { name: "Loja", category: "Benefícios", description: "Recompensas e benefícios disponíveis para a equipe.", status: "Catálogo ativo", code: "LJ" },
};

function renderMap() {
  const selected = rooms[appState.selectedRoom];
  return `<div class="page-stack">
    <div class="office-wrap">
      <div class="office-map">
        <div class="corridor-v"></div><div class="corridor-h"></div>
        ${mapRoom("store", "room-store")}
        ${mapRoom("tasks", "room-tasks")}
        ${mapRoom("communication", "room-comms")}
        ${mapRoom("hub", "central-hub")}
        ${mapRoom("files", "room-files")}
        ${mapRoom("calendar", "room-calendar")}
        ${mapRoom("management", "room-management")}
        <div class="avatar-pin">${appState.user.initials}</div>
      </div>
      <aside class="panel context-panel">
        <div class="context-icon">${selected.code}</div>
        <span class="eyebrow">${selected.category}</span>
        <h2 style="font-family:'Space Grotesk';margin:8px 0;font-size:24px">${selected.name}</h2>
        <p style="color:var(--muted);font-size:13px;line-height:1.65">${selected.description}</p>
        <div style="margin:18px 0"><span class="badge success">${selected.status}</span></div>
        ${appState.selectedRoom === "hub" ? `<p style="color:var(--muted-2);font-size:11px">Selecione um departamento no mapa para explorar sua visão contextual.</p>` : `<button class="primary-button full-button" data-open-room="${appState.selectedRoom}">Abrir ${selected.name}</button>`}
      </aside>
    </div>
  </div>`;
}

function mapRoom(id, className) {
  const room = rooms[id];
  return `<button class="room ${className} ${appState.selectedRoom === id ? "selected" : ""}" data-room="${id}">
    <span><span class="room-head"><span class="room-icon">${room.code}</span><span><strong>${room.name}</strong><small>${room.category}</small></span></span></span>
    <span class="room-dots"><span></span><span></span><span></span></span>
  </button>`;
}

function renderCalendar() {
  const events = [
    ["09:30", "Daily de Produto", "Sala virtual · Equipe Produto", "info"],
    ["11:00", "Revisão da apresentação", "Praça Central · Liderança", "warning"],
    ["14:30", "Planejamento executivo", "Gestão / Diretoria", "success"],
    ["16:00", "Checkpoint das entregas", "Setor Tarefas", "info"],
  ];
  return `<div class="page-stack">
    ${hero("Planejamento", "Agenda da equipe", "Eventos e prazos importantes em uma visão operacional simples.", `<button class="primary-button" id="new-event">+ Novo evento</button>`)}
    <section class="metrics-grid">
      ${metric("Hoje", "4", "eventos programados", true)}
      ${metric("Esta semana", "11", "compromissos")}
      ${metric("Tarefas com prazo", "7", "nos próximos dias")}
      ${metric("Disponibilidade", "72%", "média da equipe")}
    </section>
    <section class="panel">
      <div class="panel-header"><div><h3>Sábado, 20 de junho</h3><p>Agenda demonstrativa.</p></div></div>
      <div class="list">
        ${events.map(([time, title, detail, tone]) => `<div class="list-row"><div><div class="row-title">${time} · ${title}</div><div class="row-subtitle">${detail}</div></div><span class="badge ${tone}">${time === "11:00" ? "Prioridade" : "Confirmado"}</span></div>`).join("")}
      </div>
    </section>
  </div>`;
}

function renderCommunication() {
  return `<div class="page-stack">
    ${hero("Colaboração", "Comunicação da equipe", "Canais e mensagens rápidas para manter o trabalho fluindo.")}
    <section class="content-grid">
      <div class="panel chat-window">
        <div class="panel-header"><div><h3># geral</h3><p>9 participantes · 7 online</p></div><span class="badge success">Online</span></div>
        <div class="messages" id="messages">${appState.messages.map((message) => `<div class="message ${message.mine ? "mine" : ""}">${escapeHtml(message.text)}<span class="message-meta">${message.author} · ${message.time}</span></div>`).join("")}</div>
        <form class="composer" id="message-form"><input class="input" id="message-input" placeholder="Escreva uma mensagem..." /><button class="primary-button" type="submit">Enviar</button></form>
      </div>
      <aside class="panel">
        <div class="panel-header"><div><h3>Canais</h3><p>Conversas acessíveis.</p></div></div>
        <div class="list">
          <div class="list-row"><div><div class="row-title"># geral</div><div class="row-subtitle">Atualizações da empresa</div></div><span class="badge info">4</span></div>
          <div class="list-row"><div><div class="row-title"># produto</div><div class="row-subtitle">Squad de produto</div></div><span class="badge success">Ativo</span></div>
          <div class="list-row"><div><div class="row-title"># avisos</div><div class="row-subtitle">Comunicados oficiais</div></div></div>
        </div>
      </aside>
    </section>
  </div>`;
}

function renderFiles() {
  const files = [
    ["Roteiro-Apresentacao-LevelCorp.pdf", "PDF · 2,4 MB", "Hoje, 09:18"],
    ["Planejamento-Sprint-Junho.xlsx", "Planilha · 840 KB", "Ontem, 16:42"],
    ["Guia-Onboarding-Equipe.docx", "Documento · 1,1 MB", "18 jun, 14:10"],
    ["Demo-Escritorio-Virtual.pptx", "Apresentação · 5,7 MB", "17 jun, 11:06"],
  ];
  return `<div class="page-stack">
    ${hero("Conhecimento", "Arquivos compartilhados", "Acesse rapidamente os materiais mais importantes da organização.", `<button class="primary-button" id="upload-file">Enviar arquivo</button>`)}
    <div class="toolbar"><div class="tabs"><button class="tab active">Recentes</button><button class="tab">Meus arquivos</button><button class="tab">Compartilhados</button></div><input class="search" placeholder="Buscar arquivo..." /></div>
    <section class="panel"><div class="list">${files.map(([name, detail, date]) => `<div class="list-row"><div><div class="row-title">${name}</div><div class="row-subtitle">${detail} · ${date}</div></div><button class="mini-button" data-download="${name}">Abrir</button></div>`).join("")}</div></section>
  </div>`;
}

function renderManagement() {
  return `<div class="page-stack">
    ${hero("Visão executiva", "Gestão e Diretoria", "Indicadores essenciais para acompanhar a saúde operacional da organização.", `<button class="primary-button" id="generate-analysis">Gerar análise</button><button class="ghost-button" id="council">Conselho executivo</button>`)}
    <section class="metrics-grid">
      ${metric("Colaboradores", "9", "7 online agora")}
      ${metric("Produtividade", "86%", "+8% nesta semana", true)}
      ${metric("Entregas em risco", "2", "exigem acompanhamento")}
      ${metric("Eventos estratégicos", "3", "nos próximos 7 dias")}
    </section>
    <section class="content-grid">
      <div class="panel">
        <div class="panel-header"><div><h3>Desempenho por área</h3><p>Resumo operacional demonstrativo.</p></div></div>
        ${[["Produto", 92], ["Operações", 84], ["Comercial", 76], ["Tecnologia", 89]].map(([name, value]) => `<div style="margin-bottom:17px"><div style="display:flex;justify-content:space-between;margin-bottom:7px;font-size:12px"><span>${name}</span><strong>${value}%</strong></div><div class="progress"><span style="width:${value}%"></span></div></div>`).join("")}
      </div>
      <div class="panel">
        <div class="panel-header"><div><h3>Sinais executivos</h3><p>Leitura rápida do momento.</p></div></div>
        <div class="activity-item"><strong>Entrega consistente</strong><br />A equipe mantém ritmo acima da meta.</div>
        <div class="activity-item"><strong>Atenção em Comercial</strong><br />Duas demandas estão próximas do prazo.</div>
        <div class="activity-item"><strong>Agenda saudável</strong><br />Sem conflitos críticos para a semana.</div>
      </div>
    </section>
  </div>`;
}

function renderStore() {
  const products = [
    ["☕", "Café com a liderança", "Uma conversa de 30 minutos com a diretoria.", 350],
    ["🎧", "Voucher de streaming", "Escolha entre Spotify ou Netflix.", 600],
    ["🏡", "Dia de home office", "Um dia extra de trabalho remoto.", 900],
    ["📚", "Livro à escolha", "Crédito para desenvolvimento profissional.", 700],
    ["🎓", "Curso premium", "Acesso a uma formação online selecionada.", 1400],
    ["🌴", "Meio período livre", "Uma pausa merecida para recarregar.", 1800],
  ];
  return `<div class="page-stack">
    ${hero("Marketplace interno", "Loja de benefícios", "Transforme reconhecimento em experiências e recompensas.", `<span class="badge warning">2.450 moedas disponíveis</span>`)}
    <section class="store-grid">${products.map(([icon, name, description, price]) => `<article class="product-card"><div class="product-visual">${icon}</div><div><h3>${name}</h3><p>${description}</p></div><div class="product-footer"><span class="coins">${price} moedas</span><button class="mini-button" data-redeem="${name}">Resgatar</button></div></article>`).join("")}</section>
  </div>`;
}

function renderBots() {
  const bots = [
    ["◎", "Copiloto LevelCorp", "Orientação geral e próximos passos operacionais."],
    ["✓", "Bot de Tarefas", "Prioridades, gargalos, prazos e distribuição de carga."],
    ["◫", "Bot de Calendário", "Agenda, compromissos e organização da semana."],
    ["▤", "Bot de Arquivos", "Consulta documental limitada nesta demonstração."],
    ["△", "Analista de Gestão", "Leitura de indicadores e sinais da equipe."],
    ["◇", "Conselho Executivo", "Riscos, trade-offs e apoio a decisões."],
  ];
  return `<div class="page-stack">
    ${hero("Assistentes digitais", "Área dos Bots", "Conheça os assistentes contextuais que apoiam cada setor do escritório.")}
    <section class="bot-grid">${bots.map(([icon, name, description]) => `<article class="bot-card"><div class="bot-visual">${icon}</div><div><h3>${name}</h3><p>${description}</p></div><button class="secondary-button" data-bot="${name}">Conversar</button></article>`).join("")}</section>
  </div>`;
}

function bindPageEvents() {
  document.querySelectorAll("[data-go]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.page = button.dataset.go;
      renderApp();
    });
  });

  document.querySelectorAll("[data-complete-task]").forEach((button) => {
    button.addEventListener("click", () => {
      const task = appState.tasks.find((item) => item.id === Number(button.dataset.completeTask));
      if (!task) return;
      task.status = "Concluída";
      task.tone = "success";
      renderApp();
      toast("Tarefa concluída na demonstração.");
    });
  });

  document.querySelectorAll("[data-task-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.taskFilter = button.dataset.taskFilter;
      renderApp();
    });
  });

  document.querySelector("#task-search")?.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    document.querySelectorAll("[data-task-row]").forEach((row) => {
      row.classList.toggle("hidden", !row.textContent.toLowerCase().includes(query));
    });
  });

  document.querySelectorAll("[data-room]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedRoom = button.dataset.room;
      renderApp();
    });
  });

  document.querySelectorAll("[data-open-room]").forEach((button) => {
    button.addEventListener("click", () => {
      const route = {
        tasks: "tasks",
        communication: "communication",
        calendar: "calendar",
        files: "files",
        management: "management",
        store: "store",
      }[button.dataset.openRoom];
      if (route) {
        appState.page = route;
        renderApp();
      }
    });
  });

  document.querySelector("#message-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#message-input");
    if (!input.value.trim()) return;
    appState.messages.push({ mine: true, author: "Você", text: input.value.trim(), time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) });
    renderApp();
    toast("Mensagem adicionada à conversa demonstrativa.");
  });

  const simpleActions = [
    ["#new-task", "Formulário rápido disponível na versão completa."],
    ["#new-event", "Novo evento simulado com sucesso."],
    ["#upload-file", "Upload demonstrativo. Nenhum arquivo foi enviado."],
    ["#generate-analysis", "Análise mockada: produtividade estável e dois itens exigem atenção."],
    ["#council", "Conselho mockado: priorize estabilidade e clareza na apresentação."],
  ];
  simpleActions.forEach(([selector, message]) => {
    document.querySelector(selector)?.addEventListener("click", () => toast(message));
  });

  document.querySelectorAll("[data-download]").forEach((button) => {
    button.addEventListener("click", () => toast(`Abrindo ${button.dataset.download} em modo demonstrativo.`));
  });
  document.querySelectorAll("[data-redeem]").forEach((button) => {
    button.addEventListener("click", () => toast(`${button.dataset.redeem} reservado na demonstração.`));
  });
  document.querySelectorAll("[data-bot]").forEach((button) => {
    button.addEventListener("click", () => toast(`${button.dataset.bot}: pronto para ajudar em modo mock.`));
  });
}

const requestedRole = new URLSearchParams(window.location.search).get("role");
const requestedPage = new URLSearchParams(window.location.search).get("page");
const savedRole = localStorage.getItem("levelcorp-demo-role");
const initialRole = requestedRole && accounts[requestedRole] ? requestedRole : savedRole;

if (initialRole && accounts[initialRole]) {
  appState.user = accounts[initialRole];
  if (requestedPage && pageTitles[requestedPage]) {
    appState.page = requestedPage;
  }
  localStorage.setItem("levelcorp-demo-role", initialRole);
  renderApp();
} else {
  renderLogin();
}
