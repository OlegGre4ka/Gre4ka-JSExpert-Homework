import { Component, OnInit, Inject } from '@angular/core';
import { SeachDataService } from 'src/app/shared/services/seach-data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilmService } from 'src/app/shared/services/film.service';
import { Config } from 'src/app/shared/models/config';
import { API_CONFIG } from 'src/app/shared/models/api.config';
import { Result } from 'src/app/shared/models/Result';


@Component({
  selector: 'app-film-detailed',
  templateUrl: './film-detailed.component.html',
  styleUrls: ['./film-detailed.component.css']
})
export class FilmDetailedComponent implements OnInit {
  querySubscription: Subscription;
  title: string;
  id:number;
  films: Result[] = [];
  Film:Result[]=[];
  constructor(/*private filmsService: SeachDataService,*/private filmsService: FilmService,
    @Inject(API_CONFIG) public apiConfig: Config,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.title = queryParam['title'];
        this.id = +queryParam['id'];
      }
    );
    // this.searchData.setSearchData(this.title);
    this.films = [];
    this.filmsService.searchFilm(this.title).subscribe(
      filmsData => {
        filmsData.results.map((result: { id: number; vote_average: number; title: string; popularity: number; release_date: string; overview: string; poster_path: any; }) => {
          this.films.push({
            id: result.id,
            vote_average: result.vote_average,
            title: result.title,
            popularity: result.popularity,
            release_date: result.release_date,
            overview: result.overview,
            poster_path: `${this.apiConfig.midImgPath}${result.poster_path}`
          });
          // const films=[...this.films];
     this.Film =this.films.filter(item=>{return item.id===this.id})
        })
      })
  }
}
