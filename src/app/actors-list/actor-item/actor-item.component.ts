import { Component, OnInit, Input } from '@angular/core';
// import { Actor } from '../../shared/models/Actor';
import { ResultActor } from '../../shared/models/ResultActor';

@Component ({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('actorItem') actor: ResultActor;

  constructor() { }

  ngOnInit() {
  }

}
