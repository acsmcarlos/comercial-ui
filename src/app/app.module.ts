import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PainelNegociacaoComponent } from './painel-negociacao/painel-negociacao.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelNegociacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
