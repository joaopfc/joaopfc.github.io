/**
 * app.js
 * Lógica de interface, renderização de cards, busca e tela cheia.
 */
document.addEventListener('DOMContentLoaded', () => {
  const catalogGrid = document.getElementById('catalogGrid');
  const searchInput = document.getElementById('searchInput');
  const filterButtons = document.querySelectorAll('.filter-button');
  const countAll = document.getElementById('countAll');

  const largeViewerModal = document.getElementById('largeViewerModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalPieceTitle = document.getElementById('modalPieceTitle');
  const modalModelViewer = document.getElementById('modalModelViewer');

  if (countAll && typeof cadCollection !== 'undefined') {
    countAll.textContent = cadCollection.length;
  }

  // Renderiza cards simplificados
  function renderCards(items) {
    if (!catalogGrid) return;
    catalogGrid.innerHTML = '';

    items.forEach(item => {
      const card = document.createElement('article');
      card.className = 'cad-3d-card';

      card.innerHTML = `
        <div class="viewer-viewport">
          <span class="category-badge">${item.categoryName}</span>
          <span class="cad-label">${item.software}</span>

          <model-viewer
            id="viewer-${item.id}"
            src="${item.modelUrl}"
            orientation="${item.orientation || '0deg 0deg 0deg'}"
            camera-controls
            auto-rotate
            rotation-per-second="20deg"
            shadow-intensity="1.2"
            interaction-prompt="none"
            loading="lazy"
            alt="${item.title}">
          </model-viewer>

          <div class="viewer-toolbar">
            <div class="tool-btn-group">
              <button class="tool-btn active" title="Girar" onclick="toggleAutoRotate('viewer-${item.id}', this)">
                <i class="fa-solid fa-arrows-rotate"></i>
              </button>
              <button class="tool-btn" title="Resetar Câmera" onclick="resetCamera('viewer-${item.id}')">
                <i class="fa-solid fa-crosshairs"></i>
              </button>
            </div>
            <span class="axis-helper"><i class="fa-solid fa-arrows-to-dot"></i> 360°</span>
          </div>
        </div>

        <div class="card-info">
          <div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-description">${item.summary}</p>
          </div>

          <button class="btn-expand" onclick="openExpandedViewer('${item.id}')">
            <i class="fa-solid fa-expand"></i> Visualizar em Tela Cheia
          </button>
        </div>
      `;

      catalogGrid.appendChild(card);
    });
  }

  // Controles 3D no card
  window.toggleAutoRotate = function(viewerId, buttonEl) {
    const viewer = document.getElementById(viewerId);
    if (!viewer) return;
    if (viewer.hasAttribute('auto-rotate')) {
      viewer.removeAttribute('auto-rotate');
      buttonEl.classList.remove('active');
    } else {
      viewer.setAttribute('auto-rotate', '');
      buttonEl.classList.add('active');
    }
  };

  window.resetCamera = function(viewerId) {
    const viewer = document.getElementById(viewerId);
    if (viewer) viewer.cameraOrbit = "0deg 75deg 105%";
  };

  // Filtros e Busca
  let currentCategory = 'all';

  function filterData() {
    if (typeof cadCollection === 'undefined') return;
    const query = searchInput.value.toLowerCase().trim();
    const filtered = cadCollection.filter(item => {
      const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
      const matchesSearch = item.title.toLowerCase().includes(query) || item.summary.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    renderCards(filtered);
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      filterData();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterData);
  }

  // Visualizador ampliado
  window.openExpandedViewer = function(id) {
    if (typeof cadCollection === 'undefined') return;
    const piece = cadCollection.find(p => p.id === id);
    if (!piece) return;

    modalPieceTitle.innerHTML = `<i class="fa-solid fa-cube" style="color: var(--cad-cyan);"></i> ${piece.title}`;
    modalModelViewer.src = piece.modelUrl;
    modalModelViewer.orientation = piece.orientation || '0deg 0deg 0deg';
    largeViewerModal.classList.add('active');
  };

  function closeModal() {
    largeViewerModal.classList.remove('active');
    modalModelViewer.src = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (largeViewerModal) {
    largeViewerModal.addEventListener('click', (e) => {
      if (e.target === largeViewerModal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && largeViewerModal.classList.contains('active')) closeModal();
  });

  // Inicialização
  if (typeof cadCollection !== 'undefined') {
    renderCards(cadCollection);
  }
});
