import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styles: []
})
export class CredentialsComponent implements OnInit {

  public isLogin: boolean;
  public data: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.isLogin = false;
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.data = this.activatedRoute.snapshot.data;
    console.log(this.data);
    this.isLogin = this.data.title == 'login' ? true : false;
  }

}
