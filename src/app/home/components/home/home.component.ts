import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../../services/github.service';
import {QueryObject} from '../../../common/model/queryObject';
import {Router} from '@angular/router';

@Component({
  selector: 'ghe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private githubService: GithubService, private router: Router) { }

  ngOnInit(): void {
  }

  setQueryAndNavigateToResults(queryObject: QueryObject): void{
    this.githubService.query = queryObject;
    this.router.navigateByUrl(`results?q=${queryObject.query}`);
  }


}
