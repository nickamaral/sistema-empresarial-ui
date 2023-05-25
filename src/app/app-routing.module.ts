import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesFormularioComponent } from './clientes/clientes-formulario/clientes-formulario.component';
import { ClientesBuscaComponent } from './clientes/clientes-busca/clientes-busca.component';
import { path } from './shared/constants/path';
import { ClientesLogComponent } from './clientes/clientes-log/clientes-log.component';

const routes: Routes = [
  {path:"",component:ClientesComponent},
  {path:path.CLIENTE_FORMULARIO,component:ClientesFormularioComponent},
  {path:`${path.CLIENTE_FORMULARIO}/:id`,component:ClientesFormularioComponent},
  {path:`${path.CLIENTE_LOG}/:id`,component:ClientesLogComponent},
  {path:path.CLIENTE_BUSCA,component:ClientesBuscaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
