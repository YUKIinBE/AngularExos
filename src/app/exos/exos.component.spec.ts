import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExosComponent } from './exos.component';

describe('ExosComponent', () => {
  let component: ExosComponent;
  let fixture: ComponentFixture<ExosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
