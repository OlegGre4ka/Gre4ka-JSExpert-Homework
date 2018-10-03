import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActorService } from '../shared/services/actor.service';
import { ResultActor } from '../shared/models/ResultActor';
import { SeachDataService } from '../shared/services/seach-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css']
})
export class ActorsListComponent implements OnInit, OnDestroy {
  currentActorPage = 0;
  btn_title = 'Завантажити ще';
  inputName;
  isShowAlert;
  renderedSpinner = true;

  // змінні для роботи з actor-item
  actors: ResultActor[] = [];
  displayedActorsData: ResultActor[];
  subscription: Subscription;

  alertNoSeach() {
    this.isShowAlert = true;
    setTimeout(() => {
      this.isShowAlert = false;
    }, 3000);
  }
  // відображає повний список акторів після alertNoFilm()

  displayActorsDefault() {
    setTimeout(() => {

      this.displayedActorsData = [...this.actors];
    }, 3000);
  }

  constructor(private actorService: ActorService, private seach_subject: SeachDataService) { }

  ngOnInit() {
    this.addMoreActors();
    this.subscription = this.seach_subject.getSearchData().subscribe(
      (inputSeach) => {
        this.inputName = inputSeach;
        this.displayedActorsData = this.actors.filter(actor => {
          return actor.name.toLowerCase().indexOf(this.inputName.toLowerCase().trim()) !== -1;
        });
        if (this.displayedActorsData.length === 0) {
          this.alertNoSeach();
          this.displayActorsDefault();
        }
      console.log(this.inputName, 'ловимо значення методу getSearchData() в actors-list');
      }
    );
  }

  ngOnDestroy() {
    if ( this.subscription) {
      this.subscription.unsubscribe();
      console.log(this.subscription, 'відписуємось від Subject - ngOnDestroy() в actors-list');

    }
  }

  addMoreActors() {
    this.currentActorPage++;
    this.actorService.getPopularActors(this.currentActorPage)
      .subscribe(
        (actorsData) => {
          actorsData.results.map(result => {
            this.actors.push(
              {
                id: result.id,
                popularity: result.popularity,
                name: result.name,
                profile_path: `${this.actorService.midImgPath}${result.profile_path}`
              }
            );
            // Роблю копію і далі працюю з копією
            this.displayedActorsData = [...this.actors];
            this.renderedSpinner = false;
            // console.log(this.displayedActorsData, 'Copy- dispayed');

          },
            err => {
              console.log('error');
            });
        });

  }
}
