import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DescargasComponent } from './descargas/descargas.component';
import { ContactoUserComponent } from './contacto-user/contacto-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DescargasComponent,
    ContactoUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
