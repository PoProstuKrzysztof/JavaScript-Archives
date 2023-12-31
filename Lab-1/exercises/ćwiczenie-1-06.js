/**
 * Napisz skrypt, który na podstawie zmiennych rectWidth i rectHeight stworzy łańcuch rectString zawierający pustą rankę o podanych wymiarach.
 * Ramka ma być zbudowana ze znaków w zmienej rectBorderSymbol.
 * Dodaj kod, który sprawdzi poprawność wszystkich zmiennych:
 * rectWidth i rectHeight - większe od -1 i mniejsze od 81
 * rectBorderSymbol - jeden dowolny znak oprócz znaków białych (spacja, tabulator, nowy wiersz itd.)
 * Dla przykładowych danych wyświetlenie rectString na konsoli powinno dać poniższy efekt:
 * #######
 * #     #
 * #     #
 * #     #
 * #######  
 */
let rectWidth = 7;
let rectHeight = 5;
let rectBorderSymbol = '#';
let rectString = '';

if(rectBorderSymbol == null && rectBorderSymbol == undefined){
    console.log("Wrong character");
}

if((rectWidth || rectHeight) <= -1 || (rectWidth || rectHeight) >= 81 || rectBorderSymbol == '\n' || rectBorderSymbol == '\t' )
{
    console.log("Wrong data");
}

rectString += rectBorderSymbol.repeat(rectWidth) +"\n";
    for(let i = 2; i < rectHeight; i++)
    {
        rectString += rectBorderSymbol + " ".repeat(rectWidth-2) + rectBorderSymbol +"\n"; 
    }
    rectString += rectBorderSymbol.repeat(rectWidth);



console.log(rectString);