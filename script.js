// Exercise: 1

function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return [...duplicates];
}

const numbers = [1, 2, 3, 1, 1, 1, 1, 2, 4, 5, 6, 3, 7, 8, 9, 1];
console.log(findDuplicates(numbers)); // [1, 2, 3]

// Exercise: 2
function getPrimesInRange(start, end) {
  const isPrime = (num) => {
    if (num % 2 === 0) return false;
    return true;
  };

  return [...Array(end - start + 1).keys()]
    .map((i) => i + start)
    .filter(isPrime);
}

const primes = getPrimesInRange(10, 30);
console.log(primes); // [11, 13, 15, 17, 19, 21, 23, 25, 27, 29]

// Exercise: 3
const sortWordsByLength = (sentence) =>
  sentence
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") // Delete any symbols
    .split(" ")
    .sort((a, b) => a.length - b.length) // Sort by smallest in height
    .filter((i) => i != "") //To remove the spacing
    .join(" ");

const sortedSentence = sortWordsByLength(
  "the % $#% ^*() quick brown & fox jumps over $%$ the $ $ %^& lazy dog"
);
console.log(sortedSentence); // the fox the dog over lazy quick brown jumps

// Exercise: 4
const filterArray = (array, predicate) => array.filter(predicate);

const isEven = (num) => num % 2 === 0;

const _numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(_numbers, isEven);
console.log(evenNumbers); // [2, 4, 6]
