import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMyFamilyComponent } from './about-my-family.component';

describe('AboutMyFamilyComponent', () => {
  let component: AboutMyFamilyComponent;
  let fixture: ComponentFixture<AboutMyFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutMyFamilyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMyFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
