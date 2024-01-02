
let minutes = 0;

function walking(temperature, isRaining) {
  if(isRaining) return [`Температура: ${temperature}. Дождь: ${isRaining}`, 0];
      else if(temperature < 10 || temperature > 35) return [`Температура: ${temperature}. Дождь: ${isRaining}`, 0];
      else if(temperature >= 10 && temperature <= 14) return [`Температура: ${temperature}. Дождь: ${isRaining}`, minutes = 30]
      else if(temperature >= 15 && temperature <= 24) return [`Температура: ${temperature}. Дождь: ${isRaining}`, minutes = 40]
      else if(temperature >= 25 && temperature <= 35) return [`Температура: ${temperature}. Дождь: ${isRaining}`, minutes = 20]
      }
    
console.log(walking(15, true), '0');
console.log(walking(40, false), '0');
console.log(walking(15, false), '40');
console.log(walking(24, false), '40');
console.log(walking(25, false), '20');
console.log(walking(27, true), '0');
console.log(walking(12, false), '30');
console.log(walking(27, false), '20');
console.log(walking(35, false), '20');
console.log(walking(5, false), '0');

/* Техническое задание

Мяу! Длительность прогулки зависит от нескольких условий.

Если идёт дождь, гулять я не хожу. В этом случае длительность прогулки равняется 0. А вот если дождя нет, всё зависит от температуры на улице:

Во-первых, если температура от 10°C (включительно) до 15°C (не включая это значение), я гуляю 30 минут.

Во-вторых, если температура от 15°C (включительно) до 25°C (не включая значение), я гуляю 40 минут.

В-третьих, при температуре от 25°C (включительно) до 35°C (включительно), я гуляю 20 минут.

В остальных случаях я никуда не выхожу: либо очень холодно, либо очень жарко.

Результат программы – время прогулки. Его необходимо записать в переменную minutes.

*/
