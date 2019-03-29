import { Component, OnInit } from '@angular/core';
import { Operation } from './operation';
import { OperationService } from './operation.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html'
})
export class OperationsComponent implements OnInit {

  public operations: Operation[];

  constructor(
    private _operationService: OperationService
  ) { }

  ngOnInit() {
    this._operationService.getOperations().subscribe(
      response => {
        this.operations = response;
      }
    )
  }

}
