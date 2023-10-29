import { Component } from '@angular/core';
import { MenuItems } from '../../interfaces/menu-items';

@Component({
  selector: 'app-nav-lavador',
  templateUrl: './navLavador.component.html',
  styleUrls: ['./navLavador.component.css']
})
export class NavAdminComponent {
  menuItems: MenuItems[] = [
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
