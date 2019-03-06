import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaturasPendentesComponent } from './faturas-pendentes/faturas-pendentes.component';
import { HttpClientModule } from '@angular/common/http';
import { MinhasFaturasComponent } from './minhas-faturas/minhas-faturas.component';
import { EngServicosComponent } from './eng-servicos/eng-servicos.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SigninComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    FaturasPendentesComponent,
    MinhasFaturasComponent,
    EngServicosComponent,
    SidebarComponent,
    TopBarComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
