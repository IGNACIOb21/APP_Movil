import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetaContraPage } from './reta-contra.page';

describe('RetaContraPage', () => {
  let component: RetaContraPage;
  let fixture: ComponentFixture<RetaContraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RetaContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
