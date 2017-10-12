import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOnPaperCategoryComponent } from './work-on-paper-category.component';

describe('WorkOnPaperCategoryComponent', () => {
  let component: WorkOnPaperCategoryComponent;
  let fixture: ComponentFixture<WorkOnPaperCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOnPaperCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOnPaperCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
