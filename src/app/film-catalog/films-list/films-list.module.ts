import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../../shared/shared.module';

import { FilmsListComponent } from './films-list.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { ActorItemComponent } from './actor-item/actor-item.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
       // чомусь окремо прийшосль вставляти цей модуль, хоча інші всі Mat-модулі в shared
    MatProgressSpinnerModule
  ],
  declarations: [
    FilmsListComponent,
    FilmItemComponent,
    ActorItemComponent,
    SearchComponent

  ],
  exports: [
    FilmsListComponent
  ]
})
export class FilmsListModule { }
