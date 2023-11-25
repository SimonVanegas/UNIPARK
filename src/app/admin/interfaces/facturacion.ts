export interface Facturacion {
  id_factura?: number;
  id_reserva: number;
  id_solicitud_lavado?: number;
  fecha: string;
  valor_total?: number;
  id_cliente: number;
}
