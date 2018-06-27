import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../service/actor.service';
import { ResultActor } from '../../shared/models/ResultActor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  btn_title = 'Додати акторів';
  currentPage = 1;
  actors: ResultActor[] = [];
  displayedActorsData: ResultActor[];
  renderedActors = true;


  constructor(private actorService: ActorService, private router: Router) { }

  ngOnInit() {
    this.actorService.getPopularActors(this.currentPage)
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
            console.log(this.actors, 'push actors');
            // Роблю копію і далі працюю з копією
            this.displayedActorsData = [...this.actors];
            console.log(this.displayedActorsData, 'Copy- dispayed');
         this.renderedActors = false;
          });
        },
        err => {
          console.log('error');
        });
  }

  addMoreActors() {
    this.currentPage++;
    this.actorService.getPopularActors(this.currentPage)
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
            console.log(this.displayedActorsData, 'Copy- dispayed');

          },
            err => {
              console.log('error');
            });
        });
  }
}
