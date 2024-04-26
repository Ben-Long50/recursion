function mergeSort(array) {
  const half = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half, array.length);
  if (firstHalf.length > 1 || secondHalf.length > 1) {
    firstHalf = mergeSort(firstHalf);
    secondHalf = mergeSort(secondHalf);
  }

  const length = firstHalf.length + secondHalf.length;
  const sortedArray = [];

  while (sortedArray.length < length) {
    if (firstHalf[0] <= secondHalf[0] || typeof secondHalf[0] !== 'number') {
      sortedArray.push(firstHalf[0]);
      firstHalf.splice(0, 1);
    } else {
      sortedArray.push(secondHalf[0]);
      secondHalf.splice(0, 1);
    }
  }
  return sortedArray;
}

const randomNumbers = [];

for (let i = 0; i < 100; i++) {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  randomNumbers.push(randomNumber);
}

console.log(mergeSort(randomNumbers));
