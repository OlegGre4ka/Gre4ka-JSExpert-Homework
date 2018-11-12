import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { Router } from "@angular/router";
// import { Film } from '../../shared/models/Film';
import { Subscription } from "rxjs";
// import { Moviedb } from '../shared/models/Moviedb';
import { Result } from "../shared/models/Result";
import { FilmService } from "../shared/services/film.service";
import { SeachDataService } from "../shared/services/seach-data.service";
import { Config } from "../shared/models/config";
import { API_CONFIG } from "../shared/models/api.config";

@Component({
  selector: "app-films-list",
  templateUrl: "./films-list.component.html",
  styleUrls: ["./films-list.component.css"]
})
export class FilmsListComponent implements OnInit, OnDestroy {
  countElement;
  renderedSpinner = true;
  films: Result[] = [];
  displayedFilmsData: Result[];
  currentPage = 0;
  inputName: string;
  isShowAlert = false;
  isFullList: boolean;
  btn_title = 'Завантажити ще';
  isPressed = false;
  subscription: Subscription;

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

  constructor(
    private filmsService: FilmService,
    @Inject(API_CONFIG) public apiConfig: Config,
    private searchFilmServise: SeachDataService,
    private seach_subject: SeachDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addMoreFilms();
    this.subscription = this.seach_subject
      .getSearchData()
      .subscribe(inputSeach => {
        console.log(inputSeach, 'входящий сабджект для пошуку');
        this.inputName = inputSeach;
        this.findFilm(this.inputName);
      });
    console.log(this.inputName, 'film-list-data seach from service');
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log(
        this.subscription,
        'відписуємось від Subject - ngOnDestroy() в films-list'
      );
    }
  }

  alertNoSeach() {
    this.isShowAlert = true;
    // this.isFullList = false;
    setTimeout(() => {
      this.isShowAlert = false;
    // this.isFullList = true;

    }, 3000);
  }
  // відображає повний список фільмів після alertNoFilm()
  displayDefault() {
    setTimeout(() => {
      // this.displayedFilmsData = [...this.films];
      this.addMoreFilms();
    }, 3000);
  }

  // initFilm() {
  //   this.currentPage++;

  //   this.filmsService.getPopularFilms(this.currentPage).subscribe(
  //     (filmsData) => {
  //       filmsData.results.map(result => {
  //         this.films.push(
  //           {
  //             id: result.id,
  //             vote_average: result.vote_average,
  //             title: result.title,
  //             popularity: result.popularity,
  //             release_date: result.release_date,
  //             overview: result.overview.slice(0, 110) + '...',
  //             poster_path: `${this.apiConfig.midImgPath}${result.poster_path}`
  //           }
  //         );
  // }
  addMoreFilms() {
    this.currentPage++;
    this.filmsService.getPopularFilms(this.currentPage).subscribe(
      filmsData => {
        filmsData.results.map(result => {
          this.films.push({
            id: result.id,
            vote_average: result.vote_average,
            title: result.title,
            popularity: result.popularity,
            release_date: result.release_date,
            overview: result.overview.slice(0, 110) + "...",
            poster_path: `${this.apiConfig.midImgPath}${result.poster_path}`
          });
          // Роблю копію і далі працюю з копією
          this.displayedFilmsData = [...this.films];
          this.renderedSpinner = false;
        });
      },
      err => {
        console.log("error");
      }
    );
  }

  findFilm(inputName) {
    this.films = [];
    this.filmsService.searchFilm(inputName).subscribe(
      filmsData => {
        filmsData.results.map(result => {
          this.films.push({
            id: result.id,
            vote_average: result.vote_average,
            title: result.title,
            popularity: result.popularity,
            release_date: result.release_date,
            overview: result.overview.slice(0, 110) + "...",
            poster_path: `${this.apiConfig.midImgPath}${result.poster_path}`
          });
          this.displayedFilmsData = this.films.filter(film => {
            return (
              film.title
                .toLowerCase()
                .indexOf(this.inputName.toLowerCase().trim()) !== -1
            );
          });
          if (this.displayedFilmsData.length === 0) {
            this.alertNoSeach();
            this.displayDefault();
            console.log(
              this.inputName,
              'ловимо значення методу getSearchData() в films-list'
            );
          } else  if (this.displayedFilmsData.length !== 0) { this.isFullList = true; }
          // Роблю копію і далі працюю з копією
          // this.displayedFilmsData = [...this.films];
          this.renderedSpinner = false;
          // this.isFullList = true;
          console.log(this.displayedFilmsData, 'SEARCH FROM API');
        });
      },

      err => {
        console.log('error');
      }
    );
  }

 
}
