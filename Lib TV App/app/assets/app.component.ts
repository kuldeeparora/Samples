
// import statement allows us to use exported members from external modules
// can import from third party library, our own modules, or from Angular
// Component in Angular - identify the member we need
// '@angular/core' - path of the module containing 'Component' member in this case - module path enclose in quotes
import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from "@angular/http";
import 'rxjs/Rx';
import {ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES, Router} from "@angular/router";

import {ProductListComponent} from "../products/product-list.component";
import {ProductService} from "../products/product.service";
import {WelcomeComponent} from "../home/welcome.component";
import {ProductDetailComponent} from "../products/product-detail.component";

// Decorator or component decorator - A function that add MetaData to a class, its member or its method arguments. Prefex with @ & Suffix with ()
// Angular provides build in Decorators
// No semilcolon to decorators
// selector - directive name use to reference in html
// template(view layout) - a component should always have a template
// {{ }} binding
@Component({
  selector: 'my-app',
  template: `<div>
        <nav class='navbar navbar-light bg-faded'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li class="nav-item"><a class="nav-link" [routerLink]="['/welcome']">Home</a></li>
                    <li class="nav-item"><a class="nav-link" [routerLink]="['/products']">
                     PP 
                     </a></li>
                </ul>
            </div>
            <router-outlet></router-outlet>
        </nav>
     </div>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

@Routes([
  { path: '/', component: WelcomeComponent },
  { path: '/welcome', component: WelcomeComponent },
  { path: '/products', component: ProductListComponent },
  { path: '/product/:id', component: ProductDetailComponent }
])


// Class defined with class name
// Class Name - AppComponent in below example - Use PascalCasing
// Append Component to the name of class - AppComponent
// export keyword - make available to use other component in application
// pageTitle is property with camelCase
// add appropriate datastype - eg string is DataType in this case
export class AppComponent {
  pageTitle: string = 'TV Lib';
  constructor(private router: Router) {}
}
