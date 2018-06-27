import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../../shared/models/Film';
import { Moviedb } from '../../shared/models/Moviedb';
import { Observable, Subject } from 'rxjs';
import { Result } from '../../shared/models/Result';
import { FilmService } from '../../service/film.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  filmsMoviedb: Moviedb[];
  countElement;
  // filmList: any;
  renderedFilms = true;
  films: Result[] = [];
  displayedFilmsData: Result[];
  // displayedFilmsData: Moviedb[];

  // filmFiltered: Film[];
  filmFiltered: Moviedb[];
  selectedOption = 'films';

  currentPage = 1;
  inputName = '';
  isShowAlert;
  btn_title = 'Загрузить еще';
  secondArgSlice = 9;
  // isPressed = false;


  // "фільмів з такою назвою не знайдено"
  alertNoFilm() {
    this.isShowAlert = true;
    setTimeout(() => {
      this.isShowAlert = false;
    }, 3000);
  }
  // відображає повний список фільмів після alertNoFilm()
  displayDefault() {
    setTimeout(() => {

      this.displayedFilmsData = [...this.films];
    }, 3000);
  }
  toAllFilms() {
    this.displayedFilmsData = [...this.films];

  }

  searchFilm() {
    this.displayedFilmsData = this.films.filter(film => {
      return film.title.toLowerCase().indexOf(this.inputName.toLowerCase().trim()) !== -1;
    });

    if (this.displayedFilmsData.length === 0) {
      this.alertNoFilm();
      this.displayDefault();
    }
    this.inputName = '';
  }

  // кнопка яка додає ще частину фільмів
 // addMoreFilms(films) {
  //  this.secondArgSlice += 9;
    // this.disabled = this.displayedFilmsData.length === 0 ? '!disabled' : 'disabled';
 // }

  //  початкова кількість фільмів доданих у Вибране - з сервісу приходить як isFavorite = true
  // startCounter() {
  //   this.filmFiltered = this.displayedFilmsData.filter(film => film.isFavorite);
  //   return this.countElement = this.filmFiltered.length;
  // }

  // Приймаємо евент з дочірнього і по полю isfavorite = true фіксуємо кількість елементів у Вибраному
  // addFilmObj(filmObj) {
  //   console.log(filmObj, 'film from FilmLists');
  //   this.filmFiltered = this.displayedFilmsData.filter(film => film.isFavorite);
  //   this.countElement = this.filmFiltered.length;
  // }
 // варіант сортування з виводом пунктів меню через *ngFor, як і у оф доке Material
  // tslint:disable-next-line:member-ordering
  states = [
    { value: 'films', choice: 'Фільми' },
    { value: 'actors', choice: 'Актори' }
  ];
  mySort() {
    if ( this.selectedOption === 'films' ) {
      this.router.navigate(['/films-list']);
      // return displayedFilmsData.sort(this.compareFunc);
    } else  {
       this.router.navigate(['/actor-list']);
     }
    // return displayedFilmsData.sort(this.compareFunc).reverse();
    }

  // compareFunc -передається як параметр в метод sort()для порівняння елементів, в даному випадку по полю
  // обєкта масива - name
  // compareFunc(current, next) {
  //   const x: any = current.name.toLowerCase();
  //   const y: any = next.name.toLowerCase();
  //   return x > y ? 1 : -1;
  // }
  constructor(private filmsService: FilmService, private router: Router) { }


  ngOnInit() {
    // this.films = this.filmsService.getFilms();
    this.filmsService.getPopularFilms(this.currentPage)
      .subscribe(
        (filmsData) => {
          filmsData.results.map(result => {
            this.films.push(
              {
                id: result.id,
                vote_average: result.vote_average,
                title: result.title,
                popularity: result.popularity,
                release_date: result.release_date,
                overview: result.overview.slice(0, 120) + '...',
                poster_path: `${this.filmsService.midImgPath}${result.poster_path}`
              }
            );
            // console.log(this.films, 'push Result[]');
          // Роблю копію і далі працюю з копією
this.displayedFilmsData = [...this.films];
this.renderedFilms = false;
// console.log(this.displayedFilmsData, 'Copy- dispayed');
          });
        },
        err => {
          console.log('error');
        });

  }

  addMoreFilms() {
    this.currentPage++;
    this.filmsService.getPopularFilms(this.currentPage).subscribe(
      (filmsData) => {
        filmsData.results.map(result => {
          this.films.push(
            {
              id: result.id,
              vote_average: result.vote_average,
              title: result.title,
              popularity: result.popularity,
              release_date: result.release_date,
              overview: result.overview.slice(0, 110) + '...',
              poster_path: `${this.filmsService.midImgPath}${result.poster_path}`
            }
          );
        // Роблю копію і далі працюю з копією
this.displayedFilmsData = [...this.films];
        });
      },
      err => {
        console.log('error');
      });
}
}


