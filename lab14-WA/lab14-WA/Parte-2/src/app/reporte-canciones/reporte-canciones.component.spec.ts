import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCancionesComponent } from './reporte-canciones.component';

describe('ReporteCancionesComponent', () => {
  let component: ReporteCancionesComponent;
  let fixture: ComponentFixture<ReporteCancionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteCancionesComponent]
    });
    fixture = TestBed.createComponent(ReporteCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
