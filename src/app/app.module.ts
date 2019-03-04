import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaturasPendentesComponent } from './faturas-pendentes/faturas-pendentes.component';
import { HttpClientModule } from '@angular/common/http';
import { MinhasFaturasComponent } from './minhas-faturas/minhas-faturas.component';
import { EngServicosComponent } from './eng-servicos/eng-servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    FaturasPendentesComponent,
    MinhasFaturasComponent,
    EngServicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
