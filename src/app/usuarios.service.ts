import { Injectable } from '@angular/core';
import { dadosUsuarios } from'./interfaceUsuarios'

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {}

    private urlUsuarios= 'https://jsonplaceholder.typicode.com/users'

    msUsuarios(): Observable<dadosUsuarios[]>{
      return this.http.get<dadosUsuarios[]>(this.urlUsuarios)
    }
  }