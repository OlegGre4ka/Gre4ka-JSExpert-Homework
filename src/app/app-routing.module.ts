import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { FilmDetailedComponent } from './films-list/film-detailed/film-detailed.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
  {path: 'films-list/:id' , component: FilmDetailedComponent},
  { path: 'films-list', component: FilmsListComponent},
  { path: 'actors-list', component: ActorsListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
