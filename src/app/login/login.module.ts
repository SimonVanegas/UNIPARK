import { NgModule } from '@angular/core';

import { BackgroundComponent } from './components/background/background.component';
import { PageComponent } from './page/page.component';
import { NavComponent } from './components/nav/nav.component';
import { LogComponent } from './components/log/log.component';

@NgModule({
  declarations: [
    BackgroundComponent,
    PageComponent,
    NavComponent,
    LogComponent
  ],
  imports: [],
  exports: [
    PageComponent
  ],
  providers: [],
})
export class LoginPage { }
