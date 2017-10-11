import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {EditUserProfileComponent} from './edit-user-profile/edit-user-profile.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {CartListComponent} from './cart-list/cart-list.component';
import {CategoriesComponent} from './categories/categories.component';
import {ReviewComponent} from './review/review.component';
import {ArtistListComponent} from './artist-list/artist-list.component';

import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home',  component: ProductListComponent },
    { path: 'user',  component: UserprofileComponent, canActivate: [ IsLoggedInService ]  },
    { path: 'user/edit-profile/:id',  component: EditUserProfileComponent },
    { path: 'login',  component: LoginformComponent },
    { path: 'signup',  component: SignupformComponent },
    { path: 'categories',  component: CategoriesComponent },
    { path: 'product-list',  component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'product/edit/:id',  component: EditProductComponent },
    { path: 'product/review/:id',  component: ReviewComponent },    
    { path: 'product-create',  component: ProductCreateComponent },
    { path: 'artist-list',  component: ArtistListComponent },    
    { path: 'cart',  component: CartListComponent },

    { path: '**', redirectTo: '' }
];
