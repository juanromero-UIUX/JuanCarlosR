import type { ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from './Icon';
import styles from './IconButton.module.css';

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  icon: IconName;
  label: string;
  tone?: 'default' | 'tonal';
  size?: 'md' | 'sm';
};

export function IconButton({ icon, label, tone = 'default', size = 'md', className, type = 'button', ...rest }: IconButtonProps) {
  const cls = [styles.iconButton, tone === 'tonal' && styles.tonal, size === 'sm' && styles.sm, className]
    .filter(Boolean)
    .join(' ');
  return (
    <button type={type} className={cls} aria-label={label} {...rest}>
      <Icon name={icon} size={20} />
    </button>
  );
}
