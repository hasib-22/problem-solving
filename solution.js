// ==========================================
// PROBLEM 1: Staircase
// ==========================================
/**
 * @param {number} n
 * @return {string}
 */

var staircase = function (n) {
    const staircaseArray = [];
    for (let i = 1; i <= n; i++) {
        const spaces = " ".repeat(n - i);
        const hashes = "#".repeat(i);
        staircaseArray.push(spaces + hashes);
    }
    return staircaseArray.join("\n");
};

// ==========================================
// PROBLEM 2: Grading Students
// ==========================================
/**
 * @param {number[]} grades
 * @return {number[]}
 */

var gradingStudents = function (grades) {
    return grades.map(number => {
        if (number < 38) {
            return number
        }
        const nextMultiple = Math.floor((number / 5) + 1) * 5
        const difference = nextMultiple - number
        if (difference < 3) {
            return nextMultiple
        }
        return number
    })
};

// ==========================================
// PROBLEM 3: Time Conversion
// ==========================================
/**
 * @param {string} s
 * @return {string}
*/

var timeConversion = function (time) {
    const modifier = time.slice(-2).toUpperCase();
    console.log(modifier)
    let hour = time.slice(0, 2);
    const minutesAndSeconds = time.slice(2, 8);

    if (modifier === "AM") {
        if (hour === "12") {
            hour = "00";
        }
    } else if (modifier === "PM") {
        if (hour !== "12") {
            hour = String(parseInt(hour, 10) + 12);
        }
    }

    return hour + minutesAndSeconds;
};

// ==========================================
// PROBLEM 4: String Repeat
// ==========================================
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */

var repeatStr = function (n, s) {
    if (n === 0) return ""
    return s.repeat(n)
};

// ==========================================
// PROBLEM 5: Reversed Strings
// ==========================================
/**
 * @param {string} str
 * @return {string}
 */

var solution = function (str) {
    const result = [...str].reverse().join("")
    return result
}

// ==========================================
// PROBLEM 6: Sum of positive
// ==========================================
/**
 * @param {number[]} arr
 * @return {number}
 */

var positiveSum = function (arr) {
    let sum = 0;
    for (const num of arr) {
        if (num <= 0) {
            continue
        }
        sum += num
    }
    return sum
};

// ==========================================
// PROBLEM 7: Grasshopper — Summation
// ==========================================
/**
 * @param {number} num
 * @return {number}
 */

var summation = function (num) {
    return ((num * (num + 1)) / 2)
};

// ==========================================
// PROBLEM 8: Convert a Boolean to a String
// ==========================================
/**
 * @param {boolean} b
 * @return {string}
 */

var booleanToString = function (b) {
    return b.toString()
};

// ==========================================
// PROBLEM 9: Fizz Buzz
// ==========================================
/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function (n) {
    const arr = []
    for (let i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            arr.push("FizzBuzz")
        } else if (i % 3 === 0) {
            arr.push("Fizz")
        } else if (i % 5 === 0) {
            arr.push("Buzz")
        } else {
            arr.push(`${i}`)
        }
    }
    return arr
};

// ==========================================
// PROBLEM 10:  Running Sum of 1D Array
// ==========================================
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function (nums) {
    let prev = 0
    let sumArray = []
    for (let i = 0; i < nums.length; i++) {
        const sum = prev + nums[i]
        sumArray.push(sum)
        prev = sum
    }
    return sumArray
};




