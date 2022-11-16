import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctavosFinalComponent } from './octavos-final.component';

describe('OctavosFinalComponent', () => {
  let component: OctavosFinalComponent;
  let fixture: ComponentFixture<OctavosFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctavosFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctavosFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
