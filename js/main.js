/* ============================================================
   日本語 Study Guide — JS compartilhado
   Para adicionar/renomear uma página no menu, edite só o NAV_ITEMS
   abaixo — o menu lateral é gerado automaticamente em toda página
   que incluir este arquivo.
   ============================================================ */

const NAV_ITEMS = [
  { page: 'index.html',      badge: '序', label: 'Introdução' },
  { page: 'cap45.html',      badge: '45', label: 'Capítulo 45' },
  { page: 'cap46.html',      badge: '46', label: 'Capítulo 46' },
  { page: 'cap47.html',      badge: '47', label: 'Capítulo 47' },
  { page: 'cap48.html',      badge: '48', label: 'Capítulo 48' },
  { page: 'cap49.html',      badge: '49', label: 'Capítulo 49' },
  { page: 'cap50.html',      badge: '50', label: 'Capítulo 50' },
  { divider: true },
  { page: 'revisao.html',    badge: '総', label: 'Revisão Geral' },
  { page: 'exercicios.html', badge: '終', label: 'Exercícios Finais' },
];

function currentPageName() {
  const last = window.location.pathname.split('/').pop();
  return last === '' ? 'index.html' : last;
}

function buildSidebar() {
  const mount = document.getElementById('sidebar');
  if (!mount) return;
  const current = currentPageName();

  let html = ''
    + '<div class="sidebar-header">'
    +   '<div class="logo-jp">日本語</div>'
    +   '<div class="logo-sub">Study Guide</div>'
    +   '<div class="logo-tag">Capítulos 45–50 · Revisão para prova</div>'
    + '</div>'
    + '<nav class="sidebar-nav"><ul>';

  NAV_ITEMS.forEach(item => {
    if (item.divider) {
      html += '<li class="nav-divider"></li>';
      return;
    }
    const activeClass = item.page === current ? ' class="active"' : '';
    html += '<li><a href="' + item.page + '"' + activeClass + '>'
          + '<span class="nav-badge">' + item.badge + '</span> ' + item.label
          + '</a></li>';
  });

  html += '</ul></nav>';
  mount.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();

  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  }

  // Fecha o menu mobile ao clicar em um link do sidebar
  document.addEventListener('click', (e) => {
    if (e.target.closest('.sidebar-nav a') && sidebar) {
      sidebar.classList.remove('open');
    }
  });
});

/* ===== Interações dos exercícios ===== */

function toggleGabarito(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const isOpen = el.style.display === 'block';
  el.style.display = isOpen ? 'none' : 'block';
  if (btn) btn.textContent = isOpen ? '📖  Ver Gabarito' : '🔽  Ocultar Gabarito';
  if (!isOpen) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function togglePatternKey(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const isOpen = el.classList.contains('open');
  el.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '🔍  Ver padrões de cada frase' : '🔼  Ocultar padrões';
}
