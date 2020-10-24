import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { ResultsOverviewComponent } from './results-overview.component';
import {RouterTestingModule} from '@angular/router/testing';
import {GithubService} from '../../../services/github.service';
import {MockGithubService, mockHeadersNotPage1, mockHeadersPage1, mockResponse} from '../../../mocks/mock-github.service';
import {of} from 'rxjs';
import {GheCommonModule} from '../../../common/ghe-common.module';
import {ResultModule} from '../../result.module';

// TODO individueel slagen de testen, gezamelijk niet --> uitzoeken
describe('ResultsOverviewComponent', () => {
  let component: ResultsOverviewComponent;
  let fixture: ComponentFixture<ResultsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsOverviewComponent ],
      imports: [ RouterTestingModule, GheCommonModule, ResultModule ],
      providers: [
        { provide: GithubService, useClass: MockGithubService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsOverviewComponent);
    component = fixture.componentInstance;
    component.pageNumber = 1; // seems not to work

    fixture.detectChanges();
  });

  /*it('should get the results', inject([GithubService], (githubService: GithubService) => {
    // TODO uitzoeken hoe httpHeaders object mocken
    // TODO In de test werkt response.mockHeadersPage1.get('') niet, enkel response.mockHeadersPage1.mockHeadersPage1.get('')
    const searchRepositoriesSpy = spyOn(githubService, 'searchRepositories').and.returnValue(of(mockResponse));
    const setLinksSpy = spyOn(component, 'setLinks');

    component.getResults();

    expect(searchRepositoriesSpy).toHaveBeenCalled();
    expect(setLinksSpy).toHaveBeenCalled();
    expect(component.results.length).toBeGreaterThan(0);
    expect(component.loading).toBeFalse();
  }));*/

  /*it('should set the linkHeader on page 1', inject([GithubService], (githubService: GithubService) => {
    spyOn(githubService, 'searchRepositories').and.returnValue(of(mockResponse));
    component.pageNumber = 1;
    component.setLinks(mockHeadersPage1.get('link'));

    expect(component.nextPage).toBe('https://api.github.com/search/repositories?q=test&page=2');
    expect(component.lastPage).toBe('https://api.github.com/search/repositories?q=test&page=34');
  }));*/

 /* it('should set the linkHeader on page 2 or further', inject([GithubService], (githubService: GithubService) => {
    spyOn(githubService, 'searchRepositories').and.returnValue(of(mockResponse));
    component.pageNumber = 2;
    component.setLinks(mockHeadersNotPage1.get('link'));

    expect(component.nextPage).toBe('https://api.github.com/search/repositories?q=test&page=3');
    expect(component.lastPage).toBe('https://api.github.com/search/repositories?q=test&page=34');
  }));*/

  it('should set loading to true and navigate to next page', () => {
    component.inputValue  = ' test';
    component.pageNumber = 1;
    const gotToNextSpy = spyOn(component, 'goToNextPage');
    component.goToNextPage();

    expect(component.loading).toBeTrue();
    expect(gotToNextSpy).toHaveBeenCalled();
  });
});
