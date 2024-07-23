let  months=['january','july','march','august'];
months.shift();
months.shift();
// converted to this array ------------->> months=['july','june','march','august'];
months.unshift("june");
months.unshift("july");
console.log(months);