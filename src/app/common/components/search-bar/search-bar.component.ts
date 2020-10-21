import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {QueryObject} from '../../model/queryObject';

@Component({
  selector: 'ghe-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input()
  placeholder = '';

  @Output()
  executeSearch = new EventEmitter<QueryObject>();

  searchQuery = {query: ''};

  constructor() { }

  ngOnInit(): void {
  }

  doSearch(): void{
    this.executeSearch.emit(this.searchQuery);
  }

}
