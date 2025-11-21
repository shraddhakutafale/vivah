import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesInterestComponent } from './hobbies-interest.component';

describe('HobbiesInterestComponent', () => {
  let component: HobbiesInterestComponent;
  let fixture: ComponentFixture<HobbiesInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HobbiesInterestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
