import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUpComponent } from './login-up/login-up.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { ProfilComponent } from './profil/profil.component';
import { EncaissementComponent } from './encaissement/encaissement.component';
import { DecaissementComponent } from './decaissement/decaissement.component';
import { EditEncaisseComponent } from './edit-encaisse/edit-encaisse.component';
import { EditDecaisseComponent } from './edit-decaisse/edit-decaisse.component';
import { PrintCaisseComponent } from './print-caisse/print-caisse.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUpComponent,
    LoginComponent,
    IndexComponent,
    ProfilComponent,
    EncaissementComponent,
    DecaissementComponent,
    EditEncaisseComponent,
    EditDecaisseComponent,
    PrintCaisseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
