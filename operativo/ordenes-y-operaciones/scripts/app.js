(function () {
  'use strict';

  var data = window.ORDENES_DATA;
  var state = { query: '', filtro: 'todas', pagina: 1 };

  var $ = function (sel) { return document.querySelector(sel); };
  var currency = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function icon(name, size) {
    var img = el('img');
    img.src = 'assets/icons/' + name + '.svg';
    img.width = size; img.height = size; img.alt = '';
    return img;
  }

  /* KPIs */
  function renderKpis() {
    var root = $('#kpis');
    data.kpis.forEach(function (k) {
      var item = el('div', 'ds-kpi');
      var ic = el('div', 'ds-kpi__icon');
      ic.appendChild(icon(k.icon, 24));
      var body = el('div', 'ds-kpi__body');
      body.appendChild(el('p', 'ds-kpi__label', k.label));
      body.appendChild(el('p', 'ds-kpi__value', String(k.value)));
      item.appendChild(ic); item.appendChild(body);
      root.appendChild(item);
    });
  }

  /* Choice Chips */
  function renderChips() {
    var root = $('#chips');
    root.innerHTML = '';
    data.filtros.forEach(function (f) {
      var chip = el('button', 'ds-choice-chip', f.count == null ? f.label : f.label + ' (' + f.count + ')');
      chip.type = 'button';
      chip.setAttribute('aria-pressed', String(state.filtro === f.id));
      chip.addEventListener('click', function () {
        state.filtro = f.id; state.pagina = 1;
        renderChips();
        // Los criterios de cada filtro dependen del backend; se emite el evento para conectarlo.
        document.dispatchEvent(new CustomEvent('ordenes:filtro', { detail: { filtro: f.id } }));
      });
      root.appendChild(chip);
    });
  }

  /* Tabla */
  function matches(o, q) {
    if (!q) return true;
    q = q.toLowerCase();
    return [o.id, o.cliente, o.canal].some(function (v) { return v.toLowerCase().indexOf(q) !== -1; });
  }

  function cell(extra) { var c = el('div', 'ds-table__cell' + (extra ? ' ' + extra : '')); c.setAttribute('role', 'cell'); return c; }

  function renderRow(o) {
    var row = el('a', 'ds-table__row' + (o.nueva ? ' ds-table__row--nuevo' : ''));
    row.href = '#orden/' + encodeURIComponent(o.id);
    row.setAttribute('role', 'row');
    row.setAttribute('aria-label', 'Orden ' + o.id + ', ' + o.cliente);

    var c1 = cell(); c1.textContent = o.id;

    var c2 = cell(); c2.appendChild(el('p', null, o.fecha));
    if (o.etiquetaFecha) c2.appendChild(el('p', 'ds-table__caption', o.etiquetaFecha));

    var c3 = cell(); c3.textContent = o.cliente;

    var c4 = cell('ds-table__cell--tags');
    o.tipos.forEach(function (t) { c4.appendChild(el('span', 'ds-tag ds-tag--neutral', t)); });

    var c5 = cell(); c5.textContent = o.canal;

    var c6 = cell('ds-table__cell--tags');
    c6.appendChild(el('span', 'ds-tag ds-tag--' + o.estado.tono, o.estado.label));

    var c7 = cell('ds-table__cell--center');
    if (o.accionesPendientes > 0) {
      c7.textContent = String(o.accionesPendientes);
    } else {
      var ok = icon('check', 20); ok.alt = 'Sin acciones pendientes';
      c7.appendChild(ok);
    }

    var c8 = cell('ds-table__cell--right'); c8.textContent = currency.format(o.total);

    var chev = icon('arrow-forward', 20); chev.className = 'ds-table__chevron';

    [c1, c2, c3, c4, c5, c6, c7, c8, chev].forEach(function (n) { row.appendChild(n); });
    return row;
  }

  function renderTable() {
    var body = $('#orders-body');
    body.innerHTML = '';
    var rows = data.ordenes.filter(function (o) { return matches(o, state.query); });

    var total = state.query ? rows.length : Math.max(data.totalRegistros || 0, rows.length);
    var paginas = Math.max(1, Math.ceil(total / data.porPagina));
    state.pagina = Math.min(state.pagina, paginas);
    var desde = total ? (state.pagina - 1) * data.porPagina + 1 : 0;
    var hasta = Math.min(state.pagina * data.porPagina, total);
    $('#paginator-label').textContent = desde + '-' + hasta + ' de ' + total;


    var visibles = rows.slice((state.pagina - 1) * data.porPagina, state.pagina * data.porPagina);
    if (!visibles.length) {
      body.appendChild(el('p', 'ds-table__empty', state.query ? 'No encontramos órdenes con esa búsqueda.' : 'No hay órdenes para mostrar.'));
      return;
    }
    visibles.forEach(function (o) { body.appendChild(renderRow(o)); });
  }

  function bind() {
    $('#orders-search').addEventListener('input', function (e) {
      state.query = e.target.value.trim(); state.pagina = 1; renderTable();
    });
    document.querySelectorAll('[data-page]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var total = Math.max(data.totalRegistros || 0, data.ordenes.length);
        var paginas = Math.max(1, Math.ceil(total / data.porPagina));
        var a = btn.getAttribute('data-page');
        state.pagina = a === 'first' ? 1 : a === 'last' ? paginas
          : a === 'prev' ? Math.max(1, state.pagina - 1) : Math.min(paginas, state.pagina + 1);
        renderTable();
      });
    });
  }

  renderKpis();
  renderChips();
  renderTable();
  bind();
})();
