import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations/operations.component';
import { OperationService } from './operations/operation.service';

@NgModule({
  declarations: [OperationsComponent],
  imports: [
    CommonModule
  ],
  exports: [OperationsComponent],
  providers: [OperationService]
})
export class ApiModule { }
