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