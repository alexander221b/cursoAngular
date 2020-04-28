import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'myfirstapp';

  //Utilizando arreglos
  users = ['Ryan', 'Joe', 'Cameron'];

  activated: boolean = true;

  nombre: string = 'Ryan Ray';

  age: number;

  adress: {
    street: string;
    city: string;
  }

  hobbies: string[];

  //El constructor inicializa los valores de una clase
  constructor(){
    this.age = 30;
    this.adress = {
      street : 'M3 C3 Bello Horizonte',
      city : 'Pereira'
    }

    this.hobbies = ['Swimming','Chess','Videogames'];
  }

  sayHello(){
    alert('Hola mundo');
  }

  deleteUser(user){
    for(let i=0; i<this.users.length; i++){
      if(this.users[i] == user){
        //quitar usuario en el indice i. y cuantos? 1
       this.users.splice(i, 1);
      }
    }
  }

  addUser(newUser){
    this.users.push(newUser.value);
    //Limpiar el formulario
    newUser.value = '';
    newUser.focus();
    return false;
  }


}
