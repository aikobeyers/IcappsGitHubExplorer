import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {GithubResult} from '../../model/githubResult';
import { EventEmitter } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ghe-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
  animations: [
    trigger('fadeTrigger', [
      state('fadeOut', style({opacity: 0})),
      state('fadeIn', style({opacity: 1})),
      transition('fadeOut <=> fadeIn', animate(200))
    ])]
})
export class ResultsListComponent implements OnInit {

  @Input()
  loading: boolean;

  @Input()
  results: GithubResult[];

  @Input()
  pageNumber: number;

  @Input()
  nextPage: string;

  @Input()
  lastPage: string;

  @Output()
  clickNextEmitter = new EventEmitter();

  @Output()
  clickPreviousEmitter = new EventEmitter();

  @Input()
  atLastPage = false;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show(undefined, {
      bdColor: 'transparent',
      fullScreen: false
    });
  }

  clickNext(): void {
    this.clickNextEmitter.emit();
  }

  clickPrevious(): void{
    this.clickPreviousEmitter.emit();
  }






}
