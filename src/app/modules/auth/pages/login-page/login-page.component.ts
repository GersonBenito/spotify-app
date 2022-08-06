import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public formLogin: FormGroup;
  public errorSession: boolean = false;
  public errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router,
  ) { 
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  sendLogin(): void{
    const { email, password } = this.formLogin.value;
    this._authService.sendCredentials$(email, password).subscribe({
      next: response =>{
        this.router.navigate(['/tracks']);
        this.errorSession = false;
      },
      error: err =>{
        const { error } = err.error;
        this.errorMessage = error;
        this.errorSession = true;
      }
    });
  }

}
