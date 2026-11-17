import styles from './ChoiceChip.module.css';

export type ChoiceChipOption<T extends string> = { id: T; label: string; count?: number };

type ChoiceChipsProps<T extends string> = {
  options: ChoiceChipOption<T>[];
  value: T;
  onChange: (id: T) => void;
  label: string;
};

export function ChoiceChips<T extends string>({ options, value, onChange, label }: ChoiceChipsProps<T>) {
  return (
    <div className={styles.group} role="group" aria-label={label}>
      {options.map((o) => {
        const selected = o.id === value;
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={selected}
            className={[styles.chip, selected && styles.selected].filter(Boolean).join(' ')}
            onClick={() => onChange(o.id)}
          >
            {o.count == null ? o.label : `${o.label} (${o.count})`}
          </button>
        );
      })}
    </div>
  );
}
