/*
Dana jest tablica obiektów opisujących książki:

let arr = [
  { title: "ABC", price: 112, authors: ["adam", "ewa", "karol"] },
  { title: "CBA", price: 14, authors: ["adam"] },
  { title: "OND", price: 16, authors: ["ewa", "karol"] },
];

Napisz funkcję, która zwróci tablicę obiektów zawierających: imię autora, listę tytułów jego książek i sumę cen jego książek. 
Przykład obiektu w tablicy zwracanej (dla przykładowej tablicy wejściowej):

{author: "ewa", books: ["ABC", "OND"], prices: 128}

 Zwracana tablica musi być posortowana alfabetycznie wg imion autorów. Załóż, że imiona nie powtarzają się w tablicy wejściowej.
Uwaga

Nie stosuj flatMap, brak wsparcia dla tej funkcji na platformie Moodle!
*/



function getDetails(arr) {
    
    const result = new Array();

    const authors = arr.reduce((acc, book) => {
        book.authors.forEach(author => {

            acc[author] = acc[author] || { books: [], prices: 0 };

            acc[author].books.push(book.title);

            acc[author].prices += book.price;
        });
        return acc;
    }, {});

    for (const author in authors) {
        result.push({
            author,
            books: authors[author].books,
            price: authors[author].prices,
        });
    }
    result.sort((a, b) => a.author.localeCompare(b.author));

    return result;
}








//TESTY
const c1 = Math.random() * 100;
const c2 = Math.random() * 100;
const c3 = Math.random() * 100;
let arr = [
  { title: "ABC", price: c1, authors: ["adam", "ewa", "żaneta"] },
  { title: "CBA", price: c2, authors: ["adam"] },
  { title: "OND", price: c3, authors: ["ewa", "karol"] },
];
let r = getDetails(arr);
console.log(r.length);
console.log(r[0].author);
console.log(r[1].author)
console.log(r[2].author);
console.log(r[3].author);
console.log(r[0].price === c1 + c2);
console.log(r[1].price === c1 + c3);
console.log(r[2].price === c3);
console.log(r[3].price === c1);
console.log(r[0].books.includes("CBA") && r[0].books.includes("ABC"));
console.log(r[1].books.includes("ABC") && r[1].books.includes("OND"));
console.log(r[2].books.includes("OND"));
console.log(r[3].books.includes("ABC"));

console.log(r[0]);
console.log(c1 + c2);