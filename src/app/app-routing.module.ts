import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: DetalleComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }