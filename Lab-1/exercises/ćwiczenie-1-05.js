/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`. 
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */
console.log("Zadanie 5\n----------------------------------")
let n = 50;
let m = 190;
let progressBar = "|"
 let percentageFromNumber = Math.round((n/m) * 100);
 let spaces = '';

 for(let i =0; i <=50; i++){
    if(i < percentageFromNumber/2){
        progressBar += '#';
    }
    else if(i == 50){
        break;
    }
    else{
        progressBar += ' ';
    }
    
 }
 progressBar += (`|\n0%                      ${percentageFromNumber}%                     100%`);
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
console.log(progressBar)