import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { ResultsListRowComponent } from './results-list-row.component';
import {GithubService} from '../../../services/github.service';
import {QueryObject} from '../../../common/model/queryObject';
import {MockGithubService, mockRepository1, mockRepository2} from '../../../mocks/mock-github.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('ResultsListRowComponent', () => {
  let component: ResultsListRowComponent;
  let fixture: ComponentFixture<ResultsListRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsListRowComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: GithubService, useClass: MockGithubService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListRowComponent);
    component = fixture.componentInstance;
    component.result = mockRepository2;
    fixture.detectChanges();
  });

  it('should set the query and then navigate', inject([GithubService], (githubService: GithubService) => {

    const navigateSpy = spyOn(component, 'navigateToDetail');

    component.navigateToDetail();
    githubService.resultDetail = component.result;

    expect(navigateSpy).toHaveBeenCalled();
    expect(githubService.resultDetail).toBe(mockRepository2);
  }) );
});
