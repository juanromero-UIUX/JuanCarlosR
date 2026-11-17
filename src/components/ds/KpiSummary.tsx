import { Icon, type IconName } from './Icon';
import styles from './KpiSummary.module.css';

export type Kpi = { id: string; label: string; value: number | string; icon: IconName };

export function KpiSummary({ items, label }: { items: Kpi[]; label: string }) {
  return (
    <section className={styles.card} aria-label={label}>
      {items.map((k) => (
        <div key={k.id} className={styles.item}>
          <div className={styles.icon}><Icon name={k.icon} /></div>
          <div className={styles.body}>
            <p className={styles.label}>{k.label}</p>
            <p className={styles.value}>{k.value}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
