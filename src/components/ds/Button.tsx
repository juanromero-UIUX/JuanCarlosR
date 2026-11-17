import type { ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from './Icon';
import styles from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** DS: solo un icono a la vez. */
  leftIcon?: IconName;
  size?: 'large' | 'medium';
};

export function Button({ leftIcon, size = 'large', children, className, type = 'button', ...rest }: ButtonProps) {
  return (
    <button type={type} className={[styles.button, styles[size], className].filter(Boolean).join(' ')} {...rest}>
      {leftIcon && <Icon name={leftIcon} size={20} />}
      {children}
    </button>
  );
}
