import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo07CustomPipesComponent } from './exo07-custom-pipes.component';

describe('Exo07CustomPipesComponent', () => {
  let component: Exo07CustomPipesComponent;
  let fixture: ComponentFixture<Exo07CustomPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exo07CustomPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo07CustomPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
