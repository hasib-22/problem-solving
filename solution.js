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

// ==========================================
// PROBLEM 11:  Richest customer wealth
// ==========================================
/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function (accounts) {
    return Math.max(...accounts.map(customer => customer.reduce((sum, money) => sum + money, 0)));
};

// ==========================================
// PROBLEM 12:  Remove Duplicates from Sorted Array
// ==========================================
/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0
    let k = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k
};

// ==========================================
// PROBLEM 13: Contains Duplicate
// ==========================================
/**
 * @param {number[]} nums
 * @return {boolean}
*/

var containsDuplicate = function (nums) {
    const seen = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true;
        }
        seen.add(nums[i]);
    }
    return false;
};

// ==========================================
// PROBLEM 14: Move Zeroes
// ==========================================
/**
 * @param {number[]} nums
 * @return {void}
 */

var moveZeroes = function (nums) {
    let lastNonZeroFoundAt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt] = nums[i];
            lastNonZeroFoundAt++;
        }
    }
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// ==========================================
// PROBLEM 15: Merge Sorted Array
// ==========================================
/** 
* @param {number[]} nums1
* @param {number} m
* @param {number[]} nums2
* @param {number} n
* @return {void}
*/

var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let p = m + n - 1
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
    console.log(nums1)
};

// ==========================================
// PROBLEM 16: 3Sum
// ==========================================
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
    const triplets = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
};

// ==========================================
// PROBLEM 17: Plus One
// ==========================================
/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    digits.unshift(1);
    return digits;
};

// ==========================================
// PROBLEM 18: Reverse String
// ==========================================
/**
 * @param {string[]} s
 * @return {void}
 */

var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        const temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++;
        right--;
    }

    console.log(s)
};

// ==========================================
// PROBLEM 19: Length of Last Word
// ==========================================
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
    const array = s.trim().split(" ")
    return array[array.length - 1].length
};


// ==========================================
// PROBLEM 20: Longest Common Prefix
// ==========================================
/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);

            if (prefix === "") return "";
        }
    }

    return prefix;
};
