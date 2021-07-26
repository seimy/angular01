import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IfAuthenticatedComponent } from './components/if-authenticated/if-authenticated.component';



@NgModule({
  declarations: [
    HeaderComponent,
    IfAuthenticatedComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
