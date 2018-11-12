import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { Film } from '../shared/models/Film';
import { HttpClient } from '@angular/common/http';
import { Moviedb } from '../models/Moviedb';
import { Config } from '../models/config';
import { API_CONFIG } from '../models/api.config';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient,  @Inject(API_CONFIG) public apiConfig: Config) {}
// apiUrl = 'https://api.themoviedb.org/3';
// apiKey = '0994e7679a856150aadcecf7de489bce';
// movieUrl = `${this.apiUrl}/movie`;
// searchUrl = `${this.apiUrl}/search`;
// params = `&api_key=${this.apiKey}&language=ru-Ru`;

// imgPath = 'https://image.tmdb.org/t/p' ;
// midImgPath = `${this.imgPath}/w500`;
// smallImgPath = `${this.imgPath}/w185`;
// bigBackPath = `${this.imgPath}/w1280`;
// midBackPath = `${this.imgPath}/w780`;
// smallBackPath = `${this.imgPath}/w300`;

resultFilm;
getPopularFilms(page?: number) {
  return this.http.get<Moviedb>(`${this.apiConfig.movieUrl}/popular?page=${page}${this.apiConfig.params}`);
}

searchFilm(searchedFilm: string) {
  return this.http.get<any>(`${this.apiConfig.seacrhMovieUrl}?${this.apiConfig.params}&query=${searchedFilm}&page=1&include_adult=false`);
}

//   films: Film [] = [
// tslint:disable-next-line:max-line-length
//     {id: 1, isFavorite: false, name: 'Тор: Рагнарёк', year: '2017', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/2NEzIdBAgm4kSYXF4OH86qs3a0u.jpg', description: 'Вернувшись в Асгард в поисках таинственного врага, ведущего охоту на Камни Бесконечности, Тор обнаруживает, что действия его брата Локи, захватившего трон Асгарда, привели к приближению наиболее страшного события — Рагнарёка.'},
// tslint:disable-next-line:max-line-length
//     {id: 2, isFavorite: true, name: 'Чудо-женщина ', year: '2017', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/fMnMonAyK3nzp1P1odIFzYoSvYe.jpg', description: 'Она была Дианой — принцессой амазонок. И когда на берегах  райского острова, терпит крушение американский пилот и рассказывает о серьезном конфликте, бушующем во внешнем мире, Диана покидает свой дом, чтобы справиться с этой угрозой'},
// tslint:disable-next-line:max-line-length
//     {id: 3, isFavorite: true, name: 'Звёздные Войны: Последние джедаи', year: '2017', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/qP4gdqvE4KsFqkeY9EdVRCA8ahj.jpg', description: 'Первый Орден и Сопротивление яростно сражаются друг с другом в войне, героиня Рей пробудила в себе Силу. Но что произойдет, когда она встретится с единственным оставшимся в живых рыцарем-джедаем — Люком Скайуокером?'},
// tslint:disable-next-line:max-line-length
//     {id: 4, isFavorite: false, name: 'Бегущий по лезвию 2049', year: '2017', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lxFTHZHBHRXcuzR9ygpMGP1kEKr.jpg', description: 'В недалеком будущем мир населен людьми и репликантами, созданными выполнять самую тяжелую работу. Работа офицера полиции Кей - держать репликантов под контролем в условиях нарастающего напряжения.Отваги ему не занимать!'},
// tslint:disable-next-line:max-line-length
//     {id: 5, isFavorite: false, name: 'Лига справедливости', year: '2017', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/e2f1GaWLkk5Sj7cZMi38mUPXYdt.jpg', description: 'Понимая, что существуют угрозы, с которыми невозможно справиться в одиночку, Бэтмен и Супермен создают совершенно новую команду, собрав в ней самых могущественных защитников человечества. Нас ждёт встреча с полюбившимися уже героями!'},
// tslint:disable-next-line:max-line-length
//     {id: 6, isFavorite: false, name: 'Чужой. Завет', year: '2017', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5ff1DVsSL7CP5zIjr8ayHaaHScP.jpg', description: 'Выжившие члены команды «Прометея» Элизабет и андроид Дэвид сделали первый шаг навстречу разгадке величайшей тайны инженеров. Время узнать правду, которая укрыта на родной планете белесых великанов — Рай.'},
// tslint:disable-next-line:max-line-length
//     {id: 7, isFavorite: false, name: 'Хан Соло: Звёздные Войны. Истории', year: '2018', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/k7sOpf0TeBPUIix8IL5MGCQMFev.jpg', description: 'Фильм расскажет о похождениях юного космического сорвиголовы Хана Соло и его верного напарника Чубакки и о том, как они стали самыми быстрыми пилотами и самыми хитрыми контрабандистами далёкой Галактики.'},
// tslint:disable-next-line:max-line-length
//     {id: 8, isFavorite: false, name: 'Дэдпул 2', year: '2018', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ukbLruQbrchScy3jTXgeAz9IWDL.jpg', description: 'Выжив после смертоносной атаки быков, изуродованный шеф-повар кафетерия пытается исполнить свою мечту - стать самым горячим барменом в Мэйберри - и в то же время справиться с потерянными вкусовыми ощущениями.'},
// tslint:disable-next-line:max-line-length
//     {id: 9, isFavorite: false,  name: 'Tomb Raider: Лара Крофт', year: '2018', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/6NUZPCujVGbewamFAnRfBKy4F4C.jpg', description: 'Лара Крофт - весьма самостоятельная дочь эксцентричного искателя приключений,который пропал. Она бесцельно проживает свою жизнь, курьером рассекая на байке по забитым улицам восточного Лондона.И не верит,что отец пропал...'},
// tslint:disable-next-line:max-line-length
//     {id: 10, isFavorite: false, name: 'Стражи Галактики', year: '2014', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/L6U6zH3N39toWXIjvfPjxgRXuG.jpg', description: 'Отважному путешественнику Питеру Квиллу попадает в руки таинственный артефакт, принадлежащий могущественному и безжалостному злодею Ронану, строящему коварные планы по захвату Вселенной. Питер оказывается в центре межгалактической охоты'},
// tslint:disable-next-line:max-line-length
//     {id: 11, isFavorite: false, name: 'Тихоокеанский рубеж 2', year: '2018', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/hAR6AdEKMVQXrcTt1hnaEU7YvSX.jpg', description: 'Команда пилотируемых роботов-защитников остановила вторжение гигантских инопланетных монстров. Великая битва за Тихоокеанский рубеж ознаменовала новую главу в истории человечества. Однако война только начинается…'},
// tslint:disable-next-line:max-line-length
// {id: 12, isFavorite: false, name: 'Интерстеллар', year: '2014', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5IGqQ86P8dfpNShocqz8rx38mv0.jpg', description: 'Наше время на Земле подошло к концу, команда исследователей берет на себя самую важную миссию в истории человечества; путешествуя за пределами нашей галактики, чтобы узнать есть ли у человечества будущее среди звезд.'},
//   ];

  // getFilms(): Film[] {
  //   return this.films;
  // }


}
