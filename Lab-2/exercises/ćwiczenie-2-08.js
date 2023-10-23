

//zad 1
const calculateRadiusFromArea = (area) => {
    return (Math.round(Math.sqrt(area / Math.PI) * 1e6) / 1e6).toFixed(6);
  };
  
  console.log("Zadanie 1\n----------------------------------");
  let area = 3.14159;
  let radius = calculateRadiusFromArea(area);
  console.log(radius);
  
  if (radius === '1.000000') {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
//zad 2

const convertDecimalToRoman = (decimalNumber) => {
    let romanNumber = '';
  
    switch (decimalNumber) {
      case 1:
        romanNumber = 'I';
        break;
      case 2:
        romanNumber = 'II';
        break;
      case 3:
        romanNumber = 'III';
        break;
      case 4:
        romanNumber = 'IV';
        break;
      case 5:
        romanNumber = 'V';
        break;
      case 6:
        romanNumber = 'VI';
        break;
      case 7:
        romanNumber = 'VII';
        break;
      case 8:
        romanNumber = 'VIII';
        break;
      case 9:
        romanNumber = 'IX';
        break;
      case 10:
        romanNumber = 'X';
        break;
      case null:
        romanNumber = "Liczba dziesiętna jest niezdefiniowana lub null!";
        break;
      case undefined:
        break;
      default:
        romanNumber = "Liczba dziesiętna jest poza zakresem";
    }
  
    return romanNumber;
  };
  
  console.log("Zadanie 3\n----------------------------------");
  let decimalNumber = 1;
  let romanNumber = convertDecimalToRoman(decimalNumber);
  console.log(romanNumber);
//zad 3

const generateRandomString = (length, alphabet) => {
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * alphabet.length);
      randomString += alphabet.charAt(randomIndex);
    }
  
    return randomString;
  };
  
  const length = 5;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomString = generateRandomString(length, alphabet);
  
  console.log(randomString);
//zad 4

//zad 5
function generateProgressBar(n, m) {
    let progressBar = "|";
    let percentageFromNumber = Math.round((n / m) * 100);
    
    for (let i = 0; i <= 50; i++) {
      if (i < percentageFromNumber / 2) {
        progressBar += '#';
      } else if (i == 50) {
        break;
      } else {
        progressBar += ' ';
      }
    }
    
    progressBar += `|\n0%                      ${percentageFromNumber}%                     100%`;
    
    return progressBar;
  }
  
  console.log("Zadanie 5\n----------------------------------");
  let n = 50;
  let m = 190;
  let progressBar = generateProgressBar(n, m);
  console.log(progressBar);

  //zad 6
  const createRectangle = (rectWidth, rectHeight, rectBorderSymbol) => {
    let rectString = '';
  
    if (rectBorderSymbol === null || rectBorderSymbol === undefined || rectBorderSymbol.trim() === '') {
      console.log("Błędny znak");
      return;
    }
  
    if ((rectWidth < 0 || rectWidth >= 81) || (rectHeight < 0 || rectHeight >= 81)) {
      console.log("Błędne dane");
      return;
    }
  
    rectString += rectBorderSymbol.repeat(rectWidth) + "\n";
    for (let i = 2; i < rectHeight; i++) {
      rectString += rectBorderSymbol + " ".repeat(rectWidth - 2) + rectBorderSymbol + "\n";
    }
    rectString += rectBorderSymbol.repeat(rectWidth);
  
    return rectString;
  };
  
  console.log("Zadanie\n----------------------------------");
  let rectWidth = 7;
  let rectHeight = 5;
  let rectBorderSymbol = '#';
  const rectString = createRectangle(rectWidth, rectHeight, rectBorderSymbol);
  console.log(rectString);