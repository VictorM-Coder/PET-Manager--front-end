import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateButtonBarComponent } from './create-button-bar.component';

describe('CreateButtonBarComponent', () => {
  let component: CreateButtonBarComponent;
  let fixture: ComponentFixture<CreateButtonBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateButtonBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
