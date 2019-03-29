import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialsComponent } from './credentials/credentials.component';

const routes: Routes = [
  {path: 'login', component: CredentialsComponent, data: {
    title: 'Login', datos: {email: 'holi@holi.com', pass: 'adios'}, alternate: 'registro'
  }},
  {path: 'registro', component: CredentialsComponent, data: {
    title: 'Registro', datos: {email: '', pass: ''}, alternate: 'login'
  }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredentialsRoutingModule { }
