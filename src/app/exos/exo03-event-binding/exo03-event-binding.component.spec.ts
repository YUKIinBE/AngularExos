import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo03EventBindingComponent } from './exo03-event-binding.component';

describe('Exo03EventBindingComponent', () => {
  let component: Exo03EventBindingComponent;
  let fixture: ComponentFixture<Exo03EventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exo03EventBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo03EventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
