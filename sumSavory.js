import shoppingCart from "./products.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
let sum = arr.reduce(
    (acc, curr)=>{
        if(curr.type==='savory'){
            return acc += curr.price
        } else return acc
    },0)
    return sum
}

console.log(totalSavory(shoppingCart));