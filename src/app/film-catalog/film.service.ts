import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Film {
  id: number;
  name: string;
  year: string;
  imgUrl: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor() {}

  films: Film [] = [
    // tslint:disable-next-line:max-line-length
    {id: 1, name: 'Тор: Рагнарёк', year: '2017', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/2NEzIdBAgm4kSYXF4OH86qs3a0u.jpg', description: 'Вернувшись в Асгард в поисках таинственного врага, ведущего охоту на Камни Бесконечности, Тор обнаруживает, что действия его брата Локи, захватившего трон Асгарда, привели к приближению наиболее страшного события — Рагнарёка.'},
    // tslint:disable-next-line:max-line-length
    {id: 2, name: 'Чудо-женщина ', year: '2017', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/fMnMonAyK3nzp1P1odIFzYoSvYe.jpg', description: 'Она была Дианой — принцессой амазонок. И когда на берегах  райского острова, терпит крушение американский пилот и рассказывает о серьезном конфликте, бушующем во внешнем мире, Диана покидает свой дом, чтобы справиться с этой угрозой'},
    // tslint:disable-next-line:max-line-length
    {id: 3, name: 'Звёздные Войны: Последние джедаи', year: '2017', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/qP4gdqvE4KsFqkeY9EdVRCA8ahj.jpg', description: 'Первый Орден и Сопротивление яростно сражаются друг с другом в войне, героиня Рей пробудила в себе Силу. Но что произойдет, когда она встретится с единственным оставшимся в живых рыцарем-джедаем — Люком Скайуокером?'},

  // tslint:disable-next-line:max-line-length
  //  {id: 3, name: 'Звёздные Войны: Последние джедаи', year: '2017', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/qP4gdqvE4KsFqkeY9EdVRCA8ahj.jpg', description: 'Баланс Силы снова нарушен, и события развиваются с невероятной скоростью! Рей, Финну, вездесущему дроиду BB-8 и другим героям предстоит опасная схватка с могущественным Первым Орденом.'},
    // tslint:disable-next-line:max-line-length
    {id: 4, name: 'Бегущий по лезвию 2049', year: '2017', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lxFTHZHBHRXcuzR9ygpMGP1kEKr.jpg', description: 'В недалеком будущем мир населен людьми и репликантами, созданными выполнять самую тяжелую работу. Работа офицера полиции Кей - держать репликантов под контролем в условиях нарастающего напряжения'},
    // tslint:disable-next-line:max-line-length
    {id: 5, name: 'Лига справедливости', year: '2017', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/e2f1GaWLkk5Sj7cZMi38mUPXYdt.jpg', description: 'Понимая, что существуют угрозы, с которыми невозможно справиться в одиночку, Бэтмен и Супермен создают совершенно новую команду, собрав в ней самых могущественных защитников человечества. '},
    // tslint:disable-next-line:max-line-length
    {id: 6, name: 'Чужой. Завет', year: '2017', imgUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5ff1DVsSL7CP5zIjr8ayHaaHScP.jpg', description: 'Выжившие члены команды «Прометея» Элизабет и андроид Дэвид сделали первый шаг навстречу разгадке тайны инженеров. Время узнать правду, которая укрыта на родной планете белесых великанов — Рай.'},
  ];
  getFilms(): Film[] {
    return this.films;
  }
}
