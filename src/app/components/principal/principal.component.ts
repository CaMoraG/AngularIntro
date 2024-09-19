import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  data = "Data 2";
  pipols = [ {
                nombre: "Pablo",
                apellido: "Márquez"
              },
              {
                nombre: "María",
                apellido: "Pacheco"
              },
              {
                nombre: "Francisco",
                apellido: "Márquez"
              },
              {
                nombre: "Miguel",
                apellido: "Márquez"
              },
 ];
}
