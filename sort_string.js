const listOfStrings = ['Sanika', 'sanika', 'Monika', 'Vineet', 'Vilas', 'harsh'];

const sortString = function (string1, string2) {
  const str1 = string1.toUpperCase();
  const str2 = string2.toUpperCase();

  if (str1 < str2) {
    return -1;
  }

  if (str1 > str2) {
    return 1;
  }

  return 0;
}

console.log(listOfStrings.sort(sortString));