import type { ReactNode } from 'react';
import styles from './StatusTag.module.css';

export type StatusTagTone = 'neutral' | 'success' | 'warning';

export function StatusTag({ tone = 'neutral', children }: { tone?: StatusTagTone; children: ReactNode }) {
  return <span className={`${styles.tag} ${styles[tone]}`}>{children}</span>;
}
