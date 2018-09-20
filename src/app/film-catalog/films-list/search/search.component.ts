import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputName = '';

  @Output() simbolSearch = new EventEmitter();

   lookFor() {
   this.simbolSearch.emit(this.inputName);

   console.log(this.simbolSearch, 'emit');

   console.log(this.inputName, ', value input field');

  this.inputName = '';
   }

  constructor() { }

  ngOnInit() {

  }

}
