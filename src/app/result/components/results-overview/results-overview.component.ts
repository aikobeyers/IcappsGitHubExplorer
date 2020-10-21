import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../../services/github.service';
import {ActivatedRoute, Router} from '@angular/router';
import {QueryObject} from '../../../common/model/queryObject';
import {NgxSpinnerService} from 'ngx-spinner';

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

  constructor(private githubService: GithubService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (!this.githubService.query){
      this.activatedRoute.queryParams.subscribe(params => {
        this.githubService.query = {query: params.q};
        this.inputValue = params.q;
        this.getResults();
      });
    } else {
      this.getResults();
    }
  }

  getResults(): void {
    this.githubService.searchRepositories().subscribe((response: any) => {

      this.setLinks(response.headers.get('link'));
      this.results = response.body.items;
      this.loading = false;
    });
  }


  setLinks(linkHeader: string): void{
    if (linkHeader){
      linkHeader.split(',').forEach((e: string) => {
        this.headerLinks.push(e.split(';'));
      });
    }
  }

  nextPage(): void{
    // Nextpage
    console.log(this.headerLinks[0][0].substring(1, this.headerLinks[0][0].length - 1));
  }

  newSearch(queryObject: QueryObject): void{
    this.githubService.query = queryObject;
    this.router.navigateByUrl(`results?q=${queryObject.query}`);
    this.loading = true;
    this.getResults();
  }

}
