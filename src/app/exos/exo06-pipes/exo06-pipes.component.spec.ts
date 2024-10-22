import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo06PipesComponent } from './exo06-pipes.component';

describe('Exo06PipesComponent', () => {
  let component: Exo06PipesComponent;
  let fixture: ComponentFixture<Exo06PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exo06PipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo06PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
