import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPage2Page } from './main-page2.page';

describe('MainPage2Page', () => {
  let component: MainPage2Page;
  let fixture: ComponentFixture<MainPage2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
