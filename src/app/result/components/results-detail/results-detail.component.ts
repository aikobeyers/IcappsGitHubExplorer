import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../../services/github.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GithubResult} from '../../model/githubResult';

@Component({
  selector: 'ghe-results-detail',
  templateUrl: './results-detail.component.html',
  styleUrls: ['./results-detail.component.scss']
})
export class ResultsDetailComponent implements OnInit {

  showBackButton = false;

  gitHubItem: GithubResult;

  constructor(private githubService: GithubService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    if (!this.githubService.resultDetail){
      this.activatedRoute.params.subscribe(params => {
        this.githubService.getRepositoryById(params.id).subscribe(result => {
          this.gitHubItem = result;
          console.log(result);
        });
      });
    } else {
      this.gitHubItem = this.githubService.resultDetail;
    }

    if (this.githubService.query){
      this.showBackButton = true;
    }
  }

  goBack(): void{
    this.router.navigateByUrl(`/results?q=${this.githubService.query.query}&p=${this.githubService.pageNumber}`);
  }
}
