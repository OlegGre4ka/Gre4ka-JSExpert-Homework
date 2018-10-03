import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  favorite = false;
  bookmark = false;
  tooltipFavorite = 'Додати у Вибране';
  tooltipBookmark = 'Додати в Закладки';
  // tslint:disable-next-line:no-input-rename
  @Input('filmItem') film;
  @Output() updateCounter = new EventEmitter<any>();

  addColorFavorite() {
  this.favorite  ? this.favorite = false : this.favorite = true ;
  this.tooltipFavorite === 'Додати у Вибране' ?  this.tooltipFavorite = 'Забрати з Вибраного' : this.tooltipFavorite = 'Додати у Вибране';
//  верхній запис ідентичний слідуючому
//  if (this.tooltipFavorite === 'Додати у Вибране') {
//   this.tooltipFavorite = 'Забрати з Вибраного';
// } else  if (this.tooltipFavorite === 'Забрати з Вибраного') {
//    this.tooltipFavorite = 'Додати у Вибране';
// }
// tslint:disable-next-line:max-line-length
if ( this.favorite === true) {localStorage.setItem(this.film.id + 'favorite', this.film.title); } else {localStorage.removeItem(this.film.id + 'favorite'); }
  }

  addColorBookmark() {
    this.bookmark ? this.bookmark = false : this.bookmark = true;
  // tslint:disable-next-line:max-line-length
  this.tooltipBookmark === 'Додати в Закладки' ?  this.tooltipBookmark = 'Забрати з Закладок' : this.tooltipBookmark = 'Додати в Закладки';
  // tslint:disable-next-line:max-line-length
  if ( this.bookmark === true) {localStorage.setItem(this.film.id + 'bookmark', this.film.title); } else {localStorage.removeItem(this.film.id + 'bookmark'); }

  }
  // filmId;
  addToFavorites(film) {
    this.film.isFavorite = !this.film.isFavorite;
    this.updateCounter.emit(film);
    console.log(film, 'filmObj from FilmItem');
  }
  constructor() { }

  ngOnInit() {
  }
}
