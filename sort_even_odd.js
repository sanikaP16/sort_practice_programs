const numbers = [1, 2, 9, 12, 3, 4, 5, 5, 6, 7, 8];
const isEven = (number) => number % 2 === 0;

const sortEvenOdd = function (firstNumber, secondNumber) {
  if (isEven(firstNumber) && isEven(secondNumber)) {
    return firstNumber - secondNumber;
  }

  return isEven(firstNumber) ? 1 : -1;
}

numbers.sort(sortEvenOdd);




/**
  const optimizedSort = (arr) => {
  const evens = arr.filter(isEven).sort((a, b) => b - a);
  const odds = arr.filter(isOdd).sort((a, b) => b - a);
  return [...evens, ...odds];
};

console.log(optimizedSort(numbers)); // [12, 8, 6, 4, 2, 9, 7, 5, 5, 3, 1]
 */