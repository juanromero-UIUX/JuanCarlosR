import { IconButton } from './IconButton';
import styles from './Paginator.module.css';

type PaginatorProps = {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
};

export function Paginator({ page, pageSize, total, onPageChange }: PaginatorProps) {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const from = total ? (page - 1) * pageSize + 1 : 0;
  const to = Math.min(page * pageSize, total);
  const go = (p: number) => onPageChange(Math.min(pages, Math.max(1, p)));

  return (
    <nav className={styles.paginator} aria-label="Paginación">
      <div className={styles.group}>
        <IconButton icon="page-first" label="Primera página" onClick={() => go(1)} />
        <IconButton icon="page-prev" label="Página anterior" tone="tonal" onClick={() => go(page - 1)} />
      </div>
      <p className={styles.label} aria-live="polite">{`${from}-${to} de ${total}`}</p>
      <div className={styles.group}>
        <IconButton icon="page-next" label="Página siguiente" tone="tonal" onClick={() => go(page + 1)} />
        <IconButton icon="page-last" label="Última página" onClick={() => go(pages)} />
      </div>
    </nav>
  );
}
