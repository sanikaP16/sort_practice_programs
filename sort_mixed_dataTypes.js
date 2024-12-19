const arrayOfData = [true, 5, "banana", 3, "apple", false, "snaika"];

const isElementBoolean = (element) => element === true || element === false;

const getBooleanSorted = (element) => element === true ? 1 : -1;

const isElementString = (element) => isNaN(element);

const isElementANumber = (element) => typeof (element) === 'number';

const getNumbersSorted = (firstNum, secondNum) => firstNum - secondNum;

const booleanData = arrayOfData.filter(isElementBoolean).sort(getBooleanSorted);
const stringData = arrayOfData.filter(isElementString).sort();
const numberData = arrayOfData.filter(isElementANumber).sort(getNumbersSorted);

console.log([...numberData, ...booleanData, ...stringData]);