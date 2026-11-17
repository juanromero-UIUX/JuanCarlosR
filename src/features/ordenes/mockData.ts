/**
 * Datos de ejemplo copiados literalmente del frame de Figma
 * "Ordenes y operaciones nuevo" (3396:2014). Reemplazar por la API.
 */
import type { ChoiceChipOption, Kpi } from '../../components/ds';
import type { FiltroOrdenes, Orden } from './types';

export const kpis: Kpi[] = [
  { id: 'nuevos-pedidos', label: 'Nuevos pedidos', value: 4, icon: 'kpi-nuevos-pedidos' },
  { id: 'por-enviar', label: 'Por enviar', value: 5, icon: 'kpi-por-enviar' },
  { id: 'devoluciones', label: 'Devoluciones', value: 2, icon: 'kpi-devoluciones' },
  { id: 'cancelaciones', label: 'Cancelaciones', value: 2, icon: 'kpi-cancelaciones' },
  { id: 'envios-por-vencer', label: 'Envios por vencer', value: 3, icon: 'kpi-envios-por-vencer' },
];

export const filtros: ChoiceChipOption<FiltroOrdenes>[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'listos-para-enviar', label: 'Listos para enviar', count: 3 },
  { id: 'parcialmente-enviados', label: 'Parcialmente enviados', count: 0 },
  { id: 'en-devolucion', label: 'En devolución', count: 1 },
];

export const ordenes: Orden[] = [
  { id: '9K2-371P', fecha: '02/01/2026', etiquetaFecha: 'Nueva orden', nueva: true, cliente: 'Ana Gutiérrez', tipos: ['Compra', '+2'], canal: 'En sucursal', estado: { label: 'Entregado', tono: 'success' }, accionesPendientes: 1, total: 4350 },
  { id: '5L8-943M', fecha: '02/01/2026', etiquetaFecha: 'Orden existente', nueva: true, cliente: 'Roberto Méndez', tipos: ['Empeño', '+4'], canal: 'En línea', estado: { label: 'Pendiente', tono: 'warning' }, accionesPendientes: 3, total: 5320 },
  { id: '1R4-627T', fecha: '04/12/2026', cliente: 'Laura Sánchez', tipos: ['Apartado', '+3'], canal: 'En línea', estado: { label: 'Listo para entregar', tono: 'success' }, accionesPendientes: 0, total: 15890 },
  { id: '7D5-218F', fecha: '04/12/2026', cliente: 'Miguel Herrera', tipos: ['Refrendo', '+1'], canal: 'En sucursal', estado: { label: 'Entregado', tono: 'success' }, accionesPendientes: 0, total: 3200 },
  { id: '3B6-754W', fecha: '04/12/2026', cliente: 'Patricia Flores', tipos: ['Compra', '+1'], canal: 'En línea', estado: { label: 'En proceso', tono: 'success' }, accionesPendientes: 0, total: 9750 },
  { id: '8J1-489N', fecha: '10/09/2026', cliente: 'Fernando Díaz', tipos: ['Apartado'], canal: 'En sucursal', estado: { label: 'Pendiente', tono: 'success' }, accionesPendientes: 0, total: 7100 },
  { id: '2H9-136X', fecha: '28/06/2026', cliente: 'Isabel Ramírez', tipos: ['Empeño'], canal: 'En línea', estado: { label: 'Entregado', tono: 'success' }, accionesPendientes: 0, total: 22500 },
  { id: '6C3-852Y', fecha: '15/03/2026', cliente: 'Diego Castillo', tipos: ['Refrendo'], canal: 'En sucursal', estado: { label: 'Listo para entregar', tono: 'success' }, accionesPendientes: 0, total: 4680 },
];

/** El diseño muestra "1-8 de 32"; el mock solo tiene 8 registros. */
export const totalRegistros = 32;
export const porPagina = 8;
