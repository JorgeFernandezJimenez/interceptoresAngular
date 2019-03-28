import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [NavComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [NavComponent, FooterComponent]
})
export class ViewsModule { }
