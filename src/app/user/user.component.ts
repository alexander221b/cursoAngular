
//Importe el componente Input para pasar a un componente parámetros
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //El componente user tiene un input llamado nameUser
  @Input() nameUser;

  constructor() { }

  ngOnInit(): void {
  }

}
