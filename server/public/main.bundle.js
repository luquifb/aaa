webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'AAA';
    }
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__product_create_product_create_component__ = __webpack_require__("../../../../../src/app/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__edit_user_profile_edit_user_profile_component__ = __webpack_require__("../../../../../src/app/edit-user-profile/edit-user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/edit-product/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__artist_list_artist_list_component__ = __webpack_require__("../../../../../src/app/artist-list/artist-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__art_category_art_category_component__ = __webpack_require__("../../../../../src/app/art-category/art-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__photography_category_photography_category_component__ = __webpack_require__("../../../../../src/app/photography-category/photography-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__painting_category_painting_category_component__ = __webpack_require__("../../../../../src/app/painting-category/painting-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__work_on_paper_category_work_on_paper_category_component__ = __webpack_require__("../../../../../src/app/work-on-paper-category/work-on-paper-category.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loginform_loginform_component__["a" /* LoginformComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__signupform_signupform_component__["a" /* SignupformComponent */],
            __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pipes_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_19__product_create_product_create_component__["a" /* ProductCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_20__edit_user_profile_edit_user_profile_component__["a" /* EditUserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__edit_product_edit_product_component__["a" /* EditProductComponent */],
            __WEBPACK_IMPORTED_MODULE_22__categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_23_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_24__artist_list_artist_list_component__["a" /* ArtistListComponent */],
            __WEBPACK_IMPORTED_MODULE_25__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_26__art_category_art_category_component__["a" /* ArtCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_27__photography_category_photography_category_component__["a" /* PhotographyCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_28__painting_category_painting_category_component__["a" /* PaintingCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_29__work_on_paper_category_work_on_paper_category_component__["a" /* WorkOnPaperCategoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */], __WEBPACK_IMPORTED_MODULE_16__services_product_service__["a" /* ProductService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/art-category/art-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-4 {\n  margin: 30px;\n}\n\n.image {\n  width: 350px;\n  height: 200px;\n}\n\nimg {\n  border-radius: 7px;\n}\n\np {\n  text-align: center;\n  font-size: 18px;\n}\n\n.container {\n  /*padding: 30px;\n  margin: 30px;*/\n  text-align: center;\n}\n\n.space {\n  margin: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/art-category/art-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"my-4\">Filter by Category\n    <small>Art</small>\n  </h1>\n\n  <div class=\"row\" *ngFor=\"let product of products | filter : 'category' : product\">\n    <div class=\"col-lg-4 col-md-6 mb-4\">\n      <div class=\"thumbnail\" *ngIf=\"product.category === 'Art'\">\n        <img [src]=\"product.image\" class=\"image\">\n        <div class=\"caption\">\n          <h4>{{product.title}}</h4>\n            <span class=\"label label-default\">{{ product.category }}</span>\n          <p class=\"space\">\n            <a [routerLink]=\"['/','product', product._id]\" class=\"btn btn-default\" role=\"button\">See details</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/art-category/art-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtCategoryComponent = (function () {
    function ArtCategoryComponent(prodService) {
        this.prodService = prodService;
    }
    ArtCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prodService.getProducts()
            .subscribe(function (allProducts) { return _this.products = allProducts; });
    };
    return ArtCategoryComponent;
}());
ArtCategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-art-category',
        template: __webpack_require__("../../../../../src/app/art-category/art-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/art-category/art-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ArtCategoryComponent);

var _a;
//# sourceMappingURL=art-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/artist-list/artist-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searcher {\n    text-align: center;\n    margin: 20px;\n    font-size: 30px;\n  }\n\n  p {\n      margin: 10px;\n  }\n\nth {\n    text-align: center;\n}\n\n.container-table {\n    margin: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist-list/artist-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"my-4\">Artist List</h1>\n\n    <div class=\"searcher\">\n      <label for=\"products\"><i class=\"material-icons middle\">search</i></label>\n      <input [(ngModel)]=\"product\" placeholder=\"        Search..\" type=\"text\">\n    </div>\n  \n  <div class=\"container-table\">\n    <table class=\"table\">\n        <thead class=\"center\">\n          <tr>\n            <th>Name</th>\n            <th>Condition</th>\n            <th>Artwork</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let product of products | filter : 'artist' : product\">\n          <tr>\n            <td>{{ product.artist }}</td>\n            <td><span class=\"label label-default\">Artist</span></td>\n            <td><a [routerLink]=\"['../','product', product._id]\" class=\"btn btn-default btn-xs\" role=\"button\">See Artist Work</a></td>\n          </tr>\n        </tbody>\n      </table> \n    </div>\n  </div>\n  \n\n"

/***/ }),

/***/ "../../../../../src/app/artist-list/artist-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistListComponent = (function () {
    function ArtistListComponent(prodService) {
        this.prodService = prodService;
    }
    ArtistListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prodService.getProducts()
            .subscribe(function (allProducts) { return _this.products = allProducts; });
    };
    return ArtistListComponent;
}());
ArtistListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-artist-list',
        template: __webpack_require__("../../../../../src/app/artist-list/artist-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/artist-list/artist-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ArtistListComponent);

var _a;
//# sourceMappingURL=artist-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  magin: 30px;\n  padding: 30px;\n}\n\n.card-img {\n  width: 690px;\n  height: 300px;\n}\n\nimg {\n  border-radius: 7px;\n}\n\n.thumbnail {\n  padding: 20px;\n}\n\n.btn {\n  margin: 30px;\n  color: #555;\n}\n\n.my-4 {\n  text-align: center;\n  margin-bottom: 35px;\n}\n\n.h1{\n  text-transform: uppercase;\n}\n\na {\n  text-decoration: none;\n  color: #FFF;\n}\n\n.thumbnail-2 {\n  border-radius: 5px 5px 7px 7px;\n}\n\n.cat-1 {\n  background-image: url('/assets/arte.png');\n}\n\n.cat-2 {\n  background-image: url('/assets/painting2.png')\n}\n\n.cat-3 {\n  background-image: url('/assets/photography.png')\n}\n\n.cat-4 {\n  background-image: url('/assets/paper.png')\n}\n\n.title {\n  color: #FFF;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-md-2\"></div>\n\n        <div class=\"col-md-8\">\n          <h1 class=\"my-4\">All Categories</h1>\n\n          <div class=\"jumbotron cat-1 thumbnail-2\">\n            <h1 class=\"title\">Art</h1>\n            <p><a [routerLink]=\"['/categories/art']\" class=\"btn btn-default\">Show me more &rarr;</a></p>\n          </div>\n\n          <div class=\"jumbotron cat-2 thumbnail-2\">\n            <h1 class=\"title\">Painting</h1>\n            <p><a [routerLink]=\"['/categories/painting']\" class=\"btn btn-default\">Show me more &rarr;</a></p>\n          </div>\n\n          <div class=\"jumbotron cat-3 thumbnail-2\">\n            <h1 class=\"title\">Photography</h1>\n            <p><a [routerLink]=\"['/categories/photography']\" class=\"btn btn-default\">Show me more &rarr;</a></p>\n          </div>\n\n          <div class=\"jumbotron cat-4 thumbnail-2\">\n            <h1 class=\"title\">Work on Paper</h1>\n            <p><a [routerLink]=\"['/categories/work-on-paper']\" class=\"btn btn-default\">Show me more &rarr;</a></p>\n          </div>\n\n        </div>\n\n        <div class=\"col-md-2\"></div>\n\n      </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = (function () {
    function CategoriesComponent(service) {
        this.service = service;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getProducts()
            .subscribe(function (allProducts) { return _this.products = allProducts; });
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__("../../../../../src/app/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/categories/categories.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], CategoriesComponent);

var _a;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-product/edit-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-product/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form *ngIf=\"user.role=='Seller'\">\n  <h3> Edit Product </h3>\n  <label> title </label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.title\" name=\"title\"/>\n    <br>\n  <label> Description </label>\n  <input type=\"text-area\" [(ngModel)]=\"formInfo.description\" name=\"description\"/>\n    <br>\n  <button (click)=\"editProduct()\" class=\"btn btn-success\"> Save Changes </button>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/edit-product/edit-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditProductComponent = (function () {
    function EditProductComponent() {
    }
    EditProductComponent.prototype.ngOnInit = function () {
    };
    EditProductComponent.prototype.editProduct = function () {
    };
    return EditProductComponent;
}());
EditProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-product',
        template: __webpack_require__("../../../../../src/app/edit-product/edit-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-product/edit-product.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EditProductComponent);

//# sourceMappingURL=edit-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-user-profile/edit-user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center {\n    text-align: center;\n}\n\nform {\n    border-radius: 7px;\n    padding: 10px;\n}\n\n.account {\n    display: inline-block;\n}\n\n.form-group {\n    text-align: center;\n}\n\n.jumbotron {\n    width: 50%;\n    height: 50%;\n    margin-left: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-user-profile/edit-user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form-horizontal jumbotron center\">\n    <h2> Edit User profile </h2>\n        <div class=\"form-group\">\n            <label for=\"inputUsername\" >Username</label>\n          <div>\n            <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" class=\"form-control\" placeholder=\"Username\">\n          </div>\n        </div>\n      <div class=\"form-group\">\n        <label for=\"inputPassword\" >Password</label>\n        <div>\n          <input type=\"password\" [(ngModel)]=\"formInfo.password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"account\">\n          <button (click)=\"editProfile()\" class=\"btn btn-success\"> Save Changes </button>\n        </div>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-user-profile/edit-user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditUserProfileComponent = (function () {
    function EditUserProfileComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.formInfo = {
            username: "",
            password: "",
        };
    }
    EditUserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    };
    EditUserProfileComponent.prototype.editProfile = function () {
        var _a = this.formInfo, username = _a.username, password = _a.password;
        console.log(this.formInfo);
        // .map(response => response.json())
        // .subscribe(result => this.result =result)
    };
    return EditUserProfileComponent;
}());
EditUserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-user-profile',
        template: __webpack_require__("../../../../../src/app/edit-user-profile/edit-user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-user-profile/edit-user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], EditUserProfileComponent);

var _a, _b;
//# sourceMappingURL=edit-user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  text-align:center;\n  background-color: #FFF;\n  margin-top: 40px;\n  padding: 30px;\n  color: #666666;\n}\n\n\nli {\n  list-style-type: none;\n  display: inline-block;\n  margin: 10px;\n  vertical-align: middle;\n}\n\n.title {\n  color: #666666;\n\n}\n\na {\n  text-decoration: none;\n  color: #666666;\n}\n\nhr {\n  background-color: #666666;\n}\n\n.footer-copyright {}\n\n.margin {\n  margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer blue center-on-small-only\">\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n\n            <div class=\"col-md-4\">\n                <h5 class=\"title\">About AAA</h5>\n                <p>All About Art is a platform where everybody could find artworks and get in contact with their artists.</p>\n            </div>\n\n            <div class=\"col-md-4 hidden-xs\">\n                <h5 class=\"title\">Site Map</h5>\n              <ul>\n                <li><a [routerLink]=\"['/product-list']\">Artworks</a><li>\n      \t\t\t<li><a [routerLink]=\"['/categories']\">Categories</a><li>\n      \t\t\t<li><a [routerLink]=\"['/artist-list']\">Artists</a><li>\n              </ul>\n            </div>\n\n            <div class=\"col-md-4 hidden-xs\">\n                <h5 class=\"title\"><i class=\"material-icons\">email</i></h5>\n\n                <p><a href=\"mailto:lfbodereau@gmail.com\">hello@aaa.com</a></p>\n            </div>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"footer-copyright\">\n        <div class=\"container-fluid col-md-6 left\">\n            <img src=\"./assets/logo-aaart2.png\" class=\"navbar-brand logo\" [routerLink]=\"['/']\" />\n            <p class=\"left margin\">All About Art © 2017</p>\n        </div>\n        <div class=\"col-md-6 right\">\n              <ul>\n                <li><a href=\"https://github.com/luquifb\" target=\"_blank\"><i class=\"fa fa-github fa-lg\"></i></a><li>\n      \t\t\t<li><a href=\"https://twitter.com/luquifernandez\" target=\"_blank\"><i class=\"fa fa-twitter fa-lg\"></i></a><li>\n      \t\t\t<li><a href=\"https://www.linkedin.com/in/lucasfernandezb/\" target=\"_blank\"><i class=\"fa fa-linkedin fa-lg\"></i></a><li>\n              </ul>\n        </div>\n    </div>\n\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.navbar {\n  background-color: red;\n  margin: 0;\n  padding: 20px;\n}\n\na {\n  margin: 20px;\n  font-size: 20px;\n  color: #FFF;\n  text-decoration: none;\n}\n\n.searcher {\n  width: 200px;\n  height: 20px;\n}*/\n\nspan {\n  color: #FFF;\n}\n\n.logo {\n  margin-right: 20px;\n  height: 15%;\n  width: 15%;\n}\n\n.navbar-brand2 {\n  height: 10%;\n  width: 10%;\n  margin: 10px;\n}\n\n.navbar-brand {\n  height: 60%;\n  width: 60%;\n}\n\n.username {\n  text-transform: uppercase;\n  vertical-align: middle;\n}\n\n.divider-2 {\n  vertical-align: middle;\n}\n\n.caret {\n  color: #999;\n  margin: 0 5px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-2\" aria-expanded=\"true\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <!-- <a class=\"navbar-brand visible-xs\" [routerLink]=\"['/']\">AAA</a> -->\n      <img src=\"./assets/logo-aaart2.png\" class=\"navbar-brand logo hidden-xs\" [routerLink]=\"['/']\" />\n      <img src=\"./assets/logo-aaart2.png\" class=\"navbar-brand2 logo visible-xs\" [routerLink]=\"['/']\" />\n      \n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-2\" aria-expanded=\"true\"  *ngIf=\"!isLoggedIn\">\n        <ul class=\"nav navbar-nav navbar-right\">\n\n          <li><a [routerLink]=\"['/']\">Home</a></li>\n\n          <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\">Artworks<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a [routerLink]=\"['/product-list']\">All</a></li>\n              <li class=\"divider\"></li>\n              <li><a [routerLink]=\"['../','product-create']\">Upload Artwork</a></li>\n            </ul>\n          </li>\n\n          <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\">Categories<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a [routerLink]=\"['/categories']\">All</a></li>\n              <li class=\"divider\"></li>\n              <li><a [routerLink]=\"['/categories/art']\">Art</a></li>\n              <li class=\"divider\"></li>\n              <li><a [routerLink]=\"['/categories/photography']\">Photography</a></li>\n              <li class=\"divider\"></li>\n              <li><a [routerLink]=\"['/categories/painting']\">Painting</a></li>\n              <li class=\"divider\"></li>\n              <li><a [routerLink]=\"['/categories/work-on-paper']\">Work on Paper</a></li>\n            </ul>\n          </li>\n\n          <li><a [routerLink]=\"['/artist-list']\">Artists</a></li>\n\n          <li class=\"divider-2 hidden-xs\"><a>|</a></li>\n          <li *ngIf=\"user\" class=\"dropdown\">\n            <a class=\"dropdown-toggle username\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\">{{ user.username }}</a>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a [routerLink]=\"['/user']\">My Profile</a></li>\n              <li class=\"divider\"></li>\n              <li><a [routerLink]=\"['/user/edit-profile', user._id]\">Edit profile</a></li>\n              <li class=\"divider\"></li>\n              <li><a (click)=\"auth.logout().subscribe()\">Logout</a></li>\n            </ul>\n          </li>\n\n          <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\"><i class=\"material-icons\">fingerprint</i></a>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a [routerLink]=\"['/login']\">Login</a></li>\n            </ul>\n          </li>\n\n          <li class=\"divider-2 hidden-xs\"><a>|</a></li>\n\n          <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\">Not user?</a>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a [routerLink]=\"['/signup']\">Sign up</a></li>\n            </ul>\n          </li>\n\n        </ul>\n\n    </div>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  text-align: center;\n  padding: 30px;\n}\n\n.slider {\n  height: 500px;\n  width: 800px;\n}\n\n.btn {\n  margin: 10px;\n}\n\n.cta {\n  margin: 80px;\n}\n\n.card-img-top {\n  width: 255px;\n  height: 150px;\n  border-radius: 7px;\n}\n\n.jumbotron-image {\n  background-image: url(\"http://gabyherbstein.com/files/fotos/894.jpg\");\n   /*background-image: url(\"https://learnodo-newtonic.com/wp-content/uploads/2017/02/Metamorphosis-of-Narcissus-1937-Salvador-Dali.jpg\"); */\n}\n\n.display-3, .lead {\n  color: #FFF;\n}\n\n.card-text {\n  color: #555;\n}\n\n.heading {\n  margin: 30px;\n  color: #FFF;\n}\n\n.card-title {\n  margin: 20px;\n}\n\n.color {\n  border-radius: 7px;\n  height: 220px;\n  color: #444444;\n  padding: 10px;\n  \n}\n\nsmall {\n  font-size: 18px;\n}\n\n.white {\n  color: #666;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <header class=\"jumbotron jumbotron-image my-4\">\n    <h1 class=\"display-3\">ALL ABOUT ART</h1>\n    <h4 class=\"heading\">Let's AAA inspire you and enjoy the art you are looking for!</h4>\n    <a [routerLink]=\"['/product-list']\" class=\"btn btn-default btn-lg\">See all artworks</a>\n  </header>\n\n\n  <h2>Trending <i class=\"material-icons\">dashboard</i></h2>\n\n  <div class=\"row text-center\">\n\n    <div class=\"col-lg-3 col-md-6 mb-4\">\n      <div class=\"thumbnail\">\n        <img class=\"card-img-top\" src=\"./assets/art1.png\" alt=\"\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Fils Fine Art</h4>\n          <p class=\"card-text\">Christian Megert - Farbduett mit Spiegel</p>\n        </div>\n        <div class=\"card-footer\">\n          <a href=\"./product/59df9a7238982b0f3fac16e0\" class=\"btn btn-default\">See Details</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 mb-4\">\n      <div class=\"thumbnail\">\n        <img class=\"card-img-top\" src=\"./assets/art2.png\" alt=\"\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Wallspace</h4>\n          <p class=\"card-text\">\"Central Avenue\" Kymm Swank Solo Show</p>\n        </div>\n        <div class=\"card-footer\">\n          <a href=\"./product/59df9a7238982b0f3fac16e1\" class=\"btn btn-default\">See Details</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 mb-4\">\n      <div class=\"thumbnail\">\n        <img class=\"card-img-top\" src=\"./assets/art3.png\" alt=\"\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">After Bansky</h4>\n          <p class=\"card-text\">Screenprint in colours on wove paper</p>\n        </div>\n        <div class=\"card-footer\">\n          <a href=\"./product/59df9a7238982b0f3fac16e2\" class=\"btn btn-default\">See Details</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 mb-4\">\n      <div class=\"thumbnail\">\n        <img class=\"card-img-top\" src=\"./assets/art4.png\" alt=\"\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Eduardo Hoffmann</h4>\n          <p class=\"card-text\">Mixed technique on canvas</p>\n        </div>\n        <div class=\"card-footer\">\n          <a href=\"./product/59df9a7238982b0f3fac16e3\" class=\"btn btn-default\">See Details</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n    <hr>\n\n  <div class=\"row text-center cta\">\n    <div class=\"col-md-8\">\n      <h4>Discover worldwide art</h4>\n      <p class=\"hidden-xs\">Art is a diverse range of human activities in creating visual, auditory or performing artifacts (artworks), expressing the author's imaginative or technical skill, intended to be appreciated for their beauty or emotional power.</p>\n    </div>\n    <div class=\"col-md-4\">\n      <a class=\"btn btn-default btn-lg btn-block\" [routerLink]=\"['/categories']\">Show me more</a>\n    </div>\n  </div>\n\n    <hr>\n\n  <div class=\"jumbotron color\">\n    <blockquote class=\"blockquote\">\n        <h4 class=\"white\">Painting is a language of its own. You cannot interpret one form of expression with another form of expression.</h4>\n        <small>Marcel Duchamp</small>\n    </blockquote>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center { \n    text-align: center;\n}\n\nform {\n    border-radius: 7px;\n    padding: 10px;\n}\n\n.account {\n    display: inline-block;\n}\n\n.form-group {\n    text-align: center;\n}\n\n.jumbotron {\n    width: 60%;\n    height: 50%;   \n    display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form-horizontal jumbotron center\">\n      <h2> Login </h2>\n        <div class=\"form-group\">\n            <label for=\"inputUsername\" >Username</label>\n          <div>\n            <input type=\"text\" [(ngModel)]=\"formInfo.username\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n          </div>\n        </div>\n      <div class=\"form-group\">\n        <label for=\"inputPassword\" >Password</label>\n        <div>\n          <input type=\"password\" [(ngModel)]=\"formInfo.password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"account\">\n          <button (click)=\"login()\" class=\"btn btn-success\"> Login </button>\n          <div>\n            <p>Dont have an account?</p>\n            <button [routerLink]=\"['/signup']\" class=\"btn btn-default btn-sm\">Sign up</button>\n          </div>\n        </div>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginformComponent = (function () {
    function LoginformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
    };
    LoginformComponent.prototype.login = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            this.auth.login(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe(function () { return _this.router.navigate(['/user']); });
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loginform',
        template: __webpack_require__("../../../../../src/app/loginform/loginform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginform/loginform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginformComponent);

var _a, _b;
//# sourceMappingURL=loginform.component.js.map

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"alert alert-dismissible alert-success\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n      Hope to <strong>see you</strong> back soon!\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LogoutComponent);

//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/painting-category/painting-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-4 {\n  margin: 30px;\n}\n\n.image {\n  width: 350px;\n  height: 200px;\n}\n\nimg {\n  border-radius: 7px;\n}\n\np {\n  text-align: center;\n  font-size: 18px;\n}\n\n.container {\n  /*padding: 30px;\n  margin: 30px;*/\n  text-align: center;\n}\n\n.space {\n  margin: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/painting-category/painting-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"my-4\">Filter by Category\n    <small>Painting</small>\n  </h1>\n\n  <div class=\"row\" *ngFor=\"let product of products | filter : 'category' : product\">\n    <div class=\"col-lg-4 col-md-6 mb-4\">\n      <div class=\"thumbnail\" *ngIf=\"product.category === 'Painting'\">\n        <img [src]=\"product.image\" class=\"image\">\n        <div class=\"caption\">\n          <h4>{{product.title}}</h4>\n            <span class=\"label label-default\">{{ product.category }}</span>\n          <p class=\"space\">\n            <a [routerLink]=\"['/','product', product._id]\" class=\"btn btn-default\" role=\"button\">See details</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/painting-category/painting-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaintingCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaintingCategoryComponent = (function () {
    function PaintingCategoryComponent(prodService) {
        this.prodService = prodService;
    }
    PaintingCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prodService.getProducts()
            .subscribe(function (allProducts) { return _this.products = allProducts; });
    };
    return PaintingCategoryComponent;
}());
PaintingCategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-painting-category',
        template: __webpack_require__("../../../../../src/app/painting-category/painting-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/painting-category/painting-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], PaintingCategoryComponent);

var _a;
//# sourceMappingURL=painting-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/photography-category/photography-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-4 {\n  margin: 30px;\n}\n\n.image {\n  width: 350px;\n  height: 200px;\n}\n\nimg {\n  border-radius: 7px;\n}\n\np {\n  text-align: center;\n  font-size: 18px;\n}\n\n.container {\n  /*padding: 30px;\n  margin: 30px;*/\n  text-align: center;\n}\n\n.space {\n  margin: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photography-category/photography-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"my-4\">Filter by Category\n    <small>Photography</small>\n  </h1>\n\n  <div class=\"row\" *ngFor=\"let product of products | filter : 'category' : product\">\n    <div class=\"col-lg-4 col-md-6 mb-4\">\n      <div class=\"thumbnail\" *ngIf=\"product.category === 'Photography'\">\n        <img [src]=\"product.image\" class=\"image\">\n        <div class=\"caption\">\n          <h4>{{product.title}}</h4>\n            <span class=\"label label-default\">{{ product.category }}</span>\n          <p class=\"space\">\n            <a [routerLink]=\"['/','product', product._id]\" class=\"btn btn-default\" role=\"button\">See details</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/photography-category/photography-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotographyCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotographyCategoryComponent = (function () {
    function PhotographyCategoryComponent(prodService) {
        this.prodService = prodService;
    }
    PhotographyCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prodService.getProducts()
            .subscribe(function (allProducts) { return _this.products = allProducts; });
    };
    return PhotographyCategoryComponent;
}());
PhotographyCategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-photography-category',
        template: __webpack_require__("../../../../../src/app/photography-category/photography-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/photography-category/photography-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], PhotographyCategoryComponent);

var _a;
//# sourceMappingURL=photography-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        if (!value)
            return items;
        var myPattern = new RegExp(value, 'i');
        return items.filter(function (it) { return it[field].match(myPattern); });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/product-create/product-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center { \n    text-align: center;\n}\n\nform {\n    border-radius: 7px;\n    padding: 10px;\n}\n\n.account {\n    display: inline-block;\n}\n\n.form-group {\n    text-align: center;\n}\n\n.jumbotron {\n    width: 60%;\n    height: 50%;   \n    display: inline-block;\n}\n\nbutton {\n    margin: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-create/product-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form-horizontal jumbotron center\" enctype=\"multipart/form-data\">\n        <h3>Add new artwork</h3>\n        <div class=\"form-group\">\n            <label for=\"inputText\">Title</label>\n            <div>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newProd.title\" name=\"title\" placeholder=\"Title\">\n            </div>\n          </div>\n        <div class=\"form-group\">\n        <label for=\"inputArtist\">Artist</label>\n        <div>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newProd.artist\" name=\"artist\" placeholder=\"Artist\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"inputText\">Price</label>\n          <div>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"newProd.price\" name=\"price\" placeholder=\"Price\">\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"textArea\">Description</label>\n          <div>\n            <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"newProd.description\" name=\"description\"></textarea>\n            <span class=\"help-block\">Add your artwork description here.</span>\n          </div>\n        </div>\n      <div class=\"form-group\">\n        <label for=\"select-category\">Category</label>\n        <div>\n          <select class=\"form-control\" id=\"select-category\" [(ngModel)]=\"newProd.category\" name=\"category\">\n            <option>Art</option>\n            <option>Photography</option>\n            <option>Painting</option>\n            <option>Work on paper</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"inputFile\">Image</label>\n          <div>\n            <input type=\"file\" name=\"file\" value=\"file\" ng2FileSelect class=\"form-control\" [uploader]=\"uploader\" />\n          </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div>\n          <button class=\"btn\" (click)=\"addProduct()\" class=\"btn btn-success\">Add New Artwork</button>\n          <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n        </div>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-create/product-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/products/create-product";
var ProductCreateComponent = (function () {
    function ProductCreateComponent(service, router) {
        this.service = service;
        this.router = router;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({
            url: BASEURL
        });
        this.newProd = {
            title: "",
            price: "",
            artist: "",
            description: "",
            category: "",
            image: ""
        };
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getProducts().subscribe(function (products) {
            _this.products = products;
        });
        this.uploader.onSuccessItem = function (item, response) {
            _this.feedback = JSON.parse(response).message;
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.feedback = JSON.parse(response).message;
        };
    };
    ProductCreateComponent.prototype.addProduct = function (title, price, artist, description, category, image) {
        // const {title, price, artist, description, category, image} = this.newProd;
        // this.service.newProduct(title, price, category, artist, description, image)
        var _this = this;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('title', _this.newProd.title);
            form.append('price', _this.newProd.price);
            form.append('artist', _this.newProd.artist);
            form.append('description', _this.newProd.description);
            form.append('category', _this.newProd.category);
        };
        this.uploader.uploadAll();
        console.log("entro el form");
        this.router.navigate(['/product-list']);
        this.uploader.onCompleteItem = function (res) { return _this.service.newProduct(title, price, artist, description, category, image)
            .map(function (product) { return console.log(product); })
            .subscribe(function () {
            console.log("SUSCRIBE");
            _this.router.navigate(['/product-list']);
        }); };
    };
    return ProductCreateComponent;
}());
ProductCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-create',
        template: __webpack_require__("../../../../../src/app/product-create/product-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-create/product-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProductCreateComponent);

var _a, _b;
//# sourceMappingURL=product-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container {\n  /*padding: 30px;\n  margin: 30px;*/\n  text-align: center;\n}\n\n.image {\n  width: 200px;\n  height: 300px;\n}\n\np {\n  text-align: center;\n  font-size: 18px;\n}\n\n.detail-image {\n  width: 50px;\n  height: 50px;\n}\n\n.title {\n  text-align: left;\n}\n\n.img {\n  width: 600px;\n  height: 400px;\n}\n\n.img-fluid {\n  width: 250px;\n  height: 150px;\n}\n\nimg {\n  border-radius: 7px;\n}\n\n.title-2 {\n  margin: 60px;\n}\n\n.modal-body {\n  display: inline-block;\n}\n\n.modal-title {\n  color: #777;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" *ngIf='productToShow'>\n\n  <h1 class=\"title\">{{ productToShow.title }}\n    <small>{{ productToShow.artist }}</small>\n  </h1>\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <img [src]=\"productToShow.image\" class=\"img\">\n    </div>\n\n    <div class=\"col-md-4\">\n      <h3>About this artwork</h3>\n        <p>{{productToShow.description}}</p>\n      <h3>Price</h3>\n        <p>$ {{productToShow.price}}</p>\n\n        <p>\n          <a href=\"#buyModal\" data-toggle=\"modal\" class=\"btn btn-default btn-lg\" role=\"button\">Contact Artist</a>\n          <!-- <a *ngIf=\"user.role==='Seller'\" [routerLink]=\"['/product/edit', id]\" class=\"btn btn-default\">Edit Product</a> -->\n        </p>\n        <div class=\"user-info hidden-xs\">\n            <a (click)=\"deleteProduct()\" class=\"btn btn-sm btn-danger\" role=\"button\">Delete</a>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"modal\" id=\"buyModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h3 class=\"modal-title\">{{productToShow.artist}}</h3>\n        </div>\n        <div class=\"modal-body\">\n          <h5>Get in touch:</h5>\n          <p><em>artist@aaart.co</em></p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <h3 class=\"title-2\">Other Artworks:\n      <span class=\"label label-default\">{{ productToShow.category }}</span>\n  </h3>\n\n  <div class=\"row\" >\n\n    <div class=\"col-md-3 col-sm-6 mb-4\">\n      <a href=\"./product/59df9a7238982b0f3fac16d8\">\n        <img class=\"img-fluid\" src=\"https://az616578.vo.msecnd.net/files/2017/03/05/636242731472300906-828169648_MODERN%20ARRRTT.png\" alt=\"\">\n      </a>\n    </div>\n\n    <div class=\"col-md-3 col-sm-6 mb-4\">\n      <a href=\"./product/59df9a7238982b0f3fac16da\">\n        <img class=\"img-fluid\" src=\"http://4fs63j47srdk3eoohz18a6ij182.wpengine.netdna-cdn.com/wp-content/uploads/INDIA-10841-900x600.jpg\" alt=\"\">\n      </a>\n    </div>\n\n    <div class=\"col-md-3 col-sm-6 mb-4\">\n      <a href=\"./product/59df9a7238982b0f3fac16e3\">\n        <img class=\"img-fluid\" src=\"https://d32dm0rphc51dk.cloudfront.net/DDGTrZ0UBLS9AdytythNOg/larger.jpg\" alt=\"\">\n      </a>\n    </div>\n\n    <div class=\"col-md-3 col-sm-6 mb-4\">\n      <a href=\"./product/59df9a7238982b0f3fac16db\">\n        <img class=\"img-fluid\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBAz-WkBs-b-XWsHmKUyaEp5P4JwRRej3TnRv73qUBXae5y895w\" alt=\"\">\n      </a>\n    </div>\n  </div>\n\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, service, auth, router) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.auth = auth;
        this.router = router;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
        this.route.params
            .mergeMap(function (p) { return _this.service.getProduct(p.id); })
            .subscribe(function (product) { return _this.productToShow = product; });
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent.prototype.goHome = function () {
        this.router.navigate(["home"]);
    };
    // buy(){
    //   this.router.navigate(["cart"])
    // }
    ProductDetailComponent.prototype.editProduct = function (product) {
        // this.router.navigate(["product/edit/id"])
        return this.http.put(this.BASEURL + "/products/edit/" + product._id, product)
            .map(function (res) { return res.json(); });
    };
    ProductDetailComponent.prototype.deleteProduct = function () {
        var _this = this;
        this.service.deleteProduct(this.productToShow._id)
            .subscribe(function () { return _this.router.navigate(['/product-list']); });
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-detail',
        template: __webpack_require__("../../../../../src/app/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-detail/product-detail.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProductDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-2 {\n  display: inline-block;\n  margin: 15px;\n}\n\n.image {\n  width: 350px;\n  height: 200px;\n}\n\nimg {\n  border-radius: 7px;\n}\n\np {\n  text-align: center;\n  font-size: 18px;\n}\n\n.container {\n  /*padding: 30px;\n  margin: 30px;*/\n  text-align: center;\n}\n\n\n.searcher {\n  text-align: center;\n  margin: 20px;\n  font-size: 30px;\n}\n\n.list {\n  display: inline-block;\n}\n\n.categories {\n  text-align: center;\n  padding: 10px 0;\n}\n\nhr{\n  border:         none;\n  border-left:    1px solid #777;\n  height:         80vh;\n  width:          1px;\n}\n\n.middle {\n  vertical-align: middle;\n}\n\na {\n  color: #777;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"my-4\">Product List\n    <small><a [routerLink]=\"['/categories']\">All categories</a></small>\n  </h1>\n\n  <div class=\"searcher\">\n    <label for=\"products\"><i class=\"material-icons middle\">search</i></label>\n    <input [(ngModel)]=\"product\" placeholder=\"        Search..\" type=\"text\">\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-6 mb-4\" *ngFor=\"let product of products | filter : 'title' : product\">\n      <div class=\"thumbnail\">\n        <img [src]=\"product.image\" class=\"image\">\n        <div class=\"caption\">\n          <h4>{{product.title}}</h4>\n            <span class=\"label label-default\">{{ product.category }}</span>\n          <p>${{product.price}}</p>\n          <p>\n            <a [routerLink]=\"['../','product', product._id]\" class=\"btn btn-default\" role=\"button\">See details</a>\n            <a [routerLink]=\"['/artist-list']\" class=\"btn btn-default\" role=\"button\">Author</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"categories\">\n    <a [routerLink]=\"['../','product-create']\" class=\"btn btn-default\">Upload Artwork</a>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = (function () {
    function ProductListComponent(prodService) {
        this.prodService = prodService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prodService.getProducts()
            .subscribe(function (allProducts) { return _this.products = allProducts; });
    };
    ProductListComponent.prototype.getProductData = function (product) {
        console.log(this.products);
        // this.prodService.getProduct(this.products.id)
        // .subscribe(productData => this.products = productData)
        // const selectedIds = this.products.map(({ id }) => id);
        // console.log(selectedIds);
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-list/product-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ProductListComponent);

var _a;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_create_product_create_component__ = __webpack_require__("../../../../../src/app/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_user_profile_edit_user_profile_component__ = __webpack_require__("../../../../../src/app/edit-user-profile/edit-user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/edit-product/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__art_category_art_category_component__ = __webpack_require__("../../../../../src/app/art-category/art-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__photography_category_photography_category_component__ = __webpack_require__("../../../../../src/app/photography-category/photography-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__painting_category_painting_category_component__ = __webpack_require__("../../../../../src/app/painting-category/painting-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__work_on_paper_category_work_on_paper_category_component__ = __webpack_require__("../../../../../src/app/work-on-paper-category/work-on-paper-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__artist_list_artist_list_component__ = __webpack_require__("../../../../../src/app/artist-list/artist-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__product_list_product_list_component__["a" /* ProductListComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__["a" /* UserprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'user/edit-profile/:id', component: __WEBPACK_IMPORTED_MODULE_8__edit_user_profile_edit_user_profile_component__["a" /* EditUserProfileComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__["a" /* LoginformComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signupform_signupform_component__["a" /* SignupformComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_10__categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'categories/art', component: __WEBPACK_IMPORTED_MODULE_11__art_category_art_category_component__["a" /* ArtCategoryComponent */] },
    { path: 'categories/photography', component: __WEBPACK_IMPORTED_MODULE_12__photography_category_photography_category_component__["a" /* PhotographyCategoryComponent */] },
    { path: 'categories/painting', component: __WEBPACK_IMPORTED_MODULE_13__painting_category_painting_category_component__["a" /* PaintingCategoryComponent */] },
    { path: 'categories/work-on-paper', component: __WEBPACK_IMPORTED_MODULE_14__work_on_paper_category_work_on_paper_category_component__["a" /* WorkOnPaperCategoryComponent */] },
    { path: 'product-list', component: __WEBPACK_IMPORTED_MODULE_5__product_list_product_list_component__["a" /* ProductListComponent */] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_6__product_detail_product_detail_component__["a" /* ProductDetailComponent */] },
    { path: 'product/edit/:id', component: __WEBPACK_IMPORTED_MODULE_9__edit_product_edit_product_component__["a" /* EditProductComponent */] },
    { path: 'product-create', component: __WEBPACK_IMPORTED_MODULE_7__product_create_product_create_component__["a" /* ProductCreateComponent */] },
    { path: 'artist-list', component: __WEBPACK_IMPORTED_MODULE_15__artist_list_artist_list_component__["a" /* ArtistListComponent */] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/auth";
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        console.log("AUTH ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    AuthService.prototype.signup = function (username, password, name, email, pic_path, role) {
        var _this = this;
        return this.http.post(BASEURL + "/signup", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(BASEURL + "/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(BASEURL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(null); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASEURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.update = function (productId) {
        var _this = this;
        return this.http.put(BASEURL + "/" + this.user["_id"], { productId: productId }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (response_object) {
            _this.emitUserLoginEvent(response_object.user);
        })
            .catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/isLoggedIn.canactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var timeout = function (nS) { return new Promise(function (resolve) { return setTimeout(resolve, nS * 1000); }); };
var IsLoggedInService = (function () {
    function IsLoggedInService(auth) {
        this.auth = auth;
    }
    IsLoggedInService.prototype.canActivate = function () {
        console.log("Checking can activate");
        //return timeout(5).then(() => true);
        //return this.auth.isLoggedIn().map(user => true)
        return this.auth.getUser() ? true : false;
        //return false;
    };
    return IsLoggedInService;
}());
IsLoggedInService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], IsLoggedInService);

var _a;
//# sourceMappingURL=isLoggedIn.canactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/products";
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.options = { withCredentials: true };
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(BASEURL + "/all-products")
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(BASEURL + "/" + id)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.newProduct = function (title, price, category, artist, description, image) {
        return this.http.post(BASEURL + "/create-product", { title: title, price: price, category: category, artist: artist, description: description, image: image }, this.options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(BASEURL + "/delete/" + id)
            .map(function (res) { return res.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center { \n    text-align: center;\n}\n\nform {\n    border-radius: 7px;\n    padding: 10px;\n}\n\n.account {\n    display: inline-block;\n}\n\n.form-group {\n    text-align: center;\n}\n\n.jumbotron {\n    width: 60%;\n    height: 50%;   \n    display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form class=\"form-horizontal jumbotron center\">\n        <h2> Signup </h2>\n        <div class=\"form-group\">\n              <label for=\"inputUsername\">Username</label>\n            <div>\n              <input type=\"text\" [(ngModel)]=\"formInfo.username\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n            </div>\n          </div>\n        <div class=\"form-group\">\n          <label for=\"inputPassword\">Password</label>\n          <div>\n            <input type=\"password\" [(ngModel)]=\"formInfo.password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"inputName\">Name</label>\n          <div>\n            <input type=\"text\" [(ngModel)]=\"formInfo.name\" class=\"form-control\" name=\"name\" placeholder=\"Name\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"inputEmail\">Email</label>\n            <div>\n              <input type=\"email\" [(ngModel)]=\"formInfo.email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"account\">\n              <button (click)=\"signup()\" class=\"btn btn-success\"> Signup </button>\n            <div>\n                <p>Do you have an account?</p>\n                <button [routerLink]=\"['/login']\" class=\"btn btn-default btn-sm\">Login</button>\n            </div>\n          </div>\n        </div>\n    </form>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupformComponent = (function () {
    function SignupformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: "",
            name: "",
            pic_path: "",
            email: "",
            role: ""
        };
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signup = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password, name = _a.name, email = _a.email, pic_path = _a.pic_path, role = _a.role;
        if (username != "" && password != "") {
            this.auth.signup(username, password, name, email, pic_path, role)
                .map(function (user) { return console.log(user); })
                .subscribe(function () { return _this.router.navigate(['/user']); });
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return SignupformComponent;
}());
SignupformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signupform',
        template: __webpack_require__("../../../../../src/app/signupform/signupform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signupform/signupform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupformComponent);

var _a, _b;
//# sourceMappingURL=signupform.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".avatar {\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  /* border: 1px solid #999; */\n}\n\n.title {\n  text-align: left;\n}\n\n/*.container-2 {\n  display: inline-block;\n  margin: 15px;\n}\n\n.image {\n  width: 350px;\n  height: 200px;\n}\n\nimg {\n  border-radius: 7px;\n}\n\np {\n  text-align: center;\n  font-size: 18px;\n}\n\n.container {\n\n  text-align: center;\n}\n\n\n.searcher {\n  text-align: center;\n  margin: 20px;\n  font-size: 30px;\n}\n\n.list {\n  display: inline-block;\n}\n\n.categories {\n  text-align: center;\n  padding: 10px 0;\n}\n\nhr{\n  border:         none;\n  border-left:    1px solid #777;\n  height:         80vh;\n  width:          1px;\n}\n\n.middle {\n  vertical-align: middle;\n}\n\na {\n  color: #777;\n}*/\n\n.user-data {\n  font-size: 18px;\n  display: inline-block;\n}\n\n.user-info {\n  margin: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf='user'>\n    <div *ngIf=\"!user\">\n      <h3>You need to log in</h3>\n      <a [routerLink]=\"['/login']\" class=\"btn btn-default\">Login</a>\n    </div>\n\n  <div *ngIf=\"user\">\n    <h1 class=\"title\">Name:\n      <small>{{ user.username }}</small>\n    </h1>\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <img src=\"{{user.pic_path}}\" class=\"avatar\" />\n    </div>\n\n      <div class=\"col-lg-4 col-md-6 mb-4\">\n        <div class=\"thumbnail\">\n          <div class=\"user-info\">\n            <h4>Username: <span class=\"user-data\">{{user.username}}</span></h4>\n          </div>\n          <div class=\"user-info\">\n            <h4>E-mail: <span class=\"user-data\">{{user.email}}</span></h4>\n          </div>\n          <div class=\"user-info\">\n            <h4>Member since: <span class=\"user-data\">{{ user.created_at | date:'dd/MM/yyyy' }}</span></h4>\n          </div>\n          <div class=\"user-info\">\n            <h4>Role: <span class=\"label label-default\">{{ user.role }}</span></h4>\n          </div>\n          <div class=\"user-info\">\n            <p>\n              Are you tired of us?\n              <button (click)=\"delete()\" class=\"btn btn-danger btn-xs\"> Delete my Profile </button>\n            </p>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserprofileComponent = (function () {
    function UserprofileComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserprofileComponent);

var _a, _b;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/app/work-on-paper-category/work-on-paper-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-4 {\n  margin: 30px;\n}\n\n.image {\n  width: 350px;\n  height: 200px;\n}\n\nimg {\n  border-radius: 7px;\n}\n\np {\n  text-align: center;\n  font-size: 18px;\n}\n\n.container {\n  /*padding: 30px;\n  margin: 30px;*/\n  text-align: center;\n}\n\n.space {\n  margin: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/work-on-paper-category/work-on-paper-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"my-4\">Filter by Category\n    <small>Work on Paper</small>\n  </h1>\n\n  <div class=\"row\" *ngFor=\"let product of products | filter : 'category' : product\">\n    <div class=\"col-lg-4 col-md-6 mb-4\">\n      <div class=\"thumbnail\" *ngIf=\"product.category === 'Work on paper'\">\n        <img [src]=\"product.image\" class=\"image\">\n        <div class=\"caption\">\n          <h4>{{product.title}}</h4>\n            <span class=\"label label-default\">{{ product.category }}</span>\n          <p class=\"space\">\n            <a [routerLink]=\"['/','product', product._id]\" class=\"btn btn-default\" role=\"button\">See details</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/work-on-paper-category/work-on-paper-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkOnPaperCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkOnPaperCategoryComponent = (function () {
    function WorkOnPaperCategoryComponent(prodService) {
        this.prodService = prodService;
    }
    WorkOnPaperCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prodService.getProducts()
            .subscribe(function (allProducts) { return _this.products = allProducts; });
    };
    return WorkOnPaperCategoryComponent;
}());
WorkOnPaperCategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-work-on-paper-category',
        template: __webpack_require__("../../../../../src/app/work-on-paper-category/work-on-paper-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/work-on-paper-category/work-on-paper-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], WorkOnPaperCategoryComponent);

var _a;
//# sourceMappingURL=work-on-paper-category.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    BASEURL: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map