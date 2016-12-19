
var Currency = require('./currency-class');

var canadianDollar = 0.91;

var currency = new Currency(canadianDollar);

console.log(currency.canadianToUS(30));