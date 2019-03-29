import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { OperationsComponent } from './api/operations/operations.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'credentials', loadChildren: './credentials/credentials.module#CredentialsModule'},
  {path: 'operations', component: OperationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
