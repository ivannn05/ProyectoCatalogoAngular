import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../Modelos/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private httpClient = inject(HttpClient);

  pelis: Pelicula[] = [];

  constructor() {}

  obtenerCategorias(): Observable<Pelicula[]> {
    return this.httpClient.request<Pelicula[]>('GET', 'http://localhost:3000/peliculas', {
      responseType: 'json'
    });
  }

  agregarPelicula(nuevaPelicula: Pelicula): Observable<Pelicula> {
    return this.httpClient.post<Pelicula>('http://localhost:3000/peliculas', nuevaPelicula, {
      responseType: 'json'
    });
  }
}
