import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccessWithEmailComponent } from './pages/access-with-email/access-with-email.component';
import { AccessWithSocialMediaComponent } from './pages/access-with-social-media/access-with-social-media.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    AccessWithEmailComponent,
    AccessWithSocialMediaComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
