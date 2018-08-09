import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefOrdenesComponent } from './chef-ordenes.component';

describe('ChefOrdenesComponent', () => {
  let component: ChefOrdenesComponent;
  let fixture: ComponentFixture<ChefOrdenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefOrdenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
