import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialsRoutingModule } from './credentials-routing.module';
import { CredentialsComponent } from './credentials/credentials.component';
import { FormsModule } from '@angular/forms';
import { CredentialsService } from './credentials/credentials.service';

@NgModule({
  declarations: [CredentialsComponent],
  imports: [
    CommonModule,
    CredentialsRoutingModule,
    FormsModule
  ],
  providers: [CredentialsService]
})
export class CredentialsModule { }
