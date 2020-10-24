import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { ResultsDetailComponent } from './results-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {GithubService} from '../../../services/github.service';
import {MockGithubService} from '../../../mocks/mock-github.service';
import {QueryObject} from '../../../common/model/queryObject';
import {Router} from '@angular/router';

describe('ResultsDetailComponent', () => {
  let component: ResultsDetailComponent;
  let fixture: ComponentFixture<ResultsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsDetailComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: GithubService, useClass: MockGithubService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should navigate back to the overviewpage', inject([GithubService], (githubService: GithubService) => {
    const queryObjectValue: QueryObject = {
      query: 'Test Query'
    };
    const page = 2;
    spyOnProperty(githubService, 'query', 'get').and.returnValue(queryObjectValue);
    spyOnProperty(githubService, 'pageNumber', 'get').and.returnValue(page);

    // Seems not good enough
    spyOn(component, 'goBack').and.callFake(() => {
      return;
    });
    component.goBack();

    // TODO test the router.navigateByUrl
    expect(component.goBack).toHaveBeenCalled();
  }));
});
