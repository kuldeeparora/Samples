"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import statement allows us to use exported members from external modules
// can import from third party library, our own modules, or from Angular
// Component in Angular - identify the member we need
// '@angular/core' - path of the module containing 'Component' member in this case - module path enclose in quotes
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/Rx');
var router_1 = require("@angular/router");
var product_list_component_1 = require("../products/product-list.component");
var product_service_1 = require("../products/product.service");
var welcome_component_1 = require("../home/welcome.component");
var product_detail_component_1 = require("../products/product-detail.component");
// Decorator or component decorator - A function that add MetaData to a class, its member or its method arguments. Prefex with @ & Suffix with ()
// Angular provides build in Decorators
// No semilcolon to decorators
// selector - directive name use to reference in html
// template(view layout) - a component should always have a template
// {{ }} binding
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.pageTitle = 'TV Lib';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n        <nav class='navbar navbar-light bg-faded'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n                    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/welcome']\">Home</a></li>\n                    <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/products', product.productId]\">\n                     {{product.productName}} \n                     </a></li>\n                </ul>\n            </div>\n        </nav>\n     </div>",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [product_service_1.ProductService, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/', component: welcome_component_1.WelcomeComponent },
            { path: '/welcome', component: welcome_component_1.WelcomeComponent },
            { path: '/products', component: product_list_component_1.ProductListComponent },
            { path: '/product/:id', component: product_detail_component_1.ProductDetailComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map