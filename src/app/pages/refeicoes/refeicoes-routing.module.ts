import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefeicoesPage } from './refeicoes.page';

const routes: Routes = [
  {
    path: '',
    component: RefeicoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefeicoesPageRoutingModule {}
