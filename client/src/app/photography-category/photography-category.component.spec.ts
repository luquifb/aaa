import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyCategoryComponent } from './photography-category.component';

describe('PhotographyCategoryComponent', () => {
  let component: PhotographyCategoryComponent;
  let fixture: ComponentFixture<PhotographyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
