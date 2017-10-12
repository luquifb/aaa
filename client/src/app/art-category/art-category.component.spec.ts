import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCategoryComponent } from './art-category.component';

describe('ArtCategoryComponent', () => {
  let component: ArtCategoryComponent;
  let fixture: ComponentFixture<ArtCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
