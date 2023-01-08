/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

function panic(str){
    let arr = str.split('')
    arr.push('!')
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i].toUpperCase()
        if(arr[i]===' '){
            arr[i]=' 😱 '
            
        }
    }
    
    arr = arr.join('')
console.log(arr)
}

panic("may you be welcomed")