import { Component } from '@angular/core';
import { MenuItems } from '../../interfaces/menu-items';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './navAdmin.component.html',
  styleUrls: ['./navAdmin.component.css']
})
export class NavAdminComponent {
  menuItems: MenuItems[] = [
    {
      title: 'Administrar Clientes',
      iconPath: 'assets/imagenes/iconUser.svg',
      subOptions: ['Crear', 'Buscar']
    },
    {
      title: 'Administrar Empleados',
      iconPath: 'assets/imagenes/workers.svg',
      subOptions: ['Crear', 'Buscar']
    },
    {
      title: 'Vehiculos',
      iconPath: 'assets/imagenes/iconCar.svg'
    },
    {
      title: 'Salidas Parqueadero',
      iconPath: 'assets/imagenes/iconExit.svg'
    },
    {
      title: 'Solicitud Parqueadero',
      iconPath: 'assets/imagenes/iconJoin.svg'
    },
    {
      title: 'Solicitud Lavadero',
      iconPath: 'assets/imagenes/iconWash.svg'
    },
    {
      title: 'Lavador',
      iconPath: 'assets/imagenes/iconClean.svg'
    }
  ];

  showSubOptions: boolean[] = Array(this.menuItems.length).fill(false);

  toggleSubOptions(index: number) {
    if (this.menuItems[index].subOptions) {
      this.showSubOptions[index] = !this.showSubOptions[index];
    }
  }
}
