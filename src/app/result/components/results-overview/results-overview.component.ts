import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../../services/github.service';
import {ActivatedRoute, Router} from '@angular/router';
import {QueryObject} from '../../../common/model/queryObject';

@Component({
  selector: 'ghe-results-overview',
  templateUrl: './results-overview.component.html',
  styleUrls: ['./results-overview.component.scss']
})
export class ResultsOverviewComponent implements OnInit {
  headerLinks = [];
  loading = true;
  results = [];
  inputValue: string;
  pageNumber: number;
  nextPage: string;
  lastPage: string;
  atLastPage = false;

  constructor(private githubService: GithubService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(params => {
        this.githubService.query = {query: params.q};
        this.inputValue = params.q;
        this.pageNumber = parseInt(params.p, 10);
        this.getResults();
      });
  }

  getResults(): void {
    this.githubService.searchRepositories(this.pageNumber).subscribe((response: any) => {
      this.headerLinks = [];
      this.setLinks(response.headers.get('link'));
      if (!this.lastPage){
        this.atLastPage = true;
      }
      this.results = response.body.items;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.loading = false;
    });
  }

  setLinks(linkHeader: string): void{
    if (linkHeader){
      linkHeader.split(',').forEach((e: string) => {
        this.headerLinks.push(e.split(';'));
      });
    }
    if (this.pageNumber === 1){
      this.nextPage = this.headerLinks[0] && this.headerLinks[0][0].substring(1, this.headerLinks[0][0].length - 1);
      this.lastPage = this.headerLinks[1] && this.headerLinks[1][0].substring(2, this.headerLinks[1][0].length - 1);
    } else {
      this.nextPage = this.headerLinks[1] && this.headerLinks[1][0].substring(2, this.headerLinks[1][0].length - 1);
      this.lastPage = this.headerLinks[2] && this.headerLinks[2][0].substring(2, this.headerLinks[2][0].length - 1);
    }
  }

  goToNextPage(): void{
    this.loading = true;
    this.router.navigateByUrl(`results?q=${this.inputValue}&p=${++this.pageNumber}`);
  }

  goToPreviousPage(): void{
    this.loading = true;
    this.atLastPage = false;
    this.router.navigateByUrl(`results?q=${this.inputValue}&p=${--this.pageNumber}`);
  }

  newSearch(queryObject: QueryObject): void{
    this.atLastPage = false;
    this.githubService.query = queryObject;
    this.router.navigateByUrl(`results?q=${queryObject.query}&p=1`);
    this.loading = true;
    this.results = [];
    this.getResults();
  }
}
