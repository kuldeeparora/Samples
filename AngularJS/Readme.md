
AngularJS


Directives - 
4 ways to define directive
    <my-dir></my-dir> // custom element
    <span my-dir="exp"></span> // can use as an attribute
        <span my:dir>
        <span my_dir>
        <span data-my-dir> // can use for validation
    <!-- directive: my-dir exp -->
    <span class="my-dir: exp;"></span>

restrict
    A - attribute
    E - element
    C - classes
    M - comments 
    
    
Types of Directives
    Components - custom directive or widget
    Decorators - ng-click, ng-show, ng-hide, ng-app 
    Structural/Templating - ng-repeat
    
    
Scope
    Shared Scope - If we don't assign scope in directive than both(controller and directive) can have same id scope
    Inherited Scope - Item can live on directive scope not on parent scope, Encapsulate data in directive
        true - 2 different scope(Child scope has a parent property)
        false - default scope
    Isolated Scope - not visible to parent scope
        scope - {} - 