import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialsComponent } from './credentials/credentials.component';

const routes: Routes = [
  {path: 'login', component: CredentialsComponent, data: {
    title: 'login', datos: {email: 'holi@holi.com', pass: 'adios'}
  }},
  {path: 'registro', component: CredentialsComponent, data: {
    title: 'registro'
  }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredentialsRoutingModule { }
