/* eslint operator-assignment: 0 */

const printNameBySymbol = (name) => {
    let i = name.length - 1;
    // Такая проверка будет выполняться до конца строки
    // включая последний символ. Его индекс `length - 1`.
    while (i >= 0) {
      // Обращаемся к символу по индексу
      console.log(name[i]);
      i = i - 1;
    }
  };
  
  const name = 'Hexlet';
  printNameBySymbol(name);
