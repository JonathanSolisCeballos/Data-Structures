class Math{
    constructor(x){
        this.x = x
    }
}

//iife useClass

(function(){
    let t = new Math(0.3);
    console.log(t);
    t.x = -1;
    console.log(t.x);
})()