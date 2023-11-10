import { NgModule } from '@angular/core';

import { BackgroundComponent } from './components/background/background.component';
import { PageLoginComponent } from './page/page.component';
import { NavComponent } from './components/nav/nav.component';
import { LogComponent } from './components/log/log.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BackgroundComponent,
    PageLoginComponent,
    NavComponent,
    LogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink
  ],
  exports: [
    PageLoginComponent
  ],
  providers: [],
})
export class LoginPage { }
