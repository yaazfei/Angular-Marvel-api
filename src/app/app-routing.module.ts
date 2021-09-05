import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonagensComponent } from './personagens/personagens.component';
import { PersonagemDetalhesComponent } from './personagens/personagem-detalhes/personagem-detalhes.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/personagens', pathMatch: 'full'
  },
  {
    path: 'personagens', component: PersonagensComponent
  },
  {
    path: 'personagem', component: PersonagemDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
