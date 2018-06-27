import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './film-catalog/main/main.component';
import { FilmsListComponent } from './film-catalog/films-list/films-list.component';
import { ActorListComponent } from './film-catalog/actor-list/actor-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
  { path: 'films-list', component: FilmsListComponent},
  { path: 'actor-list', component: ActorListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
