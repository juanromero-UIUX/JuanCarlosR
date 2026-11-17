import { useState } from 'react';
import { Icon } from './Icon';
import { SearchField } from './SearchField';
import styles from './Header.module.css';

type HeaderProps = {
  /** Etiqueta del Role Container junto al logo. */
  role?: string;
  userInitials: string;
  cartCount?: number;
  /** Punto verde de estado en el botón de sucursal. */
  branchOnline?: boolean;
  onMenu?: () => void;
  onSearch?: (query: string) => void;
  onNotifications?: () => void;
  onBranch?: () => void;
  onSettings?: () => void;
  onCart?: () => void;
  onProfile?: () => void;
};

export function Header({
  role = 'Operativo',
  userInitials,
  cartCount = 0,
  branchOnline = true,
  onMenu,
  onSearch,
  onNotifications,
  onBranch,
  onSettings,
  onCart,
  onProfile,
}: HeaderProps) {
  const [query, setQuery] = useState('');
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <button type="button" className={`${styles.profilebase} ${styles.ghost}`} aria-label="Abrir menú" onClick={onMenu}>
          <Icon name="hamburger" />
        </button>
        <div className={styles.logo}>
          <Icon name="logo-ataskate" width={130} height={24} label="ataskate" />
          <span className={styles.role}>{role}</span>
        </div>
      </div>

      <SearchField className={styles.search} label="Buscar" value={query} onChange={setQuery} onSubmit={onSearch} />

      <nav className={styles.ctas} aria-label="Acciones">
        <button type="button" className={styles.profilebase} aria-label="Notificaciones" onClick={onNotifications}>
          <Icon name="notification" />
        </button>
        <button type="button" className={styles.profilebase} aria-label="Sucursal" onClick={onBranch}>
          <Icon name="pos-terminal" />
          {branchOnline && <Icon name="status-dot" size={12} className={styles.status} />}
        </button>
        <button type="button" className={styles.profilebase} aria-label="Configuración" onClick={onSettings}>
          <Icon name="settings" />
        </button>
        <button type="button" className={styles.profilebase} aria-label="Carrito" onClick={onCart}>
          <Icon name="cart" />
          <span className={styles.count}>{cartCount}</span>
        </button>
        <button type="button" className={`${styles.profilebase} ${styles.perfil}`} aria-label="Perfil" onClick={onProfile}>
          <span className={styles.avatar}>{userInitials}</span>
          <Icon name="sync" />
        </button>
      </nav>
    </header>
  );
}
