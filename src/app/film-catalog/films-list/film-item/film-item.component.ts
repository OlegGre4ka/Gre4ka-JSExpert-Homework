import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('filmItem') film;
  @Output() updateCounter = new EventEmitter<any>();
  @Output() reduceCounter = new EventEmitter<any>();

  filmId;
  isFavor;
  isPressed = false;

  addToFavorites(filmId) {
    this.film.isFavorite = !this.film.isFavorite;
    this.updateCounter.emit(filmId);
    this.isPressed = !this.isPressed;
    console.log(filmId, 'filmObj from FilmItem');


  }
  constructor() { }

  ngOnInit() {

  }

}
