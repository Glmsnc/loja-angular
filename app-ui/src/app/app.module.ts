import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


// Angular Material
import {
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatSidenavModule,
  MatMenuModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatRadioModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatStepperModule,
  MatTreeModule,
  MatTabsModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatListModule,
  MatToolbarModule,
  MatSlideToggleModule,
} from '@angular/material';
import { HomeComponent } from './pages/home/home.component';
import { CestaComponent } from './pages/cesta/cesta.component';
import { ItemCestaComponent } from './item-cesta/item-cesta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { IdentificacaoClienteComponent } from './pages/identificacao-cliente/identificacao-cliente.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidoComponent } from './pages/pedido/pedido.component';
@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    HomeComponent,
    CestaComponent,
    ItemCestaComponent,
    IdentificacaoClienteComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatSidenavModule,
  MatMenuModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatRadioModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatStepperModule,
  MatTreeModule,
  MatTabsModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatListModule,
  MatToolbarModule,
  MatSlideToggleModule,
  NgbModule,
  IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
