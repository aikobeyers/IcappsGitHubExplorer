import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {GheCommonModule} from '../../../common/ghe-common.module';
import {GithubService} from '../../../services/github.service';
import {MockGithubService} from '../../../mocks/mock-github.service';
import {QueryObject} from '../../../common/model/queryObject';
import Spy = jasmine.Spy;
import {RouterTestingModule} from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GheCommonModule, RouterTestingModule ],
      declarations: [ HomeComponent ],
      providers: [
        { provide: GithubService, useClass: MockGithubService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set the query and then navigate', inject([GithubService], (githubService: GithubService) => {
    const queryObjectValue: QueryObject = {
      query: 'Test Query'
    };
    const setQueryAndNavigateSpy = spyOn(component, 'setQueryAndNavigateToResults');
    spyOnProperty(githubService, 'query', 'get').and.returnValue(queryObjectValue);
    component.setQueryAndNavigateToResults(queryObjectValue);
    expect(setQueryAndNavigateSpy).toHaveBeenCalled();
    expect(githubService.query).toBe(queryObjectValue);
  }) );
});
