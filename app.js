// Estado da Aplicação
const STORAGE_KEY = "to_plano_terapeutico_v2";

let state = {
  pacientes: [],
  pacienteSelecionadoId: null,
  seedVariacao: 0
};

// Elementos do DOM
const elListaPacientes = document.getElementById("lista-pacientes");
const elBuscaPaciente = document.getElementById("busca-paciente");
const elEmptyState = document.getElementById("empty-state");
const elWorkspace = document.getElementById("patient-workspace");

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  carregarDados();
  bindEvents();
  renderizarListaPacientes();

  if (state.pacienteSelecionadoId) {
    carregarFichaPaciente(state.pacienteSelecionadoId);
  }
});

function carregarDados() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("to_plano_terapeutico_v1");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.pacientes) && parsed.pacientes.length > 0) {
        state.pacientes = parsed.pacientes;
        state.pacienteSelecionadoId = parsed.pacienteSelecionadoId || parsed.pacientes[0].id;
        return;
      }
    }
  } catch (e) {
    console.error("Erro ao ler localStorage:", e);
  }

  // Carga automática dos 46 pacientes embutidos
  if (typeof PACIENTES_INICIAIS !== "undefined" && PACIENTES_INICIAIS.length > 0) {
    state.pacientes = JSON.parse(JSON.stringify(PACIENTES_INICIAIS));
    state.pacienteSelecionadoId = state.pacientes[0].id;
    salvarDados();
  }
}

function salvarDados() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      pacientes: state.pacientes,
      pacienteSelecionadoId: state.pacienteSelecionadoId
    })
  );
}

function mostrarToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2800);
}

function getPacienteAtual() {
  return state.pacientes.find((p) => p.id === state.pacienteSelecionadoId) || null;
}

// Alternar entre Aba Principal "Pacientes" e Aba Principal "Ficha do Paciente"
function abrirAbaPrincipal(aba) {
  const btnPac = document.getElementById("nav-tab-pacientes");
  const btnAtend = document.getElementById("nav-tab-atendimento");
  const viewPac = document.getElementById("view-pacientes");
  const viewAtend = document.getElementById("view-atendimento");

  if (aba === "pacientes") {
    btnPac.classList.add("active");
    btnAtend.classList.remove("active");
    viewPac.classList.add("active");
    viewAtend.classList.remove("active");
  } else {
    btnPac.classList.remove("active");
    btnAtend.classList.add("active");
    viewPac.classList.remove("active");
    viewAtend.classList.add("active");
  }
  window.scrollTo({ top: 0, behavior: "instant" });
}

// Alternar Sub-Abas internas da Ficha do Paciente
function ativarSubAba(tabId) {
  document.querySelectorAll(".tab-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabId);
  });
  if (tabId === "tab-relatorio") {
    renderizarRelatorio();
  }
}

// Eventos
function bindEvents() {
  // Navegação principal por abas
  document.getElementById("nav-tab-pacientes").addEventListener("click", () => abrirAbaPrincipal("pacientes"));
  document.getElementById("nav-tab-atendimento").addEventListener("click", () => {
    if (state.pacienteSelecionadoId) {
      carregarFichaPaciente(state.pacienteSelecionadoId);
    }
    abrirAbaPrincipal("atendimento");
  });

  // Botões Voltar para lista de pacientes
  document.getElementById("btn-voltar-pacientes").addEventListener("click", () => abrirAbaPrincipal("pacientes"));
  document.getElementById("btn-voltar-lista-empty").addEventListener("click", () => abrirAbaPrincipal("pacientes"));

  // Abrir modal novo paciente
  document.getElementById("btn-novo-paciente").addEventListener("click", () => abrirModalPaciente());
  document.getElementById("btn-editar-paciente").addEventListener("click", () => {
    const p = getPacienteAtual();
    if (p) abrirModalPaciente(p);
  });

  // Fechar modal
  document.getElementById("btn-fechar-modal").addEventListener("click", fecharModalPaciente);
  document.getElementById("btn-cancelar-modal").addEventListener("click", fecharModalPaciente);

  // Salvar paciente
  document.getElementById("form-paciente").addEventListener("submit", (e) => {
    e.preventDefault();
    salvarPacienteForm();
  });

  // Excluir paciente
  document.getElementById("btn-excluir-paciente").addEventListener("click", () => {
    const p = getPacienteAtual();
    if (!p) return;
    if (confirm(`Deseja realmente excluir o cadastro de ${p.nome}?`)) {
      state.pacientes = state.pacientes.filter((item) => item.id !== p.id);
      state.pacienteSelecionadoId = state.pacientes.length ? state.pacientes[0].id : null;
      salvarDados();
      renderizarListaPacientes();
      abrirAbaPrincipal("pacientes");
      mostrarToast("Paciente excluído.");
    }
  });

  // Busca
  elBuscaPaciente.addEventListener("input", renderizarListaPacientes);

  // Sub-Abas
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => ativarSubAba(btn.dataset.tab));
  });

  // Salvar Plano Terapêutico (botão superior e inferior)
  const handleSalvarPlano = () => {
    salvarPlanoDoPaciente();
    renderizarRoteiroSemanal();
    renderizarRelatorio();
    mostrarToast("Plano terapêutico salvo!");
  };
  document.getElementById("btn-salvar-plano").addEventListener("click", handleSalvarPlano);
  document.getElementById("btn-salvar-plano-bottom").addEventListener("click", handleSalvarPlano);

  // Alternar sugestões de atividades
  document.getElementById("btn-regerar-roteiro").addEventListener("click", () => {
    state.seedVariacao += 1;
    renderizarRoteiroSemanal();
    mostrarToast("Sugestões atualizadas!");
  });

  // Registrar atendimento do dia
  document.getElementById("form-registro-sessao").addEventListener("submit", (e) => {
    e.preventDefault();
    adicionarRegistroSessao();
  });

  // Relatório
  document.getElementById("btn-atualizar-relatorio").addEventListener("click", renderizarRelatorio);
  document.getElementById("btn-imprimir-relatorio").addEventListener("click", () => window.print());
  document.getElementById("btn-copiar-relatorio").addEventListener("click", copiarTextoRelatorio);

  // Backup Exportar / Importar
  document.getElementById("btn-exportar-backup").addEventListener("click", exportarBackup);
  document.getElementById("input-importar-backup").addEventListener("change", importarBackup);
}

// Modal de Paciente
function abrirModalPaciente(paciente = null) {
  const modal = document.getElementById("modal-paciente");
  document.getElementById("modal-titulo").textContent = paciente
    ? "Editar Cadastro da Criança"
    : "Cadastrar Nova Criança";

  document.getElementById("pac-id").value = paciente ? paciente.id : "";
  document.getElementById("pac-nome").value = paciente ? paciente.nome : "";
  document.getElementById("pac-idade").value = paciente ? paciente.idade || "" : "";
  document.getElementById("pac-terapeuta").value = paciente ? paciente.terapeuta || "Flavia Cherotti" : "Flavia Cherotti";
  document.getElementById("pac-frequencia").value = paciente ? String(paciente.frequencia) : "2";
  document.getElementById("pac-duracao").value = paciente ? paciente.duracao || "40 Min." : "40 Min.";
  document.getElementById("pac-observacoes").value = paciente ? paciente.observacoes || "" : "";

  modal.classList.remove("hidden");
}

function fecharModalPaciente() {
  document.getElementById("modal-paciente").classList.add("hidden");
}

function salvarPacienteForm() {
  const id = document.getElementById("pac-id").value;
  const nome = document.getElementById("pac-nome").value.trim();
  const idade = document.getElementById("pac-idade").value.trim();
  const terapeuta = document.getElementById("pac-terapeuta").value.trim() || "Flavia Cherotti";
  const frequencia = parseInt(document.getElementById("pac-frequencia").value, 10) || 2;
  const duracao = document.getElementById("pac-duracao").value.trim() || "40 Min.";
  const observacoes = document.getElementById("pac-observacoes").value.trim();

  if (!nome) return;

  if (id) {
    const pac = state.pacientes.find((p) => p.id === id);
    if (pac) {
      pac.nome = nome;
      pac.idade = idade;
      pac.terapeuta = terapeuta;
      pac.frequencia = frequencia;
      pac.duracao = duracao;
      pac.observacoes = observacoes;
    }
    salvarDados();
    fecharModalPaciente();
    renderizarListaPacientes();
    selecionarPaciente(id);
    mostrarToast("Dados atualizados!");
  } else {
    const novoId = "pac_" + Date.now();
    const novoPaciente = {
      id: novoId,
      nome,
      idade,
      terapeuta,
      frequencia,
      duracao,
      observacoes,
      plano: {
        itensAtivos: [],
        notasPorEixo: {}
      },
      registros: []
    };
    state.pacientes.unshift(novoPaciente);
    salvarDados();
    fecharModalPaciente();
    renderizarListaPacientes();
    selecionarPaciente(novoId);
    ativarSubAba("tab-plano");
    mostrarToast("Criança cadastrada! Marque os objetivos do Plano.");
  }
}

// Lista de Pacientes
function renderizarListaPacientes() {
  const termo = elBuscaPaciente.value.toLowerCase().trim();
  elListaPacientes.innerHTML = "";
  document.getElementById("total-pacientes-badge").textContent = state.pacientes.length;

  const filtrados = state.pacientes.filter((p) => p.nome.toLowerCase().includes(termo));

  if (filtrados.length === 0) {
    elListaPacientes.innerHTML = `<li style="font-size:13px; color:#64748b; padding:12px;">Nenhuma criança encontrada.</li>`;
    return;
  }

  filtrados.forEach((pac) => {
    const li = document.createElement("li");
    li.className = "patient-item" + (pac.id === state.pacienteSelecionadoId ? " active" : "");
    const qtdObjetivos = pac.plano?.itensAtivos?.length || 0;
    li.innerHTML = `
      <div>
        <div class="patient-item-name">${escapeHtml(pac.nome)}</div>
        <div class="patient-item-meta">${pac.frequencia}x/sem • ${qtdObjetivos} objetivo(s) ativo(s)</div>
      </div>
      <span class="patient-item-arrow">›</span>
    `;
    li.addEventListener("click", () => selecionarPaciente(pac.id));
    elListaPacientes.appendChild(li);
  });
}

// Carregar dados da ficha sem forçar troca de aba na inicialização
function carregarFichaPaciente(id) {
  state.pacienteSelecionadoId = id;
  salvarDados();
  renderizarListaPacientes();

  const pac = getPacienteAtual();
  if (!pac) {
    elWorkspace.classList.add("hidden");
    elEmptyState.classList.remove("hidden");
    return;
  }

  elEmptyState.classList.add("hidden");
  elWorkspace.classList.remove("hidden");

  document.getElementById("header-nome-paciente").textContent =
    pac.nome + (pac.idade ? ` (${pac.idade})` : "");
  document.getElementById("header-frequencia").textContent = `${pac.frequencia}x por semana`;
  document.getElementById("header-duracao").textContent = `Sessão: ${pac.duracao}`;
  document.getElementById("header-terapeuta").textContent = `Terapeuta: ${pac.terapeuta}`;
  document.getElementById("header-diagnostico").textContent =
    pac.observacoes || "Sem observações clínicas iniciais cadastradas.";
  document.getElementById("texto-freq-semanal").textContent = `${pac.frequencia} atendimento(s)/semana`;

  const hoje = new Date().toISOString().split("T")[0];
  document.getElementById("reg-data").value = hoje;

  renderizarPlanoTerapeutico();
  renderizarRoteiroSemanal();
  renderizarHistoricoRegistros();
  renderizarRelatorio();
}

// Ao clicar num paciente: carrega a ficha e abre direto na aba da Ficha do Paciente
function selecionarPaciente(id) {
  carregarFichaPaciente(id);
  abrirAbaPrincipal("atendimento");
}

// SUB-ABA 2: Plano Terapêutico
function renderizarPlanoTerapeutico() {
  const pac = getPacienteAtual();
  if (!pac) return;

  const container = document.getElementById("container-eixos-plano");
  container.innerHTML = "";

  const ativos = new Set(pac.plano?.itensAtivos || []);
  const notas = pac.plano?.notasPorEixo || {};

  EIXOS_TERAPEUTICOS.forEach((eixo) => {
    const card = document.createElement("div");
    card.className = "axis-card";

    let html = `<div class="axis-title"><span>${escapeHtml(eixo.titulo)}</span></div>`;

    eixo.subgrupos.forEach((sub) => {
      if (sub.nome) {
        html += `<div class="subaxis-label">${escapeHtml(sub.nome)}</div>`;
      }
      html += `<div class="checklist-grid">`;
      sub.itens.forEach((item) => {
        const checked = ativos.has(item.id) ? "checked" : "";
        html += `
          <label class="check-item">
            <input type="checkbox" class="chk-plano-item" value="${item.id}" ${checked} />
            <span>${escapeHtml(item.label)}</span>
          </label>
        `;
      });
      html += `</div>`;
    });

    const notaAtual = notas[eixo.id] || "";
    html += `
      <div class="axis-notes">
        <label>${escapeHtml(eixo.notaLabel)}</label>
        <textarea class="txt-nota-eixo" data-eixo="${eixo.id}" rows="2" placeholder="Registre materiais específicos, adaptações ou observações...">${escapeHtml(notaAtual)}</textarea>
      </div>
    `;

    card.innerHTML = html;
    container.appendChild(card);
  });
}

function salvarPlanoDoPaciente() {
  const pac = getPacienteAtual();
  if (!pac) return;

  const selecionados = [];
  document.querySelectorAll(".chk-plano-item:checked").forEach((chk) => {
    selecionados.push(chk.value);
  });

  const notas = {};
  document.querySelectorAll(".txt-nota-eixo").forEach((txt) => {
    const val = txt.value.trim();
    if (val) {
      notas[txt.dataset.eixo] = val;
    }
  });

  pac.plano = {
    itensAtivos: selecionados,
    notasPorEixo: notas
  };

  salvarDados();
  renderizarListaPacientes();
}

function encontrarItemPlano(itemId) {
  for (const eixo of EIXOS_TERAPEUTICOS) {
    for (const sub of eixo.subgrupos) {
      for (const item of sub.itens) {
        if (item.id === itemId) {
          return {
            eixoTitulo: eixo.titulo,
            subgrupo: sub.nome,
            item
          };
        }
      }
    }
  }
  return null;
}

// SUB-ABA 1: Roteiro Semanal Automático
function renderizarRoteiroSemanal() {
  const pac = getPacienteAtual();
  if (!pac) return;

  const container = document.getElementById("container-sessoes-semanais");
  container.innerHTML = "";

  const idsAtivos = pac.plano?.itensAtivos || [];
  if (idsAtivos.length === 0) {
    container.innerHTML = `
      <div class="card" style="grid-column: 1 / -1; text-align:center; padding:28px;">
        <p style="color:#64748b; margin-bottom:14px;">
          Nenhum objetivo foi marcado ainda no <strong>Plano Terapêutico (PTS)</strong> desta criança.
        </p>
        <button id="btn-ir-plano-vazio" class="btn btn-primary" type="button">
          📋 Marcar Objetivos no Plano (PTS)
        </button>
      </div>
    `;
    const btnIrPlano = document.getElementById("btn-ir-plano-vazio");
    if (btnIrPlano) {
      btnIrPlano.addEventListener("click", () => ativarSubAba("tab-plano"));
    }
    return;
  }

  const itensDetalhados = idsAtivos.map(encontrarItemPlano).filter(Boolean);
  const numSessoes = pac.frequencia || 2;
  const sessoes = Array.from({ length: numSessoes }, () => []);

  if (itensDetalhados.length >= numSessoes) {
    itensDetalhados.forEach((obj, idx) => {
      sessoes[idx % numSessoes].push(obj);
    });
  } else {
    for (let s = 0; s < numSessoes; s++) {
      itensDetalhados.forEach((obj) => sessoes[s].push(obj));
    }
  }

  sessoes.forEach((listaObjetivos, sIdx) => {
    const card = document.createElement("div");
    card.className = "session-card";

    let atividadesHtml = "";
    const resumoEixos = [];

    listaObjetivos.forEach((obj, oIdx) => {
      const sugs = obj.item.sugestoes;
      const escolhaSug = sugs[(sIdx + oIdx + state.seedVariacao) % sugs.length];
      const nomeEixoCurto = obj.eixoTitulo.replace(/^\d+\s–\s/, "");
      resumoEixos.push(obj.item.label);

      atividadesHtml += `
        <div class="activity-block">
          <div class="activity-axis">${escapeHtml(nomeEixoCurto)}${obj.subgrupo ? " • " + escapeHtml(obj.subgrupo) : ""}</div>
          <div class="activity-goal">${escapeHtml(obj.item.label)}</div>
          <div class="activity-suggestion">
            <strong>💡 Sugestão prática:</strong> ${escapeHtml(escolhaSug)}
          </div>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="session-card-header">
        <h4>Atendimento ${sIdx + 1} da Semana</h4>
        <span>${pac.duracao}</span>
      </div>
      <div class="session-card-body">
        ${atividadesHtml}
      </div>
      <div class="session-card-footer">
        <button class="btn btn-secondary btn-sm btn-usar-no-diario" type="button">
          ✍️ Registrar Execução no Diário
        </button>
      </div>
    `;

    card.querySelector(".btn-usar-no-diario").addEventListener("click", () => {
      document.getElementById("reg-sessao-num").value = `Atendimento ${sIdx + 1}`;
      document.getElementById("reg-eixos-trabalhados").value = resumoEixos.join("; ");
      ativarSubAba("tab-diario");
      document.getElementById("reg-como-foi").focus();
    });

    container.appendChild(card);
  });
}

// SUB-ABA 3: Diário / Registro Pós-Sessão
function adicionarRegistroSessao() {
  const pac = getPacienteAtual();
  if (!pac) return;

  const data = document.getElementById("reg-data").value;
  const sessaoNum = document.getElementById("reg-sessao-num").value;
  const status = document.querySelector('input[name="reg-status"]:checked').value;
  const eixos = document.getElementById("reg-eixos-trabalhados").value.trim();
  const comoFoi = document.getElementById("reg-como-foi").value.trim();

  if (!data || !comoFoi) return;

  pac.registros = pac.registros || [];
  pac.registros.unshift({
    id: "reg_" + Date.now(),
    data,
    sessaoNum,
    status,
    eixos,
    comoFoi
  });

  pac.registros.sort((a, b) => b.data.localeCompare(a.data));

  salvarDados();
  document.getElementById("reg-como-foi").value = "";
  renderizarHistoricoRegistros();
  renderizarRelatorio();
  mostrarToast("Registro da sessão salvo!");
}

function renderizarHistoricoRegistros() {
  const pac = getPacienteAtual();
  if (!pac) return;

  const lista = document.getElementById("lista-registros-sessao");
  const registros = pac.registros || [];
  document.getElementById("contador-registros").textContent = `${registros.length} registro(s)`;

  if (registros.length === 0) {
    lista.innerHTML = `<p style="font-size:13px; color:#64748b;">Nenhum atendimento registrado ainda para esta criança.</p>`;
    return;
  }

  lista.innerHTML = "";
  registros.forEach((reg) => {
    let badgeClass = "st-ok";
    if (reg.status.includes("parcialmente")) badgeClass = "st-partial";
    if (reg.status.includes("Não")) badgeClass = "st-no";

    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-top">
        <span class="timeline-date">${formatarDataBR(reg.data)} — ${escapeHtml(reg.sessaoNum)}</span>
        <span class="timeline-status ${badgeClass}">${escapeHtml(reg.status)}</span>
      </div>
      <div class="timeline-eixos">Foco: ${escapeHtml(reg.eixos || "Não especificado")}</div>
      <div class="timeline-desc">${escapeHtml(reg.comoFoi)}</div>
      <div class="timeline-actions">
        <button class="btn-link-danger" type="button">Excluir registro</button>
      </div>
    `;

    item.querySelector(".btn-link-danger").addEventListener("click", () => {
      if (confirm("Remover este registro de sessão?")) {
        pac.registros = pac.registros.filter((r) => r.id !== reg.id);
        salvarDados();
        renderizarHistoricoRegistros();
        renderizarRelatorio();
      }
    });

    lista.appendChild(item);
  });
}

// SUB-ABA 4: Relatório Individual
function renderizarRelatorio() {
  const pac = getPacienteAtual();
  if (!pac) return;

  const area = document.getElementById("area-impressao-relatorio");
  const dataInicio = document.getElementById("relatorio-data-inicio").value;
  const dataFim = document.getElementById("relatorio-data-fim").value;

  let registros = pac.registros || [];
  if (dataInicio) {
    registros = registros.filter((r) => r.data >= dataInicio);
  }
  if (dataFim) {
    registros = registros.filter((r) => r.data <= dataFim);
  }

  const total = registros.length;
  const integrais = registros.filter((r) => r.status === "Realizado integralmente").length;
  const parciais = registros.filter((r) => r.status === "Realizado parcialmente").length;
  const naoRealizados = registros.filter((r) => r.status.includes("Não")).length;

  const ativosSet = new Set(pac.plano?.itensAtivos || []);
  let planoHtml = "";

  EIXOS_TERAPEUTICOS.forEach((eixo) => {
    const itensMarcados = [];
    eixo.subgrupos.forEach((sub) => {
      sub.itens.forEach((it) => {
        if (ativosSet.has(it.id)) {
          itensMarcados.push(sub.nome ? `${sub.nome}: ${it.label}` : it.label);
        }
      });
    });

    const notaEixo = pac.plano?.notasPorEixo?.[eixo.id];

    if (itensMarcados.length > 0 || notaEixo) {
      planoHtml += `
        <div style="margin-bottom:12px;">
          <strong>${escapeHtml(eixo.titulo)}</strong>
          ${
            itensMarcados.length
              ? `<ul class="report-list">${itensMarcados.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`
              : ""
          }
          ${
            notaEixo
              ? `<p style="font-size:12px; color:#475569; margin-top:4px;"><em>Obs.: ${escapeHtml(notaEixo)}</em></p>`
              : ""
          }
        </div>
      `;
    }
  });

  if (!planoHtml) {
    planoHtml = `<p style="font-size:13px; color:#64748b;">Nenhum objetivo terapêutico selecionado no plano até o momento.</p>`;
  }

  const registrosHtml = registros.length
    ? registros
        .map(
          (r) => `
        <div style="border-bottom:1px solid #e2e8f0; padding:10px 0; font-size:13px;">
          <div style="display:flex; justify-content:space-between; font-weight:700;">
            <span>${formatarDataBR(r.data)} (${escapeHtml(r.sessaoNum)})</span>
            <span>${escapeHtml(r.status)}</span>
          </div>
          <div style="color:#2d6a6a; font-size:12px; margin:2px 0;">Intervenções: ${escapeHtml(r.eixos)}</div>
          <div style="color:#1e293b; white-space:pre-line;">${escapeHtml(r.comoFoi)}</div>
        </div>
      `
        )
        .join("")
    : `<p style="font-size:13px; color:#64748b;">Nenhum registro de atendimento no período selecionado.</p>`;

  const hojeBR = new Date().toLocaleDateString("pt-BR");

  area.innerHTML = `
    <div class="report-header">
      <div>
        <h2>Relatório de Evolução — Terapia Ocupacional</h2>
        <span style="font-size:12px; color:#64748b;">Plano Terapêutico Individual & Acompanhamento de Sessões</span>
      </div>
      <div style="font-size:12px; color:#64748b;">Emissão: ${hojeBR}</div>
    </div>

    <div class="report-grid-info">
      <div><strong>Paciente:</strong> ${escapeHtml(pac.nome)}</div>
      <div><strong>Idade:</strong> ${escapeHtml(pac.idade || "Não informada")}</div>
      <div><strong>Terapeuta Responsável:</strong> ${escapeHtml(pac.terapeuta)}</div>
      <div><strong>Frequência / Duração:</strong> ${pac.frequencia}x por semana (${escapeHtml(pac.duracao)})</div>
      <div style="grid-column: 1 / -1;"><strong>Perfil / Demanda Inicial:</strong> ${escapeHtml(pac.observacoes || "—")}</div>
    </div>

    <div class="report-section">
      <h4>1. Objetivos e Intervenções do Plano Terapêutico</h4>
      ${planoHtml}
    </div>

    <div class="report-section">
      <h4>2. Indicadores de Execução do Plano no Período</h4>
      <div class="report-stats">
        <div class="stat-box"><strong>${total}</strong><span>Sessões Registradas</span></div>
        <div class="stat-box"><strong>${integrais}</strong><span>Realizadas Integralmente</span></div>
        <div class="stat-box"><strong>${parciais + naoRealizados}</strong><span>Parciais / Intercorrências</span></div>
      </div>
    </div>

    <div class="report-section">
      <h4>3. Evolução Cronológica dos Atendimentos</h4>
      ${registrosHtml}
    </div>

    <div class="report-footer-sign">
      <div class="sign-line"></div>
      <strong>${escapeHtml(pac.terapeuta)}</strong><br/>
      <span>Terapeuta Ocupacional</span>
    </div>
  `;
}

function copiarTextoRelatorio() {
  const texto = document.getElementById("area-impressao-relatorio").innerText;
  navigator.clipboard.writeText(texto).then(() => {
    mostrarToast("Relatório copiado!");
  });
}

function exportarBackup() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const dataStr = new Date().toISOString().split("T")[0];
  a.href = url;
  a.download = `backup-plano-terapeutico-to-${dataStr}.json`;
  a.click();
  URL.revokeObjectURL(url);
  mostrarToast("Backup baixado!");
}

function importarBackup(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const dados = JSON.parse(e.target.result);
      if (Array.isArray(dados.pacientes)) {
        state.pacientes = dados.pacientes;
        state.pacienteSelecionadoId = dados.pacienteSelecionadoId || (dados.pacientes[0]?.id || null);
        salvarDados();
        renderizarListaPacientes();
        if (state.pacienteSelecionadoId) {
          carregarFichaPaciente(state.pacienteSelecionadoId);
        }
        mostrarToast("Backup restaurado!");
      } else {
        alert("Arquivo de backup inválido.");
      }
    } catch (err) {
      alert("Não foi possível ler o arquivo JSON.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function formatarDataBR(isoDate) {
  if (!isoDate) return "";
  const [y, m, d] = isoDate.split("-");
  return `${d}/${m}/${y}`;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}