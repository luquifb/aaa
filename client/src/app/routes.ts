import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home',  component: ProductListComponent },
    { path: 'user',  component: UserprofileComponent,canActivate: [ IsLoggedInService ]  },
    { path: 'login',  component: LoginformComponent },
    { path: 'signup',  component: SignupformComponent },
    { path: 'product-list',  component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: '**', redirectTo: '' }
];
