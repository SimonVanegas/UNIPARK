export interface Lavado {
  id_solicitud: number;
  placa_vehiculo: string;
  fecha_solicitud: string;
  id_tipo_lavado?: number;
  tarifa?: number;
  id_empleado?: number;
  type?: string;
}
