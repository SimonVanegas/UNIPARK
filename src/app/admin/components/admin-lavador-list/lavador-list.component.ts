import { Component } from '@angular/core';
import { Clients } from '../../interfaces/clients';

@Component({
  selector: 'app-list-lavador',
  templateUrl: './lavador-list.component.html',
  styleUrls: ['./lavador-list.component.css']
})
export class LavadorListComponent {
  clients:Clients[] = [
    { id: 1, carId: 'ABC123', name: 'Pedro Escamoso', type: 'Completo', date: '2023-10-31' },
    { id: 1, carId: 'ABC123', name: 'Pedro Escamoso', type: 'Completo', date: '2023-10-31' },
    { id: 1, carId: 'ABC123', name: 'Pedro Escamoso', type: 'Completo', date: '2023-10-31' },
    { id: 1, carId: 'ABC123', name: 'Pedro Escamoso', type: 'Completo', date: '2023-10-31' },
    { id: 1, carId: 'ABC123', name: 'Pedro Escamoso', type: 'Completo', date: '2023-10-31' },
    { id: 1, carId: 'ABC123', name: 'Pedro Escamoso', type: 'Completo', date: '2023-10-31' },
    { id: 1, carId: 'ABC123', name: 'Pedro Escamoso', type: 'Completo', date: '2023-10-31' },
    { id: 1, carId: 'ABC123', name: 'Pedro Escamoso', type: 'Completo', date: '2023-10-31' },
    { id: 1, carId: 'ABC123', name: 'Pedro Escamoso', type: 'Completo', date: '2023-10-31' },
    { id: 1, carId: 'ABC123', name: 'Pedro Escamoso', type: 'Completo', date: '2023-10-31' },
    { id: 1, carId: 'ABC123', name: 'Pedro Escamoso', type: 'Completo', date: '2023-10-31' },
    { id: 1, carId: 'ABC123', name: 'Pedro Escamoso', type: 'Completo', date: '2023-10-31' },
  ];

  aceptarPersona(id: number) {
    // Lógica para aceptar persona con el ID proporcionado
    console.log(`Persona aceptada con ID: ${id}`);
  }
}
