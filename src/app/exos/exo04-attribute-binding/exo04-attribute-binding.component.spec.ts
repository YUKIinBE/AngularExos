import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo04AttributeBindingComponent } from './exo04-attribute-binding.component';

describe('Exo04AttributeBindingComponent', () => {
  let component: Exo04AttributeBindingComponent;
  let fixture: ComponentFixture<Exo04AttributeBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exo04AttributeBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo04AttributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
