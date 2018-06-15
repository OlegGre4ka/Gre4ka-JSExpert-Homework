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

  filmId;

  addToFavorites(film) {
    this.film.isFavorite = !this.film.isFavorite;
    this.updateCounter.emit(film);
    console.log(film, 'filmObj from FilmItem');
  }
  constructor() { }

  ngOnInit() { }
}
