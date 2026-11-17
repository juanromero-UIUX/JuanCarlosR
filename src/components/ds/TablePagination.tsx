import { Icon } from './Icon';
import styles from './TablePagination.module.css';

type TablePaginationProps = {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
};

/** "Paginación tabla" del Design System: va al pie de la tabla. */
export function TablePagination({ page, pageSize, total, onPageChange }: TablePaginationProps) {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const from = total ? (page - 1) * pageSize + 1 : 0;
  const to = Math.min(page * pageSize, total);
  const go = (p: number) => onPageChange(Math.min(pages, Math.max(1, p)));

  return (
    <nav className={styles.pagination} aria-label="Paginación">
      <div className={styles.inner}>
        <div className={`${styles.nav} ${styles.navStart}`}>
          <button type="button" className={styles.navButton} aria-label="Primera página" disabled={page === 1} onClick={() => go(1)}>
            <Icon name="pagination-first" />
          </button>
          <button type="button" className={styles.navButton} aria-label="Página anterior" disabled={page === 1} onClick={() => go(page - 1)}>
            <Icon name="pagination-prev" />
          </button>
        </div>

        <div className={styles.info}>
          <p className={styles.text} aria-live="polite">{`${from}-${to} de ${total}`}</p>
          <div className={styles.pageGroup}>
            <label className={styles.pageSelect}>
              <span className={styles.text}>{page}</span>
              <Icon name="arrow-down-sm" size={16} />
              <select aria-label="Página" value={page} onChange={(e) => go(Number(e.target.value))}>
                {Array.from({ length: pages }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </label>
            <span className={styles.text}>{`de ${pages} ${pages === 1 ? 'página' : 'páginas'}`}</span>
          </div>
        </div>

        <div className={`${styles.nav} ${styles.navEnd}`}>
          <button type="button" className={styles.navButton} aria-label="Página siguiente" disabled={page === pages} onClick={() => go(page + 1)}>
            <Icon name="pagination-next" />
          </button>
          <button type="button" className={styles.navButton} aria-label="Última página" disabled={page === pages} onClick={() => go(pages)}>
            <Icon name="pagination-last" />
          </button>
        </div>
      </div>
    </nav>
  );
}
