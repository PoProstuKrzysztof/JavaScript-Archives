/**
 * Napisz skrypt, który generuje losowy łańcuch o długości w zmiennej length składający się ze znaków alfabetu a-z i cyfr.
 * Wygenerowany Łańcuch umieść w zmiennej randomString  
 */
console.log("Zadanie 4\n----------------------------------")
let length = 5;
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let randomString = '';

for(let i = 0; i <=length; i++){
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet.charAt(randomIndex);
}


console.log(randomString);