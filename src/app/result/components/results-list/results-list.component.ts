import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {GithubResult} from '../../model/githubResult';

@Component({
  selector: 'ghe-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {

  @Input()
  loading: boolean;

  @Input()
  results: GithubResult[];

  @Input()
  page: number;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show(undefined, {
      bdColor: 'transparent',
      fullScreen: false
    });
  }




}
