import { Routes } from '@angular/router';
import { ListadoCategoriasComponent } from './listado-categorias/listado-categorias.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AniadirPeliComponent } from './aniadir-peli/aniadir-peli.component';

export const routes: Routes = [
    { path: '', component: BienvenidaComponent },
    { path: 'peliculas/:categoria', component: ListadoPeliculasComponent },
    { path: 'inicio',redirectTo:'',pathMatch:'full' },
    { path: 'aniadir', component: AniadirPeliComponent },
  ];
