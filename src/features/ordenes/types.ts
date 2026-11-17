import type { StatusTagTone } from '../../components/ds';

export type FiltroOrdenes = 'todas' | 'listos-para-enviar' | 'parcialmente-enviados' | 'en-devolucion';

export type Orden = {
  id: string;
  fecha: string;
  /** Texto bajo la fecha, p. ej. "Nueva orden" / "Orden existente". */
  etiquetaFecha?: string;
  /** Fila resaltada (variante "nuevo" de Component 158). */
  nueva?: boolean;
  cliente: string;
  tipos: string[];
  canal: string;
  estado: { label: string; tono: Exclude<StatusTagTone, 'neutral'> };
  /** 0 = sin pendientes (ícono check). */
  accionesPendientes: number;
  total: number;
};
