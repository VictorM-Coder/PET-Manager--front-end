import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditButtonBarComponent } from './edit-button-bar.component';

describe('EditButtonBarComponent', () => {
  let component: EditButtonBarComponent;
  let fixture: ComponentFixture<EditButtonBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditButtonBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
