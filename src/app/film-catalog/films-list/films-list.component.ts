import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../../shared/models/Film';
import { Moviedb } from '../../shared/models/Moviedb';
import { Observable, Subject } from 'rxjs';
import { Result } from '../../shared/models/Result';
import { FilmService } from '../../service/film.service';
import { ActorService } from '../../service/actor.service';
import { ResultActor } from '../../shared/models/ResultActor';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  filmsMoviedb: Moviedb[];
  countElement;
  renderedSpinner = true;
  films: Result[] = [];
  displayedFilmsData: Result[];
  // displayedFilmsData: Moviedb[];

  // filmFiltered: Film[];
  filmFiltered: Moviedb[];
  selectedOption = 'films';

  currentPage = 0;
  currentActorPage = 0;
  inputName;
  isShowAlert;
  btn_title = 'Завантажити ще';
  isPressed = false;
  // змінні для роботи з actor-item
  actors: ResultActor[] = [];
  displayedActorsData: ResultActor[];
  // renderedActors = true;
  isFilms = true;
  isActors = false;
  // "фільмів з такою назвою не знайдено"

  alertNoSeach() {
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

  displayActorsDefault() {
    setTimeout(() => {

      this.displayedActorsData = [...this.actors];
    }, 3000);
  }
  toAllActors() {
    this.displayedActorsData = [...this.actors];

  }
  // функція що реалізує евент-біндінг з дочірнього SearchComponent,
  // обробляє отриані дані і виводить результат пошуку на екран
  lookFor(searchSimbol) {
    this.inputName = searchSimbol;
    console.log(this.inputName, 'InputValue from SearchComponent');

    if (this.selectedOption === 'films') {
      // вибірка по фільмам
      this.displayedFilmsData = this.films.filter(film => {
        return film.title.toLowerCase().indexOf(this.inputName.toLowerCase().trim()) !== -1;
      });
      //  у випадку відсутності даного фільму
      if (this.displayedFilmsData.length === 0) {
        this.alertNoSeach();
        this.displayDefault();
      }
    } else if (this.selectedOption === 'actors') {
      // вибірка по акторам
      this.displayedActorsData = this.actors.filter(actor => {
        return actor.name.toLowerCase().indexOf(this.inputName.toLowerCase().trim()) !== -1;
      });
      //  у випадку відсутності вибраного актора
      if (this.displayedActorsData.length === 0) {
        this.alertNoSeach();
        this.displayActorsDefault();
      }
    }
  }

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
      if (this.selectedOption === 'films') {
        this.isFilms = true;
        this.isActors = false;
        return this.displayedFilmsData;
        // return displayedFilmsData.sort(this.compareFunc);
      } else
        if (this.selectedOption === 'actors') {
          this.isFilms = false;
          this.isActors = true;
          return this.displayedActorsData;
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
    constructor(private filmsService: FilmService, private actorService: ActorService, private router: Router) { }


    ngOnInit() {
      // this.films = this.filmsService.getFilms();
      this.addMoreFilms();
      this.addMoreActors();

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
            this.renderedSpinner = false;

          });
        },
        err => {
          console.log('error');
        });
    }

    addMoreActors() {
      this.currentActorPage++;
      this.actorService.getPopularActors(this.currentActorPage)
        .subscribe(
          (actorsData) => {
            actorsData.results.map(result => {
              this.actors.push(
                {
                  id: result.id,
                  popularity: result.popularity,
                  name: result.name,
                  profile_path: `${this.actorService.midImgPath}${result.profile_path}`
                }
              );
              // Роблю копію і далі працюю з копією
              this.displayedActorsData = [...this.actors];
              this.renderedSpinner = false;
              // console.log(this.displayedActorsData, 'Copy- dispayed');

            },
              err => {
                console.log('error');
              });
          });

    }
  }
