import { Component } from '@angular/core';
import { ListadoCategoriasComponent } from "./listado-categorias/listado-categorias.component";
import { ListadoPeliculasComponent } from "./listado-peliculas/listado-peliculas.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadoCategoriasComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoCatalogoIvanLopez';
}
