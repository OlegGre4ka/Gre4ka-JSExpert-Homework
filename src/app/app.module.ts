import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { ClarityModule } from '@clr/angular';
import { MainComponent } from './main/main.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmItemComponent } from './films-list/film-item/film-item.component';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { ActorItemComponent } from './actors-list/actor-item/actor-item.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilmsListComponent,
    FilmItemComponent,
    ActorsListComponent,
    ActorItemComponent,

    SearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ClarityModule ,

    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

