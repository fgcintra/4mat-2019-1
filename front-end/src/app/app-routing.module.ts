import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombustivelListComponent } from './combustivel/combustivel-list/combustivel-list.component';
import { CombustivelFormComponent } from './combustivel/combustivel-form/combustivel-form.component';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './veiculo/veiculo-form/veiculo-form.component';


const routes: Routes = [
  {
    path: 'combustivel',
    component: CombustivelListComponent
  },
  {
    path: 'combustivel/novo',
    component: CombustivelFormComponent
  },
  {
    path: 'combustivel/:id',
    component: CombustivelFormComponent
  },
  {
    path: 'veiculo',
    component: VeiculoListComponent
  },
  {
    path: 'veiculo/novo',
    component: VeiculoFormComponent
  },
  {
    path: 'veiculo/:id',
    component: VeiculoFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
