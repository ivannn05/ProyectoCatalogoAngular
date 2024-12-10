import { Component, inject } from '@angular/core';
import { PeliculaService } from '../servicios/pelicula.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aniadir-peli',
  standalone: true,
  imports: [ FormsModule,RouterLink ],
  templateUrl: './aniadir-peli.component.html',
  styleUrl: './aniadir-peli.component.css'
})
export class AniadirPeliComponent {

  nuevaPelicula = { id: 0, nombre: '', categoria: '' };
  httpService: PeliculaService = inject(PeliculaService);

  agregarPelicula(): void {
    if (this.nuevaPelicula.nombre && this.nuevaPelicula.categoria) {
      // Generar un ID único para la nueva película (esto lo puede gestionar el backend también)
      this.httpService.obtenerCategorias().subscribe(peliculas => {
        const nuevoId = peliculas.length > 0 ? Math.max(...peliculas.map(p => p.id)) + 1 : 1;
        this.nuevaPelicula.id = nuevoId;

        // Enviar la nueva película al servidor
        this.httpService.agregarPelicula(this.nuevaPelicula).subscribe({
          next: (pelicula) => {
            console.log('Película añadida con éxito:', pelicula);
            // Limpiar el formulario
            this.nuevaPelicula = { id: 0, nombre: '', categoria: '' };
          },
          error: (err) => {
            console.error('Error al añadir la película:', err);
          }
        });
      });
    }
  }
}
