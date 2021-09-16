// pass by value => not affect to outside
function change(b){
    b=2 //what happened inside this func, didn't impact A at all
}
const a = 1
change(a)

// pass by reference => affect to outside, will be reflected outside of the function
function changeObj(d){
    d.prop1 = function(){}
    d.prop2 = {}
}

let c = {}
c.prop1 = {}
changeObj(c)
console.log(c)

// result : { prop1: [Function], prop2: {} }

// the property has been changed to a function 
// and new property has been added because d 
// parameter points to the same memory location that c points to