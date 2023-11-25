import { Component } from '@angular/core';
import { MenuItems } from '../../interfaces/menu-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './navAdmin.component.html',
  styleUrls: ['./navAdmin.component.css'],
})
export class NavAdminComponent {
  constructor(private router: Router) {}

  menuItems: MenuItems[] = [
    {
      title: 'Administrar Clientes',
      iconPath: 'assets/imagenes/iconUser.svg',
      subOptions: ['Crear Cliente', 'Buscar Cliente'],
    },
    {
      title: 'Administrar Empleados',
      iconPath: 'assets/imagenes/workers.svg',
      subOptions: ['Crear Empleado', 'Buscar Empleado'],
    },
    {
      title: 'Agregar Vehiculos',
      iconPath: 'assets/imagenes/iconCar.svg',
      path: '/admin/add-vehicle',
    },
    {
      title: 'Solicitud Reserva',
      iconPath: 'assets/imagenes/in.svg',
      path: '/admin/request-parking',
    },
    {
      title: 'Entrada Parqueadero',
      iconPath: 'assets/imagenes/iconJoin.svg',
      path: '/admin/in-parking',
    },
    {
      title: 'Salida Parqueadero',
      iconPath: 'assets/imagenes/iconExit.svg',
      path: '/admin/out-parking',
    },
    {
      title: 'Solicitar Servicio Lavado',
      iconPath: 'assets/imagenes/iconWash.svg',
      path: '/admin/request-lavadero',
    },
    {
      title: 'Lavador',
      iconPath: 'assets/imagenes/iconClean.svg',
      path: '/admin/lavador',
    },
    {
      title: 'Salir',
      iconPath: 'assets/imagenes/personExit.svg',
      path: '/home',
    },
  ];

  showSubOptions: boolean[] = Array(this.menuItems.length).fill(false);

  toggleSubOptions(index: number) {
    console.log(this.menuItems[index]);
    if (this.menuItems[index].subOptions) {
      this.showSubOptions[index] = !this.showSubOptions[index];
    }
  }

  ejecutarAccion(subOpcion: string) {
    switch (subOpcion) {
      case 'Crear Cliente':
        this.router.navigate(['/admin/create-user']);
        break;
      case 'Buscar Cliente':
        this.router.navigate(['/admin/edit-user']);
        break;
      case 'Crear Empleado':
        this.router.navigate(['/admin/create-employee']);
        break;
      case 'Buscar Empleado':
        this.router.navigate(['/admin/edit-employee']);
        break;
      // Agregar más casos según las subopciones que tengas
    }
  }
}
