import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [ ReactiveFormsModule, CommonModule, LoginRoutingModule ],
  declarations: [ LoginRoutingModule.components ]
})
export class LoginModule { }
