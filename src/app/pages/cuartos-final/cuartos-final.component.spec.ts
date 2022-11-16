import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartosFinalComponent } from './cuartos-final.component';

describe('CuartosFinalComponent', () => {
  let component: CuartosFinalComponent;
  let fixture: ComponentFixture<CuartosFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuartosFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuartosFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
