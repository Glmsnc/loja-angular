import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CestaComponent } from './pages/cesta/cesta.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
},{
  path: 'carrinho',
  component: CestaComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
