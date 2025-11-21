import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionInformationComponent } from './religion-information.component';

describe('ReligionInformationComponent', () => {
  let component: ReligionInformationComponent;
  let fixture: ComponentFixture<ReligionInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReligionInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReligionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
