import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {LogoutComponent} from './logout/logout.component';
import {SignupformComponent} from './signupform/signupform.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {EditUserProfileComponent} from './edit-user-profile/edit-user-profile.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {CategoriesComponent} from './categories/categories.component';
import {ArtCategoryComponent} from './art-category/art-category.component';
import {PhotographyCategoryComponent} from './photography-category/photography-category.component';
import {PaintingCategoryComponent} from './painting-category/painting-category.component';
import {WorkOnPaperCategoryComponent} from './work-on-paper-category/work-on-paper-category.component';
import {ArtistListComponent} from './artist-list/artist-list.component';

import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home',  component: ProductListComponent },
    { path: 'user',  component: UserprofileComponent, canActivate: [ IsLoggedInService ]  },
    { path: 'user/edit-profile/:id',  component: EditUserProfileComponent },
    { path: 'login',  component: LoginformComponent },
    { path: 'logout',  component: LogoutComponent },
    { path: 'signup',  component: SignupformComponent },
    { path: 'categories',  component: CategoriesComponent },
    { path: 'categories/art',  component: ArtCategoryComponent },
    { path: 'categories/photography', component: PhotographyCategoryComponent },
    { path: 'categories/painting', component: PaintingCategoryComponent },
    { path: 'categories/work-on-paper', component: WorkOnPaperCategoryComponent },
    { path: 'product-list',  component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'product/edit/:id',  component: EditProductComponent },
    { path: 'product-create',  component: ProductCreateComponent },
    { path: 'artist-list',  component: ArtistListComponent },
    { path: '**', redirectTo: '' }
];
