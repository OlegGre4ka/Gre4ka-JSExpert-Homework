import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.css']
})
export class SeachComponent implements OnInit {
//  // "фільмів з такою назвою не знайдено"
//  alertNoFilm() {
//   this.isShowAlert = true;
//   setTimeout(() => {
//     this.isShowAlert = false;
//   }, 3000);
// }
// // відображає повний список фільмів після alertNoFilm()
// displayDefault() {
//   setTimeout(() => {

//     this.displayedFilmsData = [...this.films];
//   }, 3000);
// }
// toAllFilms() {
//   this.displayedFilmsData = [...this.films];

// }

// searchFilm() {
//   this.displayedFilmsData = this.films.filter(film => {
//     return film.title.toLowerCase().indexOf(this.inputName.toLowerCase().trim()) !== -1;
//   });

//   if (this.displayedFilmsData.length === 0) {
//     this.alertNoFilm();
//     this.displayDefault();
//   }
//   this.inputName = '';
// }
  constructor() { }

  ngOnInit() {
  }

}
