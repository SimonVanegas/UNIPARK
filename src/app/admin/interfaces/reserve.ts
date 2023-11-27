export interface Reserve {
  id_reserva?: number;
  fecha_reserva: string;
  placa_vehiculo: string;
  id_celda: number | null;
  fecha_ingreso?: string;
  fecha_salida?: string | null;
}
