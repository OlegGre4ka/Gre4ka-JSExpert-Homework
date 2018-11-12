import { Injectable, Inject } from '@angular/core';
import { Subject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../models/api.config';
import { Config } from '../models/config';
import { Moviedb } from '../models/Moviedb';


@Injectable({
  providedIn: 'root'
})
export class SeachDataService {
search_api: string;
resultSearchApi: any;
  // private searchData$ = new Subject<string>();
  private searchData$ = new Subject<any>();

  // constructor(private http: HttpClient) { }
  constructor(private http: HttpClient,  @Inject(API_CONFIG) public apiConfig: Config) { }


  setSearchData(searchData: string) {
    this.search_api = searchData;
    this.searchData$.next(searchData);
    console.log(this.searchData$, 'Сетаємо дані з інпуту SearchComponent!!!!');
    console.log( this.search_api, 'Сетаємо дані з інпуту SearchComponent Для API!!!!');

  }

  getSearchData(): Observable<string> {
    console.log(this.searchData$, 'роздаємо дані через Subject');
    return this.searchData$.asObservable();

  }

  // setSearchDataAPI(searchData: string) {
  //   this.search_api = searchData;
  //   console.log( this.search_api, 'Сетаємо дані з інпуту SearchComponent!!!!');
  // }

  // searchFilm(searchedFilm: string) {
  //   return this.http.get(`${this.apiConfig.seacrhMovieUrl}?${this.apiConfig.params}&query=${searchedFilm}&page=1&include_adult=false`);
  // }

  // getSearchFilmAPI(inputName) {
  //   console.log(this.resultSearchApi, 'Result API');
  // // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
  // return this.resultSearchApi = this.http.get<Moviedb>(`${this.apiConfig.seacrhMovieUrl}?${this.apiConfig.params}&query=${inputName}&page=1&include_adult=false`);

  // }


}

