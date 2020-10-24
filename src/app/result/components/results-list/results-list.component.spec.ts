import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListComponent } from './results-list.component';

describe('ResultsListComponent', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit when clicked next', () => {
    const clickedNextSpy = spyOn(component.clickNextEmitter, 'emit');
    component.clickNext();
    expect(clickedNextSpy).toHaveBeenCalled();
  });

  it('should emit when clicked previous', () => {
    const clickedPreviousSpy = spyOn(component.clickPreviousEmitter, 'emit');
    component.clickPrevious();
    expect(clickedPreviousSpy).toHaveBeenCalled();
  });
});
