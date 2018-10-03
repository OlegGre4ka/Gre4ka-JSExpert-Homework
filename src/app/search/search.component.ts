import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SeachDataService } from '../shared/services/seach-data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputName = '';

  constructor(private searchData: SeachDataService) { }

  ngOnInit() {
  }

  lookFor() {
    this.searchData.setSearchData(this.inputName);

    console.log(this.inputName, '- value input SearchComponent');

   this.inputName = '';
    }
}
