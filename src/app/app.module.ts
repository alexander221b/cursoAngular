import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//nuevas funcionalidad para formularios para usar ngmodel. Doble enlace de datos
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Importo mi componente HelloWorld
import  {HelloWorld} from './miprimercomponente/primer.component';
import { UserComponent } from './user/user.component';


//Módulo principal de Angular
@NgModule({
  declarations: [
    AppComponent,
    //Agrego mi componente
    HelloWorld,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
