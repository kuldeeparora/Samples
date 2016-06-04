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
var product_list_component_1 = require("../products/product-list.component");
// Decorator or component decorator - A function that add MetaData to a class, its member or its method arguments. Prefex with @ & Suffix with ()
// Angular provides build in Decorators
// No semilcolon to decorators
// selector - directive name use to reference in html
// template(view layout) - a component should always have a template
// {{ }} binding
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'My first Angular 2';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n                <h1>{{pageTitle}}</h1>\n                 <pm-products> </pm-products>\n              </div>",
            directives: [product_list_component_1.ProductListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map