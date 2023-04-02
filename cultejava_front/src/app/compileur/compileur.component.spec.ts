import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompileurComponent } from './compileur.component';

describe('CompileurComponent', () => {
  let component: CompileurComponent;
  let fixture: ComponentFixture<CompileurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompileurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompileurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
