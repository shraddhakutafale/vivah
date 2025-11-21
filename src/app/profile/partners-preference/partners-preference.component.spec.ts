import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersPreferenceComponent } from './partners-preference.component';

describe('PartnersPreferenceComponent', () => {
  let component: PartnersPreferenceComponent;
  let fixture: ComponentFixture<PartnersPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnersPreferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
