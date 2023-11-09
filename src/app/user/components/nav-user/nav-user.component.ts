import { Component } from '@angular/core';
import { MenuItems } from '../../interfaces/menu-items';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent {

  constructor(private router: Router){}

  menuItems: MenuItems[] = [
    {
      title: 'Agregar Vehiculos',
      iconPath: 'assets/imagenes/iconCar.svg',
      path:'/user/add-vehicle'
    },
    {
      title: 'Solicitud Parqueadero',
      iconPath: 'assets/imagenes/iconJoin.svg',
      path:'/user/request-parking'
    },
    {
      title: 'Solicitud Lavadero',
      iconPath: 'assets/imagenes/iconWash.svg',
      path:'/user/request-lavadero'
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


}
