import { NgModule } from '@angular/core';

import { BackgroundComponent } from './components/background/background.component';
import { PageLoginComponent } from './page/page.component';
import { NavComponent } from './components/nav/nav.component';
import { LogComponent } from './components/log/log.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    BackgroundComponent,
    PageLoginComponent,
    NavComponent,
    LogComponent
  ],
  imports: [
    RouterLink
  ],
  exports: [
    PageLoginComponent
  ],
  providers: [],
})
export class LoginPage { }
