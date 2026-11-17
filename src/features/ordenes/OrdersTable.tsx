import { Icon, StatusTag } from '../../components/ds';
import type { Orden } from './types';
import styles from './OrdersTable.module.css';

const currency = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });

type OrdersTableProps = {
  ordenes: Orden[];
  emptyMessage: string;
  onSelect: (orden: Orden) => void;
};

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

export function OrdersTable({ ordenes, emptyMessage, onSelect }: OrdersTableProps) {
  return (
    <div className={styles.table} role="table" aria-label="Lista de órdenes">
      <div className={styles.head} role="rowgroup">
        <div className={styles.row} role="row">
          <div className={styles.cell} role="columnheader">No. de orden</div>
          <div className={styles.cell} role="columnheader">Fecha de<br />la orden</div>
          <div className={styles.cell} role="columnheader">Cliente</div>
          <div className={styles.cell} role="columnheader">Tipo de<br />transacción</div>
          <div className={styles.cell} role="columnheader">Canal de venta</div>
          <div className={styles.cell} role="columnheader">Estado</div>
          <div className={cx(styles.cell, styles.center)} role="columnheader">Acciones pendientes</div>
          <div className={cx(styles.cell, styles.right)} role="columnheader">Total</div>
          <div aria-hidden="true" />
        </div>
      </div>

      <div className={styles.body} role="rowgroup">
        {ordenes.length === 0 && <p className={styles.empty}>{emptyMessage}</p>}
        {ordenes.map((o) => (
          <a
            key={o.id}
            href={`#orden/${encodeURIComponent(o.id)}`}
            role="row"
            aria-label={`Orden ${o.id}, ${o.cliente}`}
            className={cx(styles.row, o.nueva && styles.nuevo)}
            onClick={(e) => {
              e.preventDefault();
              onSelect(o);
            }}
          >
            <div className={styles.cell} role="cell">{o.id}</div>
            <div className={styles.cell} role="cell">
              <p>{o.fecha}</p>
              {o.etiquetaFecha && <p className={styles.caption}>{o.etiquetaFecha}</p>}
            </div>
            <div className={styles.cell} role="cell">{o.cliente}</div>
            <div className={cx(styles.cell, styles.tags)} role="cell">
              {o.tipos.map((t) => <StatusTag key={t}>{t}</StatusTag>)}
            </div>
            <div className={styles.cell} role="cell">{o.canal}</div>
            <div className={cx(styles.cell, styles.tags)} role="cell">
              <StatusTag tone={o.estado.tono}>{o.estado.label}</StatusTag>
            </div>
            <div className={cx(styles.cell, styles.center)} role="cell">
              {o.accionesPendientes > 0
                ? o.accionesPendientes
                : <Icon name="check" size={20} label="Sin acciones pendientes" />}
            </div>
            <div className={cx(styles.cell, styles.right)} role="cell">{currency.format(o.total)}</div>
            <Icon name="arrow-forward" size={20} className={styles.chevron} />
          </a>
        ))}
      </div>
    </div>
  );
}
