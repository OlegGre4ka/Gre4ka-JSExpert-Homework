import { Component, OnInit } from '@angular/core';
import { FilmService, Film } from '../film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  countElement;
  films: Film[];
  displayedFilmsData: Film[];
  filmFiltered: Film[];
  inputName = '';
  isShowAlert;
  btn_title = 'Загрузить еще';
  firstArgSlice = 0;
  secondArgSlice = 6;
  isPressed = false;
  disabled = true;
  alertNoFilm() {
    this.isShowAlert = true;
    setTimeout(() => {
      this.isShowAlert = false;
    }, 4000);
  }

  displayDefault() {
    setTimeout(() => {
      this.displayedFilmsData = [...this.films];
    }, 4000);
  }
  toAllFilms() {
    this.displayedFilmsData = [...this.films];
  }
  searchFilm() {
    this.displayedFilmsData = this.films.filter(film => {
      // tslint:disable-next-line:no-unused-expression
      return film.name.toLowerCase().indexOf(this.inputName.toLowerCase().trim()) !== -1;
    });

    if (this.displayedFilmsData.length === 0) {
      this.alertNoFilm();
      this.displayDefault();
    }
    this.inputName = '';
  }

  // кнопка яка додає ще частину фільмів
  addYetFilms(films) {
    this.secondArgSlice += 3;
    // this.disabled = this.displayedFilmsData.length === 0 ? '!disabled' : 'disabled';
  }

  //  початкова кількість фільмів доданих у Вибране - з сервісу приходить як isFavorite = true
  startCounter() {
    this.filmFiltered = this.displayedFilmsData.filter(film => film.isFavorite);
    return this.countElement = this.filmFiltered.length;
  }

  // Приймаємо евент з дочірнього і по полю isfavorite = true фіксуємо кількість елементів у Вибраному
  addFilmObj(filmObj) {
    console.log(filmObj, 'film from FilmLists');
    this.filmFiltered = this.displayedFilmsData.filter(film => film.isFavorite);
    this.countElement = this.filmFiltered.length;
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

  mySort(displayedFilmsData, value) {
    if (value === 'ASC') {
      return displayedFilmsData.sort(this.compareFunc);
    }
    return displayedFilmsData.sort(this.compareFunc).reverse();
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

  constructor(private filmsService: FilmService, private router: Router) { }

  ngOnInit() {
    this.films = this.filmsService.getFilms();
    this.displayedFilmsData = [...this.films];
  }

}
