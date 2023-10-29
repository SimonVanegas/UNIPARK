import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebPage } from './webpage/webpage.module';
import { LoginPage } from './login/login.module';
import { AdminPage } from './admin/admin.module';
import { lavadorPage } from './lavador/lavador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebPage,
    LoginPage,
    AdminPage,
    lavadorPage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
