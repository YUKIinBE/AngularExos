import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo08ComponentDirectivesComponent } from './exo08-component-directives.component';

describe('Exo08ComponentDirectivesComponent', () => {
  let component: Exo08ComponentDirectivesComponent;
  let fixture: ComponentFixture<Exo08ComponentDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exo08ComponentDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo08ComponentDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
