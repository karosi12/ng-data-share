import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/core/services/logger.service';
import { ValidationService } from 'src/app/core/services/validation.service';
import { GrowlerService, GrowlerMessageType } from '../core/growler/growler.service';
import { IUserLogin } from '../shared/interfaces';

@Component({
  selector: 'cm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private logger: LoggerService) { }

  ngOnInit() {
      this.buildForm();
  }

  buildForm() {
      this.loginForm = this.formBuilder.group({
          email:      ['', [ Validators.required, ValidationService.emailValidator ]],
          password:   ['', [ Validators.required, ValidationService.passwordValidator ]]
      });
  }

  submit({ value, valid }: { value: IUserLogin, valid: boolean }) {
    this.logger.log(JSON.stringify(value));
    return { value, valid };
  }

}
