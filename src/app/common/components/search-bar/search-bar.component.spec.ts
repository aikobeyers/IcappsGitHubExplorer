import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import {FormsModule} from '@angular/forms';
import {QueryObject} from '../../model/queryObject';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit when there is a query', () => {
    const searchQuery: QueryObject = { query: 'test'};
    component.searchQuery = { query: 'test'};
    const executeSearchSpy = spyOn(component.executeSearch, 'emit' );
    component.doSearch();
    expect(executeSearchSpy).toHaveBeenCalledWith(searchQuery);
  });

  it('should not emit when there is no query', () => {
    const doSearchSpy = spyOn(component.executeSearch, 'emit' );
    component.doSearch();
    expect(doSearchSpy).not.toHaveBeenCalled();
  });
});
