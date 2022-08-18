import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityHeaderComponent } from './accessibility-header.component';

describe('AccessibilityHeaderComponent', () => {
  let component: AccessibilityHeaderComponent;
  let fixture: ComponentFixture<AccessibilityHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessibilityHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibilityHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
