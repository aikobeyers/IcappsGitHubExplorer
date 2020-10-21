import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'ghe-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {

  @Input()
  loading: boolean;

  @Input()
  results: [];

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show(undefined, {
      bdColor: 'transparent',
      fullScreen: false
    });
  }




}
