import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FilmsListModule } from './films-list/films-list.module';

import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FilmsListModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    DetailsComponent
  ]
})
export class FilmCatalogModule { }
