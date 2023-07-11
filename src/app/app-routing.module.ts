import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lanches',
    loadChildren: () => import('./pages/lanches/lanches.module').then( m => m.LanchesPageModule)
  },
  {
    path: 'refeicoes',
    loadChildren: () => import('./pages/refeicoes/refeicoes.module').then( m => m.RefeicoesPageModule)
  },
  {
    path: 'sobremesas',
    loadChildren: () => import('./pages/sobremesas/sobremesas.module').then( m => m.SobremesasPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./pages/bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
