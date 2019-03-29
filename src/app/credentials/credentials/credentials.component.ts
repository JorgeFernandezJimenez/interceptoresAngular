import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialsService } from './credentials.service';
import { StoreService } from 'src/app/lib/store.service';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styles: []
})
export class CredentialsComponent implements OnInit {

  public data: any;
  public errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _credentialService: CredentialsService,
    private router: Router,
    private store: StoreService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.data = this.activatedRoute.snapshot.data;
  }

  public submit() {
    this.errorMessage = '';
    if(this.data.title == 'Login') {
      this._credentialService.login(this.data.datos).subscribe(this.acceptedCredentials.bind(this));
    }else {
      this._credentialService.register(this.data.datos).subscribe(this.acceptedCredentials.bind(this));
    }
}

  private acceptedCredentials(response) {
    if(response && response.token) {
      this.store.emitToken(response.token);
      this.router.navigateByUrl('/');
    }else {
      this.invalidCredentials();
    }
  }

  private invalidCredentials() {
    this.store.emitToken(null);
    this.errorMessage = 'Invalid Credentials';
  }


}
