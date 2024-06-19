

const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const {JPY, USD, GBP} = oneEuroIs;


const euroToDollar = function(euros){
    let euroDollar = euros*USD;
    return euroDollar;
}


const dollarToEuro = function(dollars){
    let dollarEuro = dollars/USD;
    return dollarEuro;
}


const dollarToYen = function(dollars){
    let dollarYen = dollarToEuro(dollars)*JPY;
    return dollarYen;
}

const yenToEuro = function(yen){
    let yenEuro = yen/JPY;

    return yenEuro
}

const yenToPound = function(yen){
    let yenPound = yenToEuro(yen)*GBP;
    return yenPound
}


module.exports = { sum, euroToDollar , dollarToYen, yenToPound };



















