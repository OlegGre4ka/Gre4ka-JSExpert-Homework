import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmItemComponent } from './film-item/film-item.component';
import { FilmsListComponent } from './films-list.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
