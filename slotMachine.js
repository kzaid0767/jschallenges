/*
   Let's create an emoji slot machine! Replace the hardcoded 
   data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/ 

const slotMachine = document.querySelector('.emoji-slots-game'); 
const food = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink';
let info


function getRandomFruits(arr){
    const fruitArr = makeFruitArray(arr)
    const nineFruits=[]
    for(let i=0;i<9;i++){
        const idx = Math.floor(Math.random()*fruitArr.length)
        slotMachine.innerHTML += `<li>${fruitArr[idx].htmlCode[0]}</li>`
    }
}
function makeFruitArray(arr){ 
   return arr.filter(item => item.group==='food fruit')
}
// write your fetch request here 

fetch(food)
    .then(res => res.json())
    .then(data => {
        getRandomFruits(data)
    })
    .catch(err => console.log(err))