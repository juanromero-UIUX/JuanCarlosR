# Ataskate · Operativo

React 19 + TypeScript + Vite. Estilos con CSS Modules sobre los tokens del Design System (`src/styles/tokens.css`).

```bash
npm install
npm run dev
```

## Estructura
- `src/styles/tokens.css` — variables del DS tal como están en Figma (color, spacing, radius, sombras, Nunito).
- `src/components/ds/` — componentes del DS: `Header` (Op), `SearchField` (V2), `Button`, `IconButton`, `ChoiceChips`, `StatusTag` (Status Chips/Tags), `KpiSummary`, `Paginator`, `TabMenuHeader`, `Icon`.
- `src/assets/icons/` — SVG exportados directamente de los nodos de Figma.
- `src/features/ordenes/` — pantalla **Órdenes y operaciones** (Figma `3396:2014`): `OrdenesYOperaciones`, `OrdersTable`, `mockData` (datos copiados del diseño; reemplazar por API).
