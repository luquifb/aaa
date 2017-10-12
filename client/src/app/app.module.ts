import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { routes } from './routes';

import { SignupformComponent } from './signupform/signupform.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductCreateComponent } from './product-create/product-create.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ReviewComponent } from './review/review.component';
import { ReviewService } from './services/review.service';
import { CartService } from './services/cart.service';
import { FileSelectDirective } from "ng2-file-upload";
import { ArtistListComponent } from './artist-list/artist-list.component';
import { LogoutComponent } from './logout/logout.component';
import { ArtCategoryComponent } from './art-category/art-category.component';
import { PhotographyCategoryComponent } from './photography-category/photography-category.component';
import { PaintingCategoryComponent } from './painting-category/painting-category.component';
import { WorkOnPaperCategoryComponent } from './work-on-paper-category/work-on-paper-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductDetailComponent,
    FilterPipe,
    ProductCreateComponent,
    EditUserProfileComponent,
    EditProductComponent,
    CartListComponent,
    CategoriesComponent,
    ReviewComponent,
    FileSelectDirective,
    ArtistListComponent,
    LogoutComponent,
    ArtCategoryComponent,
    PhotographyCategoryComponent,
    PaintingCategoryComponent,
    WorkOnPaperCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService, ProductService, ReviewService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
