const icons = import.meta.glob<string>('../../assets/icons/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const byName: Record<string, string> = Object.fromEntries(
  Object.entries(icons).map(([path, url]) => [path.split('/').pop()!.replace('.svg', ''), url]),
);

export type IconName =
  | 'hamburger' | 'search' | 'notification' | 'pos-terminal' | 'status-dot' | 'settings' | 'cart' | 'sync'
  | 'export' | 'add' | 'check' | 'filter' | 'arrow-forward'
  | 'pagination-first' | 'pagination-prev' | 'pagination-next' | 'pagination-last' | 'arrow-down-sm'
  | 'kpi-nuevos-pedidos' | 'kpi-por-enviar' | 'kpi-devoluciones' | 'kpi-cancelaciones' | 'kpi-envios-por-vencer'
  | 'logo-ataskate';

type IconProps = {
  name: IconName;
  size?: 12 | 16 | 20 | 24;
  /** Solo para assets no cuadrados (p. ej. logo 130×24). */
  width?: number;
  height?: number;
  /** Texto alternativo. Vacío = decorativo. */
  label?: string;
  className?: string;
};

/** Íconos SVG exportados del Design System en Figma. */
export function Icon({ name, size = 24, width, height, label = '', className }: IconProps) {
  return <img src={byName[name]} width={width ?? size} height={height ?? size} alt={label} className={className} />;
}
