import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoOrdenComponent } from './pedido-orden.component';

describe('PedidoOrdenComponent', () => {
  let component: PedidoOrdenComponent;
  let fixture: ComponentFixture<PedidoOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
