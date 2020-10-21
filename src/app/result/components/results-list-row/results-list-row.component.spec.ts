import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListRowComponent } from './results-list-row.component';

describe('ResultsListRowComponent', () => {
  let component: ResultsListRowComponent;
  let fixture: ComponentFixture<ResultsListRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsListRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
