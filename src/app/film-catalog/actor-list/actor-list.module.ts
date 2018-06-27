import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorItemComponent } from './actor-item/actor-item.component';
import { ActorListComponent } from './actor-list.component';
import { SharedModule } from '../../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { SeachComponent } from '../seach/seach.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    ActorItemComponent,
    ActorListComponent,
    // SeachComponent
  ],
  exports: [
    ActorListComponent
  ]
})
export class ActorListModule { }
