import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  constructor() {
    console.log('formulario login iniciado');
   }

  ngOnInit(): void {
  }

}
