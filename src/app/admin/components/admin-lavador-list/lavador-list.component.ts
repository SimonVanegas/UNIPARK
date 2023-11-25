import { Component } from '@angular/core';
import { Clients } from '../../interfaces/clients';
import { Lavadero } from '../../interfaces/lavadero';
import { ApiLavaderoService } from 'src/app/services/api-lavadero.service';
import { ApiTipoLavadoService } from 'src/app/services/api-tipo-lavado.service';
import { TypeLavado } from '../../interfaces/typeLavado';

@Component({
  selector: 'app-list-lavador',
  templateUrl: './lavador-list.component.html',
  styleUrls: ['./lavador-list.component.css']
})
export class LavadorListComponent {
  lavados:Lavadero[] = [];
  tipoLavados: TypeLavado[] = [];

  constructor(private lavadero : ApiLavaderoService, private tipoLavadero : ApiTipoLavadoService) {
    this.lavadero.getLavaderos().subscribe(data => {
      this.lavados=data;
    })
    this.tipoLavadero.getTiposLavado().subscribe(data => this.tipoLavados=data)

  }

  setTipoLavado(id:number){
    const tipoLavado = this.tipoLavados.find((item) => item.id_tipo === id);
    return tipoLavado ? tipoLavado.descripcion_lavado : 'Desconocido';
  }

  aceptarPersona(id: number) {
    // Lógica para aceptar persona con el ID proporcionado
    console.log(`Persona aceptada con ID: ${id}`);
  }
}
