
//Importo una funcionalidad de Angular. La funcionalidad de crear un componente
import { Component }  from '@angular/core';

//Convierto la clase en un componente. 
@Component({
    //Nombre de la etiqueta
    selector: 'hello-world',
    //Código Html que va a mostrar al llamar la etiqueta
    templateUrl: './primer.component.html',
    //Código Css que se le agrega al componente
    styleUrls: ['./primer.component.css'] 
})
//export me permite utilizar el componente en otras partes
//La clase son los datos que puedo utilizar dentro del componente
export class HelloWorld{
  title = 'Título primer componente';
}

