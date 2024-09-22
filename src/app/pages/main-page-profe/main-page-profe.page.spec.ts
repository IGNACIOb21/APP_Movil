import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPageProfePage } from './main-page-profe.page';

describe('MainPageProfePage', () => {
  let component: MainPageProfePage;
  let fixture: ComponentFixture<MainPageProfePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
