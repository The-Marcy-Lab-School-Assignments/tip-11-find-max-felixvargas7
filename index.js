/**
 * Write a function named findMax that takes an array of numbers as input
 * and returns the largest number in the array.
 *
 * Examples:
 * - findMax([3, 7, 2, 9, 1]) → 9
 * - findMax([15, 4, 22, 8]) → 22
 * - findMax([-5, -2, -10, -1]) → -1
 */

const findMax = (numbers) => {

    let max = numbers[0];
    let index = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > findMax) {
            max = numbers[i];
        }
    }

    return [max, index];
};

// let el = numbers[i]
// let max = Math.max(el, max);

// Export the function for testing
module.exports = { findMax };

// Example usage (commented out to avoid interference with tests)
// console.log(findMax([3, 7, 2, 9, 1])); // → 9
// console.log(findMax([15, 4, 22, 8])); // → 22
// console.log(findMax([-5, -2, -10, -1])); // → -1