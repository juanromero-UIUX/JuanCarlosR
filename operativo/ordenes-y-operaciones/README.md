# Operativo · Órdenes y operaciones

Pantalla principal del flujo de órdenes y operaciones (perfil **Operativo**), implementada desde Figma:

- `👉 Ordenes casos de uso --- envio devolución` (node 3123:30883)
- `👉 Cancelaciones ---- 09/09/2027` (node 3390:23016) → frame `Ordenes y operaciones nuevo` (3396:2014)

## Estructura
- `index.html` — Header Op, título + Exportar, KPIs, tabla con búsqueda, paginador, filtros (Choice Chips) y Tab Menu header.
- `styles/tokens.css` — variables del Design System tal como están en Figma (color, spacing, radius, sombras, tipografía Nunito).
- `styles/components.css` — componentes DS: Header, _Profilebase, Search field V2, Button, Icon Button, Choice Chips, Status Chips (Tags), _Table base / row (default, hover, nuevo), Tab Menu header.
- `scripts/data.js` — datos de ejemplo copiados del frame de Figma (reemplazar por API).
- `assets/icons/` — SVG exportados directamente de los nodos de Figma.

Abrir `index.html` en el navegador (no requiere build).
