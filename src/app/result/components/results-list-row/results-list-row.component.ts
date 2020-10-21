import {Component, Input, OnInit} from '@angular/core';
import {GithubResult} from '../../model/githubResult';

@Component({
  selector: 'ghe-results-list-row',
  templateUrl: './results-list-row.component.html',
  styleUrls: ['./results-list-row.component.scss']
})
export class ResultsListRowComponent implements OnInit {

  @Input()
  result: GithubResult;

  constructor() { }

  ngOnInit(): void {
  }

}
