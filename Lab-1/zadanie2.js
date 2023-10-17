let price = 19;
/*
zapisz warunek sprawdzający czy price jest wieksze od 10 i mniesjze od 20.
Jesli spełnia to wypisz komunikat "w zakresie'
Jesli nie spełnia to wypisz kounikat "Poza zakresem"
Jeśli price jest null lub undefined to wypisz komunikat "Nie zdefiniowane"
*/
if( !price && price != 0){
    console.log("Nie zdeifniowane")
}
else{
    if(price > 10 && price < 20){
        console.log("W zakresie")
    }      
        else{
            console.log("Poza zakresem")
        }      
}



