/**
 * Napisz skrypt, który oblicza promień koła na podstawie pola powierzchni w zmiennej area.
 * Wynik zapisz do zmiennej łańuchowej radius z sześcioma miejscami po przecinku.
 * Załóż, że w area jest zawsze liczba nieujemna. Zmienna PI jest w bibliotece Math
 */
console.log("Zadanie 1\n----------------------------------")
let area = 3.14159;
let radius = '';

radius = Math.round(Math.sqrt(area/Math.PI)).toFixed(6);

/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
console.log(radius)
if (radius === '1.000000'){
    console.log("Test passed");
} else {
    console.log("Test failed");
}


