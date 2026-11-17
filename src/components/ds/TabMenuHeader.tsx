import { IconButton } from './IconButton';
import styles from './TabMenuHeader.module.css';

type TabMenuHeaderProps = {
  tabs: { id: string; label: string }[];
  activeId: string;
  onAdd?: () => void;
};

export function TabMenuHeader({ tabs, activeId, onAdd }: TabMenuHeaderProps) {
  return (
    <footer className={styles.bar}>
      {tabs.map((t) => (
        <div key={t.id} className={styles.tab} aria-current={t.id === activeId ? 'page' : undefined}>
          {t.label}
        </div>
      ))}
      <div className={styles.add}>
        <IconButton icon="add" label="Nueva ventana" size="sm" onClick={onAdd} />
      </div>
    </footer>
  );
}
