import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmItemComponent } from './film-item/film-item.component';
import { FilmsListComponent } from './films-list.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { SeachComponent } from '../seach/seach.component';


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
    // SeachComponent
  ],
  exports: [
    FilmsListComponent
  ]
})
export class FilmsListModule { }
