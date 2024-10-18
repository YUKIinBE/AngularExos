import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo01PropertyBindingComponent } from './exo01-property-binding.component';

describe('Exo01PropertyBindingComponent', () => {
  let component: Exo01PropertyBindingComponent;
  let fixture: ComponentFixture<Exo01PropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exo01PropertyBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo01PropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
