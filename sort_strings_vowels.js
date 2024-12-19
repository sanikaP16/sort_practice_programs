const listOfStrings = ['ytrrr', 'ybbb', 'lpuion',
  'shreyas', 'sanika', 'aeihigh', 'high',
  'low', 'bdc', 'aioughaalu'];

const isCharVovel = (char) => 'aeiouAEIOU'.includes(char);

const getVowelCount = (initialVal, char) =>
  isCharVovel(char) ? initialVal + 1 : initialVal;


const countVowels = (string) => [...string].reduce(getVowelCount, 0);


const sortByVowelCount = function (str, str2) {
  const vowelsInFirstStr = countVowels(str);
  const vowelsInSecondStr = countVowels(str2);

  if (vowelsInFirstStr === vowelsInSecondStr) {
    return str > str2 ? 1 : -1;
  }

  return vowelsInFirstStr - vowelsInSecondStr;
}

listOfStrings.sort(sortByVowelCount);
