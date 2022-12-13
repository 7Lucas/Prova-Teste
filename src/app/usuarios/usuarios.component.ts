import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { dadosUsuarios } from '../interfaceUsuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private getservice: UsuariosService) { }

  us: dadosUsuarios[]=[];

  ngOnInit(): void {
    this.getservice.msUsuarios().subscribe(usuario => this.us = usuario)
  }
  
}