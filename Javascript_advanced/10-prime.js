// 10-prime.js

function countPrimeNumbers() {
    let count = 0;

    for (let number = 2; number <= 100; number++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            count++;
        }
    }

    return count;
}

const start = performance.now();

for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}

const end = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);
