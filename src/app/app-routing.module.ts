import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FestivoComponent } from './Componentes/festivo/festivo.component';

const routes: Routes = [
  {path: 'festivo', component:FestivoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
