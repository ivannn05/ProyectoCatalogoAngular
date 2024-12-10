import { Component, inject, OnInit } from '@angular/core';
import { PeliculaService } from '../servicios/pelicula.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { Pelicula } from '../Modelos/pelicula';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
  categoria: string = ''; // Para almacenar el valor de la categoría
  peliculas: any[] = [];  // Lista de películas filtradas
 

 httpService: PeliculaService = inject(PeliculaService);
 posts: Pelicula[] = [];

  constructor(private route: ActivatedRoute) {this.getPelis,this.ngOnInit}

  ngOnInit(): void {
    // Leer todas las películas
    console.log('ngOnInit()');
    
    // Leer el parámetro dinámico ':categoria' desde la URL
    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria') || '';
    
      this.getPelis()
      // Filtrar contenido con base en la categoría
      
    });
    //console.log('despues del subscribe');
    
  }
  getPelis() {
    this.httpService.obtenerCategorias().subscribe(resp => {
     
      this.posts = resp;
      this.filtrarPeliculas();
    } )
  }

  filtrarPeliculas(): void {
   
  
    // Filtrar las películas según la categoría seleccionada
    this.peliculas = this.posts.filter(pelicula => pelicula.categoria.toLowerCase() === this.categoria.toLowerCase());
   
  }
  
}
