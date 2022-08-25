import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsShowcaseComponent } from './pets-showcase.component';

describe('PetsShowcaseComponent', () => {
  let component: PetsShowcaseComponent;
  let fixture: ComponentFixture<PetsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
