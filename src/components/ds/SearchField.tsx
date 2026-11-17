import { useId, type FormEvent } from 'react';
import { Icon } from './Icon';
import styles from './SearchField.module.css';

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  label: string;
  /** 'header' = Header Op · 'inside-component' = dentro de cards/tablas */
  variant?: 'header' | 'inside-component';
  className?: string;
};

export function SearchField({ value, onChange, onSubmit, placeholder = 'Buscar', label, variant = 'header', className }: SearchFieldProps) {
  const id = useId();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };
  const cls = [styles.search, variant === 'inside-component' && styles.inside, className].filter(Boolean).join(' ');
  return (
    <form role="search" className={cls} onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={id}>{label}</label>
      <input
        id={id}
        className={styles.input}
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className={styles.button} type="submit" aria-label="Buscar">
        <Icon name="search" />
      </button>
    </form>
  );
}
