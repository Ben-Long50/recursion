function fibs(num) {
  const fibArray = [0, 1];
  for (let i = 1; i <= num - 2; i++) {
    fibArray.push(fibArray[i] + fibArray[i - 1]);
  }
  return fibArray;
}

console.log(fibs(25));

function fibsRec(num, fibArray = [0, 1]) {
  if (num === 2) {
    return fibArray;
  }
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  return fibsRec(num - 1, fibArray);
}

console.log(fibsRec(25));
