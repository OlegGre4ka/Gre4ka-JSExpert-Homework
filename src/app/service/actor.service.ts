import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Actor } from '../shared/models/Actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
apiUrl = 'https://api.themoviedb.org/3';
apiKey = '0994e7679a856150aadcecf7de489bce';
params = `&api_key=${this.apiKey}&language=ru-Ru`;
personUrl = `${this.apiUrl}/person`;

imgPath = 'https://image.tmdb.org/t/p' ;
midImgPath = `${this.imgPath}/w500`;
smallImgPath = `${this.imgPath}/w185`;
bigBackPath = `${this.imgPath}/w1280`;
midBackPath = `${this.imgPath}/w780`;
smallBackPath = `${this.imgPath}/w300`;

  constructor(private http: HttpClient) { }

  getPopularActors(page?: number) {
    return this.http.get<Actor>(`${this.personUrl}/popular?page=${page}${this.params}`);
      }


  // https://api.themoviedb.org/3/person/popular?api_key=0994e7679a856150aadcecf7de489bce&language=ru-Ru&page=1
}
