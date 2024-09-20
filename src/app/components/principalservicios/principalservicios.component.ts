import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { Arrendador } from '../../models/Arrendador';

@Component({
  selector: 'app-principalservicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principalservicios.component.html',
  styleUrl: './principalservicios.component.css'
})
export class PrincipalserviciosComponent {
  datosModelosService: Usuario[] = [];
  datosModelosServiceArrendadores: Arrendador[] = [];

  constructor(
    private usuariosService: UsuarioService,
    
  ){
  }

  ngOnInit(): void {
    this.cargarPipolService();
  }

  cargarPipolService(){
    // Interno
    // this.usuariosService.getUsuariosInterno().subscribe( response =>{
    //   this.datosModelosService  = response;
    // } );
    //this.usuariosService.getArrendadores().subscribe( response =>{
      //this.datosModelosServiceArrendadores  = response;
    //});
    this.usuariosService.getArrendadoresExternoAxios().then( response =>{
      this.datosModelosServiceArrendadores  = response;
    });
  }
}
