import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo09StructuralDirectivesComponent } from './exo09-structural-directives.component';

describe('Exo09StructuralDirectivesComponent', () => {
  let component: Exo09StructuralDirectivesComponent;
  let fixture: ComponentFixture<Exo09StructuralDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exo09StructuralDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo09StructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
