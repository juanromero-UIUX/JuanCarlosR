import type { ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from './Icon';
import styles from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** DS: solo un icono a la vez. */
  leftIcon?: IconName;
};

export function Button({ leftIcon, children, className, type = 'button', ...rest }: ButtonProps) {
  return (
    <button type={type} className={[styles.button, className].filter(Boolean).join(' ')} {...rest}>
      {leftIcon && <Icon name={leftIcon} size={20} />}
      {children}
    </button>
  );
}
