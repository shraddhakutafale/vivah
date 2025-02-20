import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPageCategoryComponent } from './select-page-category.component';

describe('SelectPageCategoryComponent', () => {
  let component: SelectPageCategoryComponent;
  let fixture: ComponentFixture<SelectPageCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectPageCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPageCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
