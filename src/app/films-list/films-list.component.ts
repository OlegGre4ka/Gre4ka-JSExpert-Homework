import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// import { Film } from '../../shared/models/Film';
import { Subscription } from 'rxjs';
// import { Moviedb } from '../shared/models/Moviedb';
import { Result } from '../shared/models/Result';
import { FilmService } from '../shared/services/film.service';
import { SeachDataService } from '../shared/services/seach-data.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit, OnDestroy {
  countElement;
  renderedSpinner = true;
  films: Result[] = [];
  displayedFilmsData: Result[];
  currentPage = 0;
  inputName;
  isShowAlert;
  btn_title = 'Завантажити ще';
  isPressed = false;
  subscription: Subscription;


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

  constructor(private filmsService: FilmService, private seach_subject: SeachDataService,
    private router: Router) { }


  ngOnInit() {
    // this.films = this.filmsService.getFilms();
    this.addMoreFilms();
    this.subscription = this.seach_subject.getSearchData().subscribe(
      (inputSeach) => {
        this.inputName = inputSeach;
        this.displayedFilmsData = this.films.filter(film => {
                return film.title.toLowerCase().indexOf(this.inputName.toLowerCase().trim()) !== -1;
               });
               if (this.displayedFilmsData.length === 0) {
                this.alertNoSeach();
                this.displayDefault();
      console.log(this.inputName, 'ловимо значення методу getSearchData() в films-list');
      }
    });
  }
  ngOnDestroy() {
    if ( this.subscription) {
      this.subscription.unsubscribe();
      console.log(this.subscription, 'відписуємось від Subject - ngOnDestroy() в films-list');

    }
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


}


