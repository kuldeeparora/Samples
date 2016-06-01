
// import statement allows us to use exported members from external modules
// can import from third party library, our own modules, or from Angular
// Component in Angular - identify the member we need
// '@angular/core' - path of the module containing 'Component' member in this case
import { Component } from '@angular/core';

// Decorator or component decorator - A function that add MetaData to a class, its member or its method arguments. Prefex with @
// Angular provides build in Decorators
// No semilcolon to decorators
// selector - directive name use to reference in html
// template(view layout) - a component should always have a template
// {{ }} binding

@Component({
  selector: 'my-app',
  template: '<div><h1>{{pageTitle}}</h1> <div> My First Angular 2 App</div></div>'
})

// Class defined with class name
// Class Name - AppComponent in below example
// export keyword - make available to use other component in application
// pageTitle is property
// string is DataType
export class AppComponent {
  pageTitle: string = 'My first Angular';
}
