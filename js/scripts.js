var a = prompt('Podaj liczbę a');
var b = prompt('Podaj liczbę b');

var value=(a * a) + (2 * a * b) - (b * b);

alert('Wynik działania (a * a) + (2 * a * b) - (b * b) wynosi ' + value);

if (value<0) {
	alert('Wynik działania jest ujemny');
  }

if (value==0) {
	alert('Wynik działania to zero');
  }

if (value>0) {
	alert('Wynik działania jest dodatni');
  }
