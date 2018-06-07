import { Component, OnInit } from '@angular/core';
import { FilmService, Film } from '../film.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  countElement = 0;
  films: Film[];
  filmFiltered: Film[];

  addFilmObj(filmObj) {
    console.log(filmObj, 'film from FilmLists');
    this.filmFiltered = this.films.filter(film => film.isFavorite);
    console.log(this.filmFiltered, 'newArray - filmFiltered');

    this.countElement = this.filmFiltered.length;
    console.log(this.filmFiltered.length, 'filmFiltered.length');

  }

  // варіант сортування з виводом пунктів меню через *ngFor, як і у оф доке Material
  // tslint:disable-next-line:member-ordering
  states = [
    { value: 'ASC', choice: 'от А до Я' },
    { value: 'DESC', choice: 'от Я до А' }
  ];
  // compareFunc -передається як параметр в метод sort()для порівняння елементів, в даному випадку по полю
  // обєкта масива - name
  compareFunc(current, next) {
    const x: any = current.name.toLowerCase();
    const y: any = next.name.toLowerCase();
    return x > y ? 1 : -1;
  }

  mySort(films, value) {
    if (value === 'ASC') {
      return films.sort(this.compareFunc);
    }
    return films.sort(this.compareFunc).reverse();
  }
  // варіант з  прописанням кожного пункта меню окремим тегом <mat-option>
  //  mySort(films) {
  //   return this.films.sort((current, next) => {
  //      const x: any = current.name.toLowerCase();
  //      const y: any = next.name.toLowerCase();
  //      return x > y ? 1 : -1;
  //   });
  // }

  // mySortReverse(films) {
  //    return this.films = this.mySort(films).reverse();
  // }
  constructor(private filmsService: FilmService) { }

  ngOnInit() {
    this.films = this.filmsService.getFilms();
  }

}
