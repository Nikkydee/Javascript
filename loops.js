//loops //for (statm1,statm2;statm3;)
//i=i=1, i++,
for(let i =0; i<5; i=i+1){
    console.log("HelloWorld")
}
//for of
var cars =["Volvo","Toyota", "Tesla"]
for(let car of cars){
    console.log(car)
    if(car =='Toyota'){
       break

    }   
}

//es6 syntax
cars.forEach(car=>{
    console.log(car)
 })
