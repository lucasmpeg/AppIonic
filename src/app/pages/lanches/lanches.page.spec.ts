import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanchesPage } from './lanches.page';

describe('LanchesPage', () => {
  let component: LanchesPage;
  let fixture: ComponentFixture<LanchesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LanchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
