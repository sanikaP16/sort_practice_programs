const numbers = [1, 2, 4, 5, 6, 7, 3, 2, 8, 9, 3, 4];


const setPivot = function (pivot) {
  return function (firstNumber, secondNumber) {
    if (firstNumber <= pivot || secondNumber <= pivot) {
      return firstNumber - secondNumber;
    }

    return secondNumber - firstNumber;
  };
}

const sortAroundPivot = setPivot(3);

console.log(numbers.sort(sortAroundPivot))
