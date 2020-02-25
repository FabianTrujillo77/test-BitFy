import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  constructor() {
    console.log('perfil-usuario componente iniciado');
   }

  ngOnInit(): void {
  }

}
