import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService, Film } from '../film.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '.films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  description = 'Middle card description';

  films: Film[];
  constructor(private filmsService: FilmService) {
    // console.log(this.films, 'hoho!!');

  }

  ngOnInit() {
    this.films = this.filmsService.getFilms();
    console.log(this.films, 'hoho!!');
  }
}
