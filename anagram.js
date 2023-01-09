/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 

function isAnagram(str1, str2){
    if(str1.length != str2.length){
        return false
    }
    const obj1={}
    for(let letter of str1){
        if(obj1[letter]){
            obj1[letter]++
        } else {
            obj1[letter]=1
        }
    }
    const obj2={}
    for(let letter of str2){
        if(obj2[letter]){
            obj2[letter]++
        } else {
            obj2[letter]=1
        }
    }

    for(let el in obj1){
        if(obj1[el] != obj2[el]){
            return false
        }
    }
    return true
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("adam", "addm"));

/* There solution

function isAnagram(str1, str2){
    // are the strings the same length? if yes return false. 
    if(str1.length !== str2.length) return false;
    
    // split string into an array
    // sort
    // join the array back together as a string
    const newStr1 = str1.split('').sort().join('');
    
    // repeat with second word
    const newStr2 = str2.split('').sort().join('');

    // are the two words equal? true or false
    return newStr1 === newStr2;
}*/