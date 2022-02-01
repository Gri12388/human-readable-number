module.exports = function toReadable (number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function subnumber(num) {
    if (number == 0) return 'zero';
    if (num < 20) return units[num];
    if (num % 10) {return dozens[Math.floor(num / 10)] + ' ' + units[num % 10];}
    else return dozens[Math.floor(num / 10)];
  }

  if (number < 100) return subnumber(number);
  if (number < 1000 && number % 100) return units[Math.floor(number / 100)] + ' hundred ' + subnumber(number % 100); 
  else return units[Math.floor(number / 100)] + ' hundred';
}
