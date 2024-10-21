import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo05BaseRoutingComponent } from './exo05-base-routing.component';

describe('Exo05BaseRoutingComponent', () => {
  let component: Exo05BaseRoutingComponent;
  let fixture: ComponentFixture<Exo05BaseRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exo05BaseRoutingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo05BaseRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
