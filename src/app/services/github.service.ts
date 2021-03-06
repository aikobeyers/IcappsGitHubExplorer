import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QueryObject} from '../common/model/queryObject';
import {GithubResult} from '../result/model/githubResult';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  get pageNumber(): number {
    return this._pageNumber;
  }

  set pageNumber(value: number) {
    this._pageNumber = value;
  }
  get resultDetail(): GithubResult {
    return this._resultDetail;
  }

  set resultDetail(value: GithubResult) {
    this._resultDetail = value;
  }
  get query(): QueryObject {
    return this._query;
  }

  set query(value: QueryObject) {
    this._query = value;
  }

  private _pageNumber: number;

  private _resultDetail: GithubResult;

  private readonly url: string = 'https://api.github.com';
  private _query: QueryObject;

  constructor(private http: HttpClient) {  }

  searchRepositories(pageNumber: number): Observable<any>{
    return this.http.get(`${this.url}/search/repositories?q=${this.query.query}&page=${pageNumber}`, {observe: 'response'});
  }

  getRepositoryById(id: number): Observable<any>{
    return this.http.get(`${this.url}/repositories/${id}`);
  }
}
