import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor() {
    console.log('componente bienvenido iniciado');
   }

  ngOnInit(): void {
  }

}
