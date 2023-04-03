import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionresquestComponent } from './inscriptionresquest.component';

describe('InscriptionresquestComponent', () => {
  let component: InscriptionresquestComponent;
  let fixture: ComponentFixture<InscriptionresquestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionresquestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionresquestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
