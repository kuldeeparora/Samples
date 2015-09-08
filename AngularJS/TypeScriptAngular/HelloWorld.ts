class Car{
    engine: string;

    constructor(engine: string){
        this.engine = engine;
    }

    start(){
        console.log("Start this car" + this.engine);
    }

    stop(){
        console.log("Stop this car" + this.engine);
    }
}

window.onload = function(){
    var car = new Car('V8');
    car.start();
    car.stop();
};