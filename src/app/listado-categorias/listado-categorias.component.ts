import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PeliculaService } from '../servicios/pelicula.service';

@Component({
  selector: 'app-listado-categorias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listado-categorias.component.html',
  styleUrl: './listado-categorias.component.css',
})
export class ListadoCategoriasComponent implements OnInit {
  categorias: any[] = [
    { categoria: 'Animacion'},
    {categoria: "Drama"},
    {categoria: "Accion"},
    { categoria: "Comedia"}  
  ];

  constructor(
    private peliculaService: PeliculaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.peliculaService.obtenerCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  verPeliculas(categoria: string) {
    this.router.navigate(['/peliculas', categoria]);
  }
}
