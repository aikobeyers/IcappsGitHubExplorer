import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesOverviewComponent } from './categories-overview.component';

describe('CategoriesOverviewComponent', () => {
  let component: CategoriesOverviewComponent;
  let fixture: ComponentFixture<CategoriesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
