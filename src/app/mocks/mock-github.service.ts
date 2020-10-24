import {QueryObject} from '../common/model/queryObject';
import {GithubService} from '../services/github.service';
import {Observable, of} from 'rxjs';
import {GithubResult} from '../result/model/githubResult';
import {HttpResponse} from '@angular/common/http';
export const mockRepository1: GithubResult = {
  id: 24195339,
  name: 'angular',
  stargazers_count: 67007,
  forks_count: 17778,
  description: 'One framework. Mobile & desktop.',
  url: 'https://api.github.com/repos/angular/angular',
  html_url: 'https://github.com/angular/angular' ,
  owner: {
    login: 'angular',
    avatar_url: 'https://avatars3.githubusercontent.com/u/139426?v=4',
    id: 139426
  }
};

export const mockRepository2: GithubResult = {
  id: 24195338,
  name: 'angular1',
  stargazers_count: 67007,
  forks_count: 17778,
  description: 'One framework. No Mobile & desktop.',
  url: 'https://api.github.com/repos/angular/angular1',
  html_url: 'https://github.com/angular/angular1' ,
  owner: {
    login: 'angular',
    avatar_url: 'https://avatars3.githubusercontent.com/u/139426?v=4',
    id: 139426
  }
};

export const mockRepositories: GithubResult[] = [
  mockRepository1, mockRepository2
];

export const mockHeadersPage1: Map<string, string> = new Map();
export const mockHeadersNotPage1: Map<string, string> = new Map();
const normalizedNames = new Map();
normalizedNames.set('link', 'link');
mockHeadersPage1.set('link',  '<https://api.github.com/search/repositories?q=test&page=2>; rel="next", <https://api.github.com/search/repositories?q=test&page=34>; rel="last"' );
mockHeadersNotPage1.set('link', '<https://api.github.com/search/repositories?q=test&page=1>; rel="prev", <https://api.github.com/search/repositories?q=test&page=3>; rel="next", <https://api.github.com/search/repositories?q=test&page=34>; rel="last", <https://api.github.com/search/repositories?q=test&page=1>; rel="first"')
export const mockResponse: any = {
  headers: {
    'normalizedNames': {},
    'lazyUpdate': null,
    'lazyInit': null,
    'headers': mockHeadersPage1
  },
  status: 200,
  statusText: 'OK',
  url: 'https://api.github.com/search/repositories?q=test&page=1',
  ok: true,
  type: 4,
  body: {
    total_count: 2,
    incomplete_results: false,
    items: [
      mockRepositories
    ]
  }
};

export class MockGithubService{

  private queryValue: QueryObject = {
    query: 'test'
};

  private resultMock: GithubResult = mockRepository1;

  private pageNumberValue = 1;

  set resultDetail(value: GithubResult){
    this.resultMock = value;
  }

  get resultDetail(): GithubResult{
    return this.resultMock;
  }

  set query(value: QueryObject){
    this.queryValue = value;
  }

  get query(): QueryObject{
    return this.queryValue;
  }

  get pageNumber(): number {
    return this.pageNumberValue;
  }

  set pageNumber(value: number) {
    this.pageNumberValue = value;
  }

  searchRepositories(pageNumber: number): Observable<any>{
    return of(mockResponse);
  }

  getRepositoryById(id: number): Observable<any>{
    return of(mockRepository1);
  }
}
