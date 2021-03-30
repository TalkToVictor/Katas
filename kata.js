// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.``For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
// solution

function checkExam(array1, array2) {
    let score = 0;
    for (i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            score += 4;
        } else if (array2[i] === "") {
            score += 0;
        } else {
            score -= 1;
        }
    }
    if (score < 0) {
        return 0;
    } else {
        return score;
    }
}

// Imagine you are in a universe where you can just perform the following arithematic operations. Addition(+), Subtraction(-), Multiplication(*), Division(/). You are given given a postfix expression. Postfix expression is where operands come after operator. Each operator and operand are seperated by a space. You need to evaluate the expression.

// For example: 25 45 + is equivalent of 25 + 45, hence the answer would be 70. Instead if you are given 20 40 + 60 *, it is equivalent of (20+40) * 60, hence the answer should be 3600. 20 40 60 + * is equivalent of 20 * (40 + 60) = 2000.

// Create a method 'evaluate' that takes a string as input and returns a long resulted in the evaluation. Just concentrate on happy paths. Assume that expression is always valid and division is always an integer division.


const operatorMap = {
    ["+"]: function (a, b) {
        return a + b;
    },
    ["-"]: function (a, b) {
        return a - b;
    },
    ["*"]: function (a, b) {
        return a * b;
    },
    ["/"]: function (a, b) {
        return parseInt(a / b);
    }, // The solution explicitly states integer division
};
function postfixEvaluator(string) {
    const split = string.split(" ");
    console.log("Starting with expression:", split);

    for (let i = 0; i < split.length; i++) {
        if (split.length == 1) {
            // We've finished all calculations, this must be our value
            return parseInt(split[0]);
        }

        console.log("-----------");
        if (!parseInt(split[i + 2])) {
            // There's an operator 2 spaces ahead, calculate now!
            const leftNum = parseInt(split[i]);
            const rightNum = parseInt(split[i + 1]);
            const operatorStr = split[i + 2];

            // Get a function based on its string representation
            const operatorFn = operatorMap[operatorStr];

            console.log(
                "Evaluating subexpression:",
                `i=${i} to i=${i + 2} as`,
                split.slice(i, i + 3)
            );
            const value = operatorFn(leftNum, rightNum);
            console.log("\tsubexpression value:", value);

            // Modify the array in-place
            split.splice(i, 3, value);
            console.log("Complete expression is now:", split);

            i -= 2; // Move the loop backwards
        }
    }

    return split[0]

    // Write a function that takes 1 number (1-100) and returns the smallest combination of coins that equal that number
    // for example exactChange(77)
    // would return [25, 25, 25, 1, 1]
    // so 25 cents, another 25 cents, another 25 cents, 1 penny and 1 penny
    // exactChange(12) would return [10, 1, 1]
    // 10 cents, 1 penny, 1 penny
    // if u return [5, 5, 1, 1] that would be incorrect because [10, 1, 1] uses fewer coins

    solution
    function exactChange(cents) {
        let x = cents;
        let o = x % 5;
        let f = 0;
        let t = 0;
        let q = 0;
        x -= o;
        while (x >= 25) {
            x -= 25;
            q++;
        }
        while (x >= 10) {
            x -= 10;
            t++;
        }
        while (x >= 5) {
            x -= 5;
            f++;
        }
        return getResults(q, t, f, o);
    }

    function getResults(q, t, f, o) {
        let str = "";
        if (q) {
            for (i = 0; i < q; i++) {
                str += " 25";
            }
        }
        if (t) {
            for (i = 0; i < t; i++) {
                str += " 10";
            }
        }
        if (f) {
            for (i = 0; i < f; i++) {
                str += " 5";
            }
        }
        if (o) {
            for (i = 0; i < o; i++) {
                str += " 1";
            }
        }
        return str.slice(1);
    }


    // Uh oh, Someone at the office has dropped all these sequences on the floor and forgotten to label them with their correct bases.

    // We have to fix this before the boss gets back or we're all going to be fired!

    // This is what your years of coding have been leading up to, now is your time to shine!

    // Task
    // You will have to create a function which takes in a sequence of numbers in random order and you will have to return the correct base of those numbers.

    // The base is the number of unique digits. For example, a base 10 number can have 10 unique digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and a base 2 number (Binary) can have 2 unique digits: 0 and 1.

    // Constraints
    // The sequence will always be 10 numbers long and we know that the base is going to be between 2 and 10 inclusive so no need to worry about any letters. When sorted, the sequence is made up of consecutive numbers.

    // https://www.codewars.com/kata/5f47e79e18330d001a195b55


    //TRi solution
    function baseFinder(seq) {
        let arr = [];
        let baseArr = [];
        arr = seq.map((x) => x.split(""));
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (!baseArr.includes(arr[i][j])) {
                    baseArr.push(arr[i][j]);
                }
            }
        }
        return baseArr.length;
    }
    // You are given two strings s and t. Both strings have length n and consist of lowercase Latin letters.

    // You can successively perform the following move any number of times (possibly, zero):

    // swap any two adjacent (neighboring) characters of s (i.e. for any i={0,1,2,…,n−2} you can swap si and si+1).
    // Input:
    // Strings s and t, which consisting of n(1 ≤ n ≤ 1000) lowercase Latin letters.

    // Output:
    // The minimum number of moves to transform s to t. If it is impossible to obtain the string t using moves, return -1.

    // Examples:

    // ('abcdef', 'abdfec') => 4
    // ('abcd', 'accd') => -1
    // ('ab', 'ab') => 0
    // ('ab', 'ba') => 1
    // ('aaa', 'aaa') => 0
    // Note:
    // In the first example the string s changes as follows: "abcdef" → "abdcef" → "abdcfe" → "abdfce" → "abdfec".

    //https://www.codewars.com/kata/5bab83fffe6c0c52b8000172

    //solution
    function obtain(imput, target) {
        if (imput.split(``).sort().join(``) != target.split(``).sort().join(``)) {
            return -1;
        }
        let counter = 0;
        let arr = imput.split(``);
        while (arr.join(``) != target) {
            for (let i = 0; i < imput.length; i++) {
                //   arr[i] = arr[i + 1]
                let c = arr[i];
                if (c != target[i]) {
                    arr[i] = arr[i + 1];
                    arr[i + 1] = c;
                    counter = counter + 1;
                }
            }
        }
        return counter;
    }

    //Solution 2
    function obtain(s, t) {
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            let index = t.indexOf(s[i]);
            if (index === -1) return -1;
            t = t.slice(0, index) + t.slice(index + 1);
            count += index;
        }
        return count;
    }
