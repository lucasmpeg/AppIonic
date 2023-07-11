import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefeicoesPageRoutingModule } from './refeicoes-routing.module';

import { RefeicoesPage } from './refeicoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefeicoesPageRoutingModule
  ],
  declarations: [RefeicoesPage]
})
export class RefeicoesPageModule {}
