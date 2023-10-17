// dany jest czas jako liczba minut np 11:45
// wyznacz liczbę godzin, minut i sekund dla czasu podanego jak wyżej

let time = 76.36;

let hours = Math.trunc(time/ 60)
let subtract = hours * 60
let m = time - subtract;
let s = Math.round(((m) - ~~m) * 100);


console.log(hours)
console.log(~~m)
console.log(s)