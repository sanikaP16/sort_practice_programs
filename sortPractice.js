// const numbers = [10, 5, 22, 43, 11, 7];

//********* descending order ********
// numbers.sort(function (a, b) {
//   if (a > b) {
//     return -1;
//   }
//   if (a == b) {
//     return 0;
//   }
//   return 1;
// });

//********* ascending order ******
// numbers.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   }
//   if (a == b) {
//     return 0;
//   }
//   return -1;
// });

//***** ascending order ******
numbers.sort(function (a, b) {
  console.log("a : ", a, "b : ", b);
  console.log("a - b", a - b)
  return a - b;
});

//***** descending order ******
numbers.sort(function (a, b) {
  return b - a;
});


const string = ['sanika', 'user', 'class', 'project', 'beauti', 'yoyo', 'travel']
const numbers = [1, 2, 3, 100, 1, 23, 0];
string.sort();
//this will return random strings every time.

string.sort(function () {
  return Math.random() - 0.5;
});