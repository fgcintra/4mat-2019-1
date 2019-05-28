import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

/**** Datas em português no MatDatepicker  ****/

// É preciso instalar os seguintes pacotes:
// yarn add @angular/material-moment-adapter moment

import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

/**********************************************/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { CabecComponent } from './ui/cabec/cabec.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPrincipalComponent } from './ui/menu-principal/menu-principal.component';
import { RodapeComponent } from './ui/rodape/rodape.component';
import { CombustivelListComponent } from './combustivel/combustivel-list/combustivel-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirDlgComponent } from './ui/excluir-dlg/excluir-dlg.component';
import { CombustivelFormComponent } from './combustivel/combustivel-form/combustivel-form.component';
import { FormsModule } from '@angular/forms';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './veiculo/veiculo-form/veiculo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecComponent,
    MenuPrincipalComponent,
    RodapeComponent,
    CombustivelListComponent,
    ExcluirDlgComponent,
    CombustivelFormComponent,
    VeiculoListComponent,
    VeiculoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    /**** Datas em português no MatDatepicker  ****/
    MatMomentDateModule
    /**********************************************/
  ],
  entryComponents: [
    ExcluirDlgComponent
  ],
  providers: [
   /**** Datas em português no MatDatepicker  ****/
   { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
   { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
   /**********************************************/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
