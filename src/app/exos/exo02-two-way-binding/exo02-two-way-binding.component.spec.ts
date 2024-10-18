import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo02TwoWayBindingComponent } from './exo02-two-way-binding.component';

describe('Exo02TwoWayBindingComponent', () => {
  let component: Exo02TwoWayBindingComponent;
  let fixture: ComponentFixture<Exo02TwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exo02TwoWayBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo02TwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
