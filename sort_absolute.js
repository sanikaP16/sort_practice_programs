const numbers = [-10, -3, 3, -3, -5, 8, -2];

const sortByAbsoluteValue = function (firstNum, secondNum) {
  if (Math.abs(firstNum) === Math.abs(secondNum)) {
    return firstNum - secondNum;
  }

  return Math.abs(firstNum) - Math.abs(secondNum);
};

numbers.sort(sortByAbsoluteValue);