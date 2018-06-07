import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilmsListModule } from './films-list/films-list.module';

import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FilmsListModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
  ]
})
export class FilmCatalogModule { }
