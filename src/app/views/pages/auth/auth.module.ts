import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
]

@NgModule({
  declarations: [LoginComponent, AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SweetAlert2Module
  ]
})
export class AuthModule { }
