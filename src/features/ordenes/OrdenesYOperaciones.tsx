import { useMemo, useState } from 'react';
import { Button, ChoiceChips, IconButton, KpiSummary, Paginator, SearchField } from '../../components/ds';
import { OrdersTable } from './OrdersTable';
import { filtros, kpis, ordenes, porPagina, totalRegistros } from './mockData';
import type { FiltroOrdenes, Orden } from './types';
import styles from './OrdenesYOperaciones.module.css';

type Props = {
  onExport?: () => void;
  onOpenFilters?: () => void;
  onSelectOrden?: (orden: Orden) => void;
  /** Los criterios de cada filtro los define el backend. */
  onFiltroChange?: (filtro: FiltroOrdenes) => void;
};

const matches = (o: Orden, q: string) =>
  !q || [o.id, o.cliente, o.canal].some((v) => v.toLowerCase().includes(q.toLowerCase()));

export function OrdenesYOperaciones({ onExport, onOpenFilters, onSelectOrden, onFiltroChange }: Props) {
  const [query, setQuery] = useState('');
  const [filtro, setFiltro] = useState<FiltroOrdenes>('todas');
  const [page, setPage] = useState(1);

  const resultados = useMemo(() => ordenes.filter((o) => matches(o, query.trim())), [query]);
  const total = query.trim() ? resultados.length : Math.max(totalRegistros, resultados.length);
  const visibles = resultados.slice((page - 1) * porPagina, page * porPagina);

  return (
    <main className={styles.page}>
      <div className={styles.titleRow}>
        <h1 className={styles.title}>Órdenes y operaciones</h1>
        <Button leftIcon="export" onClick={onExport}>Exportar</Button>
      </div>

      <KpiSummary items={kpis} label="Resumen de órdenes" />

      <section className={styles.card} aria-label="Órdenes">
        <div className={styles.toolbar}>
          <SearchField
            variant="inside-component"
            label="Buscar órdenes"
            placeholder="Buscar por cliente, número de orden o canal de venta"
            value={query}
            onChange={(v) => {
              setQuery(v);
              setPage(1);
            }}
          />
          <div className={styles.toolbarRight}>
            <Paginator page={page} pageSize={porPagina} total={total} onPageChange={setPage} />
            <IconButton icon="filter" label="Filtros" onClick={onOpenFilters} />
          </div>
        </div>

        <div className={styles.filters}>
          <ChoiceChips
            label="Filtrar órdenes"
            options={filtros}
            value={filtro}
            onChange={(f) => {
              setFiltro(f);
              setPage(1);
              onFiltroChange?.(f);
            }}
          />
        </div>

        <OrdersTable
          ordenes={visibles}
          emptyMessage={query.trim() ? 'No encontramos órdenes con esa búsqueda.' : 'No hay órdenes para mostrar.'}
          onSelect={(o) => onSelectOrden?.(o)}
        />
      </section>
    </main>
  );
}
