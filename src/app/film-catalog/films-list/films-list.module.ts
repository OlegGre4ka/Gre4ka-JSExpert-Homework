import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmItemComponent } from './film-item/film-item.component';
import { FilmsListComponent } from './films-list.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    FilmsListComponent,
    FilmItemComponent
  ],
  exports: [
    FilmsListComponent
  ]
})
export class FilmsListModule { }
