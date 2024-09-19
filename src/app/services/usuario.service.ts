import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { HttpClient } from '@angular/common/http';
import { Arrendador } from '../models/Arrendador';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/api/arrendador';

  constructor(private http: HttpClient) { }

  getUsuariosInterno(): Observable< Usuario[] > {
    return of([
      new Usuario(1, "Pablo", "Márquez", ""),
      new Usuario(2, "María", "Pacheco", ""),
      new Usuario(3, "Francisco", "Márquez", ""),
      new Usuario(4, "Miguel", "Márquez", ""),
    ]);
  }

  getArrendadores(): Observable< Arrendador[] > {
    return this.http.get<Arrendador[]>(this.apiUrl);
  }
}
