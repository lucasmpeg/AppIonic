import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobremesasPage } from './sobremesas.page';

describe('SobremesasPage', () => {
  let component: SobremesasPage;
  let fixture: ComponentFixture<SobremesasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SobremesasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
