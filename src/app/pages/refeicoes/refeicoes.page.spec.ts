import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefeicoesPage } from './refeicoes.page';

describe('RefeicoesPage', () => {
  let component: RefeicoesPage;
  let fixture: ComponentFixture<RefeicoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RefeicoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

