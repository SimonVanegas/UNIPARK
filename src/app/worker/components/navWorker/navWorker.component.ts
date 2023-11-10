import { Component } from '@angular/core';
import { MenuItems } from '../../interfaces/menu-items';
import {Router } from '@angular/router';

@Component({
  selector: 'app-nav-worker',
  templateUrl: './navWorker.component.html',
  styleUrls: ['./navWorker.component.css']
})
export class NavWorkerComponent {
  constructor(private router: Router){}

  menuItems: MenuItems[] = [
    {
      title: 'Administrar Clientes',
      iconPath: 'assets/imagenes/iconUser.svg',
      subOptions: ['Crear Cliente', 'Buscar Cliente']
    },
    {
      title: 'Agregar Vehiculos',
      iconPath: 'assets/imagenes/iconCar.svg',
      path:'/worker/add-vehicle'
    },
    {
      title: 'Solicitud Parqueadero',
      iconPath: 'assets/imagenes/in.svg',
      path:'/admin/request-parking'
    },
    {
      title: 'Entradas Parqueadero',
      iconPath: 'assets/imagenes/iconJoin.svg',
      path:'/admin/in-parking'
    },
    {
      title: 'Salidas Parqueadero',
      iconPath: 'assets/imagenes/iconExit.svg',
      path:'/worker/out-parking'
    },
    {
      title: 'Salir',
      iconPath: 'assets/imagenes/personExit.svg',
      path:'/home'
    }
  ];

  showSubOptions: boolean[] = Array(this.menuItems.length).fill(false);

  toggleSubOptions(index: number) {
    console.log(this.menuItems[index])
    if (this.menuItems[index].subOptions) {
      this.showSubOptions[index] = !this.showSubOptions[index];
    }
  }

  ejecutarAccion(subOpcion: string) {
    switch (subOpcion) {
      case 'Crear Cliente':
        this.router.navigate(['/worker/create-user'])
        break;
      case 'Buscar Cliente':
        this.router.navigate(['/worker/edit-user'])
        break;
      // Agregar más casos según las subopciones que tengas
    }
  }
}
