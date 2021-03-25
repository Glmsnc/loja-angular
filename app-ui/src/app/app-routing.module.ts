import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CestaComponent } from './pages/cesta/cesta.component';
import { HomeComponent } from './pages/home/home.component';
import { IdentificacaoClienteComponent } from './pages/identificacao-cliente/identificacao-cliente.component';
import { PedidoComponent } from './pages/pedido/pedido.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
},{
  path: 'carrinho',
  component: CestaComponent,
},{
  path: 'identificacao',
  component: IdentificacaoClienteComponent,
},{
  path: 'pedido',
  component: PedidoComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
