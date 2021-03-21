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
@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    HomeComponent,
    CestaComponent,
    ItemCestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
