import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecaissementComponent } from './decaissement/decaissement.component';
import { EditDecaisseComponent } from './edit-decaisse/edit-decaisse.component';
import { EditEncaisseComponent } from './edit-encaisse/edit-encaisse.component';
import { EncaissementComponent } from './encaissement/encaissement.component';
import { IndexComponent } from './index/index.component';
import { LoginUpComponent } from './login-up/login-up.component';
import { LoginComponent } from './login/login.component';
import { PrintCaisseComponent } from './print-caisse/print-caisse.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path : "", component: LoginComponent},
  {path : "login-up", component: LoginUpComponent},
  {path : "index", component: IndexComponent},
  {path : "profil", component: ProfilComponent},
  {path : "encaissement", component: EncaissementComponent},
  {path : "encaissement/:id", component: EncaissementComponent},
  {path : "decaissement", component: DecaissementComponent},
  {path : 'edit-encaisse' , component : EditEncaisseComponent},
  {path : 'edit-encaisse/:id' , component : EditEncaisseComponent},
  {path : 'edit-decaisse' , component : EditDecaisseComponent},
  {path : 'edit-decaisse/:id' , component :EditDecaisseComponent},
  {path : 'print-caisse' , component :PrintCaisseComponent},
  {path : 'print-caisse/:id' , component :PrintCaisseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
