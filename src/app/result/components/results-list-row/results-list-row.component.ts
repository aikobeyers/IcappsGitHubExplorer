import {Component, Input, OnInit} from '@angular/core';
import {GithubResult} from '../../model/githubResult';
import {Router} from '@angular/router';
import {GithubService} from '../../../services/github.service';

@Component({
  selector: 'ghe-results-list-row',
  templateUrl: './results-list-row.component.html',
  styleUrls: ['./results-list-row.component.scss']
})
export class ResultsListRowComponent implements OnInit {

  @Input()
  result: GithubResult;

  constructor(private router: Router, private githubService: GithubService) { }

  ngOnInit(): void {
  }

  navigateToDetail(): void{
    this.githubService.resultDetail = this.result;
    this.router.navigateByUrl(`results/${this.result.id}`);
  }

}
