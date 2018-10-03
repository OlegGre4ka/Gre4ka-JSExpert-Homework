import { Injectable } from '@angular/core';
import { Subject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeachDataService {

  private searchData$ = new Subject<string>();
  constructor() { }

  setSearchData(searchData: string) {
    this.searchData$.next(searchData);
    console.log(this.searchData$, 'Сетаємо дані з інпуту SearchComponent!!!!');
  }

  getSearchData(): Observable<string> {
    console.log(this.searchData$, 'роздаємо дані через Subject');

    return this.searchData$.asObservable();

  }

}

