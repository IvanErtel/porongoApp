import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanzineComponent } from './fanzine.component';

describe('FanzineComponent', () => {
  let component: FanzineComponent;
  let fixture: ComponentFixture<FanzineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanzineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanzineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
