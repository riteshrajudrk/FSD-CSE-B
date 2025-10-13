const num = [1, 2, 3, 4, 5]
const square = num.map((n) => n * n);
const even = num.filter((n) => n % 2 == 0).map((n) => n * n).reduce((acc, n) => acc + n, 0);
console.log(even)

