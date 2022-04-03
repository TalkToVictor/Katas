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



    // Write a function that takes 1 number (1-100) and returns the smallest combination of coins that equal that number
    // for example exactChange(77)
    // would return [25, 25, 25, 1, 1]
    // so 25 cents, another 25 cents, another 25 cents, 1 penny and 1 penny
    // exactChange(12) would return [10, 1, 1]
    // 10 cents, 1 penny, 1 penny
    // if u return [5, 5, 1, 1] that would be incorrect because [10, 1, 1] uses fewer coins

    //solution
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

    //solution
    function coinsToReturn(TotalCHangeToBeReturned) {
        let coins = [25, 10, 5, 1];
        i = 0;
        let corectChange = [];

        while (TotalCHangeToBeReturned > 0) {
            if (coins[i] > TotalCHangeToBeReturned) {
                i = i + 1;
            } else {
                corectChange.push(coins[i]);

                TotalCHangeToBeReturned = TotalCHangeToBeReturned - coins[i];
            }
        }
        return corectChange;
    }

    //solution
    const sorryeh = [200, 100, 25, 10, 5, 1];
    const freedombucks = [25, 10, 5, 1];

    function exactChange(money, coins = freedombucks) {
        let change = [];
        for (let i = 0; i < coins.length; i++) {
            while (money >= coins[i]) {
                change.push(coins[i]);
                money -= coins[i];
            }
        }
        return change;
    }

    //solution
    function exactChange(money) {
        let arr = [];
        money = money;
        while (money >= 25) {
            arr.push(25);
            money -= 25;
        }
        while (money >= 10) {
            arr.push(10);
            money -= 10;
        }
        while (money >= 5) {
            arr.push(5);
            money -= 5;
        }
        while (money >= 1) {
            arr.push(1);
            money -= 1;
        }

        return arr;
    }

    //solution
    function exactChange(q) {
        let changeArr = [];

        while (q > changeArr.reduce((a, b) => a + b, 0)) {
            if (q - changeArr.reduce((a, b) => a + b, 0) >= 25) {
                changeArr.push(25);
            } else if (q - changeArr.reduce((a, b) => a + b, 0) >= 10) {
                changeArr.push(10);
            } else if (q - changeArr.reduce((a, b) => a + b, 0) >= 5) {
                changeArr.push(5);
            } else if (q - changeArr.reduce((a, b) => a + b, 0) >= 1) {
                changeArr.push(1);
            }
        }

        return changeArr;
    }

    //soltuion
    function exactChange(number) {
        let quarters = 0;
        let dimes = 0;
        let nickels = 0;
        let pennies = 0;
        if (number >= 25) {
            quarters = Math.floor(number / 25);
            number = number % 25;
        }
        if (number >= 10) {
            dimes = Math.floor(number / 10);
            number = number % 10;
        }
        if (number >= 5) {
            nickels = Math.floor(number / 5);
            number = number % 5;
        }
        pennies = number;
        let realAnswer = [];
        console.log(quarters, dimes, nickels, pennies);
        let totalCoins = quarters + dimes + nickels + pennies;
        for (let i = 0; i < totalCoins; i++) {
            if (quarters > 0) {
                realAnswer.push(25);
                quarters--;
            } else if (dimes > 0) {
                realAnswer.push(10);
                dimes--;
            } else if (nickels > 0) {
                realAnswer.push(5);
                nickels--;
            } else {
                realAnswer.push(1);
                pennies--;
            }
        }
        let result = realAnswer;
        return result;
    }

    //Solution with map
    function makeChange(num) {
        let coins = [25, 10, 5, 1];
        let result = [];
        let money = num;
        coins.map((ele) => {
            let multiples = parseInt(money / ele);
            for (let i = 0; i < multiples; i++) {
                result.push(ele);
            }
            money = money % ele;
        });

        return result;
    }

    // Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

    // If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

    // If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

    // If the total of both even and odd numbers are identical return: "Even and Odd are the same"

    //https://www.codewars.com/kata/57f7b8271e3d9283300000b4


    //Solution 1 with for loop
    function evenOrOdd(str) {
        let sumEven = 0;
        let sumOdd = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] % 2 === 0) {
                sumEven += Number(str[i]);
            } else {
                sumOdd += Number(str[i]);
            }
        }
        if (sumEven > sumOdd) {
            return "Even is greater than Odd";
        } else if (sumOdd > sumEven) {
            return "Odd is greater than Even";
        } else {
            return "Even and Odd are the same";
        }
    }

    //Solution 1 different variation
    function evenOrOdd(str) {
        let odd = 0;
        let even = 0;
        let numbers = str.split("");
        for (number of numbers) {
            if (number % 2 === 0) {
                even += number * 1;
            } else {
                odd += number * 1;
            }
        }
        if (odd > even) {
            return "Odd is greater than Even";
        } else if (even > odd) {
            return "Even is greater than Odd";
        } else {
            return "Even and Odd are the same";
        }
    }

    //Solution 2 with .filter() and .reduce()
    function evenOrOdd(str) {
        let even = str
            .split("")
            .filter((e) => e % 2 === 0)
            .reduce((acc, val) => Number(acc) + Number(val));
        let odd = str
            .split("")
            .filter((o) => o % 2 !== 0)
            .reduce((acc, val) => Number(acc) + Number(val));

        if (even > odd) {
            return "Even is greater than Odd";
        } else if (odd > even) {
            return "Odd is greater than Even";
        } else {
            return "Even and Odd are the same";
        }
    }

    // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

    // Example
    // filter_list([1,2,'a','b']) == [1,2]
    // filter_list([1,'a','b',0,15]) == [1,0,15]
    // filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


    //Solution 1
    function filter_list(l) {
        let newArr = [];
        for (let i of l) {
            if (Number.isInteger(i)) {
                newArr.push(i);
            }
        }
        return newArr;
    }

    //Solution 2 with filter
    function filter_list(l) {
        return l.filter((currEl) => typeof currEl === "number");
        // return l.filter((currEl) => typeof currEl !== "string");
        // return l.filter((currEl) => currEl === parseInt(currEl));
    }

    //Solution 3 with reduce
    function filter_list(l) {
        return l.reduce(function (acc, val) {
            if (typeof val === "number") acc.push(val);
            return acc;
        }, []);
    }

    // Write a function that takes 1 number (1-100) and returns the smallest combination of coins that equal that number
    // for example exactChange(77)
    // would return [25, 25, 25, 1, 1]
    // so 25 cents, another 25 cents, another 25 cents, 1 penny and 1 penny
    // exactChange(12) would return [10, 1, 1]
    // 10 cents, 1 penny, 1 penny
    // if u return [5, 5, 1, 1] that would be incorrect because [10, 1, 1] uses fewer coins

    //Jonathan solution
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

    //John solution
    function coinsToReturn(TotalCHangeToBeReturned) {
        let coins = [25, 10, 5, 1];
        i = 0;
        let corectChange = [];

        while (TotalCHangeToBeReturned > 0) {
            if (coins[i] > TotalCHangeToBeReturned) {
                i = i + 1;
            } else {
                corectChange.push(coins[i]);

                TotalCHangeToBeReturned = TotalCHangeToBeReturned - coins[i];
            }
        }
        return corectChange;
    }

    //Xavier solution
    const sorryeh = [200, 100, 25, 10, 5, 1];
    const freedombucks = [25, 10, 5, 1];

    function exactChange(money, coins = freedombucks) {
        let change = [];
        for (let i = 0; i < coins.length; i++) {
            while (money >= coins[i]) {
                change.push(coins[i]);
                money -= coins[i];
            }
        }
        return change;
    }

    //Greg solution
    function exactChange(money) {
        let arr = [];
        money = money;
        while (money >= 25) {
            arr.push(25);
            money -= 25;
        }
        while (money >= 10) {
            arr.push(10);
            money -= 10;
        }
        while (money >= 5) {
            arr.push(5);
            money -= 5;
        }
        while (money >= 1) {
            arr.push(1);
            money -= 1;
        }

        return arr;
    }

    //Juan solution
    function exactChange(q) {
        let changeArr = [];

        while (q > changeArr.reduce((a, b) => a + b, 0)) {
            if (q - changeArr.reduce((a, b) => a + b, 0) >= 25) {
                changeArr.push(25);
            } else if (q - changeArr.reduce((a, b) => a + b, 0) >= 10) {
                changeArr.push(10);
            } else if (q - changeArr.reduce((a, b) => a + b, 0) >= 5) {
                changeArr.push(5);
            } else if (q - changeArr.reduce((a, b) => a + b, 0) >= 1) {
                changeArr.push(1);
            }
        }

        return changeArr;
    }

    //Bobby soltuion
    function exactChange(number) {
        let quarters = 0;
        let dimes = 0;
        let nickels = 0;
        let pennies = 0;
        if (number >= 25) {
            quarters = Math.floor(number / 25);
            number = number % 25;
        }
        if (number >= 10) {
            dimes = Math.floor(number / 10);
            number = number % 10;
        }
        if (number >= 5) {
            nickels = Math.floor(number / 5);
            number = number % 5;
        }
        pennies = number;
        let realAnswer = [];
        console.log(quarters, dimes, nickels, pennies);
        let totalCoins = quarters + dimes + nickels + pennies;
        for (let i = 0; i < totalCoins; i++) {
            if (quarters > 0) {
                realAnswer.push(25);
                quarters--;
            } else if (dimes > 0) {
                realAnswer.push(10);
                dimes--;
            } else if (nickels > 0) {
                realAnswer.push(5);
                nickels--;
            } else {
                realAnswer.push(1);
                pennies--;
            }
        }
        let result = realAnswer;
        return result;
    }

    //Solution with map
    function makeChange(num) {
        let coins = [25, 10, 5, 1];
        let result = [];
        let money = num;
        coins.map((ele) => {
            let multiples = parseInt(money / ele);
            for (let i = 0; i < multiples; i++) {
                result.push(ele);
            }
            money = money % ele;
        });

        return result;
    }

    // Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

    // moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

    //https://www.codewars.com/kata/52597aa56021e91c93000cb0

    //Solution 1
    var moveZeros = function (arr) {
        let arr1 = [];
        let arr2 = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                arr1.push(arr[i]);
            } else {
                arr2.push(arr[i]);
            }
        }
        return arr2.concat(arr1);
    };

    //Solution 2
    const moveZeros = (arr) => {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === 0) {
                arr.splice(i, 1);
                arr.push(0);
            }
        }
        return arr;
    };

    //Solution 3
    const moveZeros = (arr) =>
        arr.filter((i) => i !== 0).concat(arr.filter((n) => n === 0));

    // Imagine you are in a universe where you can just perform the following arithematic operations. Addition(+), Subtraction(-), Multiplication(*), Division(/). You are given given a postfix expression. Postfix expression is where operands come after operator. Each operator and operand are seperated by a space. You need to evaluate the expression.

    // For example: 25 45 + is equivalent of 25 + 45, hence the answer would be 70. Instead if you are given 20 40 + 60 *, it is equivalent of (20+40) * 60, hence the answer should be 3600. 20 40 60 + * is equivalent of 20 * (40 + 60) = 2000.

    // Create a method 'evaluate' that takes a string as input and returns a long resulted in the evaluation. Just concentrate on happy paths. Assume that expression is always valid and division is always an integer division.

    // codewars.com/kata/577e9095d648a15b800000d4

    //Xavier solution with console.logs for each step

    //Xavier solution with console.logs for each step
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

        return split[0];

        let c = canvas.getContext('2d');

        //(x,   y,  width, height) 
        c.fillStyle = "rgba(255, 0, 255, 0.5)";
        // Will take whatever fillStyle is before to add color to the shape
        c.fillRect(100, 100, 20, 20)
        c.fillStyle = "rgba(255, 255, 0, 0.5)";
        c.fillRect(150, 150, 20, 20)
        c.fillStyle = "rgba(0, 255, 0, 0.5)";
        c.fillRect(50, 50, 20, 20)
        c.fillRect(50, 100, 20, 20)
        console.log(canvas);

        //Draw a line
        // c.fillStyle = "rgba(255, 0, 255, 0.5)";
        // // Will take whatever fillStyle is before to add color to the shape
        // c.fillRect(100, 100, 20, 20)
        // c.fillStyle = "rgba(255, 255, 0, 0.5)";
        // c.fillRect(150, 150, 20, 20)
        // c.fillStyle = "rgba(0, 255, 0, 0.5)";
        // c.fillRect(50, 50, 20, 20)
        // c.fillRect(50, 100, 20, 20)
        // console.log(canvas);

        //
        //      DRAW A LINE
        //

        //Always start a new c.beginPath if not from the last shape it will follow
        c.beginPath();
        c.moveTo(200, 100);
        c.lineTo(300, 150);
        c.lineTo(200, 200);
        // can be rgb or name or hex "#fa34a3"
        c.strokeStyle = "blue"
        c.stroke();

        // Create a arc/ circle
        // c.beginPath();
        // c.moveTo(200, 100);
        // c.lineTo(300, 150);
        // c.lineTo(200, 200);
        // // can be rgb or name or hex "#fa34a3"
        // c.strokeStyle = "blue"
        // c.stroke();

        //
        //      DRAW A ARC/ CIRCLE 
        //

        //Takes an x, y, radius, startAngle,  endingAngle, drawCounterClockwise
        //StartAngle and end take radiance not degree
        //StartAngle at what angle start drawing
        //endingAngle how long would you like it till go till
        c.beginPath();
        c.arc(350, 300, 30, 0, Math.PI * 2, false);
        c.strokeStyle = "green"
        c.stroke();

        for (var i = 0; i < 99; i++) {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            // c.beginPath();
            // c.arc(350, 300, 30, 0, Math.PI * 2, false);
            // c.strokeStyle = "green"
            // c.stroke();

            // for (var i = 0; i < 99; i++) {
            //         let x = Math.random() * window.innerWidth;
            //         let y = Math.random() * window.innerHeight;
            //         let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            //         c.beginPath();
            //         c.arc(x, y, 30, 0, Math.PI * 2, false);
            //         c.strokeStyle = randomColor;
            //         c.stroke();
            // }

            //
            //      ANIMATION
            //
            // To change x, y declare outside of function

            let x = 200;
            let y = 300;
            let x1 = 200;
            let y1 = 200;
            let dx = 5;
            let dy = 5;
            let radius = 30;

            // clearRect (x, y, width, height)

            function animate() {
                requestAnimationFrame(animate);
                c.clearRect(0, 0, innerWidth, innerHeight);

                c.beginPath();
                c.arc(x, y, 30, 0, Math.PI * 2, false);
                c.strokeStyle = randomColor;
                c.arc(x, y, radius, 0, Math.PI * 2, false);
                c.strokeStyle = "orange"
                c.stroke();
            }

            // velocity speed that our projectile moves
            // We will need to create a variable

            if (x + radius > innerWidth || x - radius < 0) {
                dx = -dx;
            }
            x += dx;

            // Add to make it look interesting

            // c.arc(x1, y1, 30, 0, Math.PI * 2, false);
            // c.strokeStyle = "yellow"
            // c.stroke();

            // x += 1;
        }
    }

    animate();

    function animate1() {
        requestAnimationFrame(animate1);
        c.beginPath();
        c.arc(x1, y1, 30, 0, Math.PI * 2, false);
        c.strokeStyle = "yellow"
        c.stroke();

        x1 += 1;
    }

    animate1();
}

//function duplicateEncode(word){
// ...



var breakChocolate = function (n, m) {
    return Math.max(0, m * n - 1);
};


// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


const moveZeros = arr => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0))

//// OR ///
// const moveZeros = function (arr) {
//   let nonZeros = []
//   let zeros = []
//   for(i=0;i<arr.length; i++){
//     if(arr[i] !== 0  )nonZeros.push(arr[i])
//     if(arr[i]===0  ) zeros.push(arr[i]) 
//   }
//  return nonZeros.concat(zeros)
// }

let arry = [false, [], {}, 1, 0, 1, 2, 0, 1, "3", "a"]

console.log(moveZeros(arry)) // [false,[],{},1,1,2,1,'3','a',0,0]

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])) // returns[false,1,1,2,1,3,"a",0,0]

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])) // [1,2,1,1,3,1,0,0,0,0]




//Number of people in the bus
//There is a bus moving in the city, and it takes and drop some people in each bus stop.

//You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

//Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

//Take a look on the test cases.

//Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.


//The second value in the first integer array is 0, since the bus is empty in the first bus stop.




var number = function (busStops) {
    // Good Luck!
}


//solution
var number = function (busStops) {
    var totalPeople = 0;
    for (var i = 0; i < busStops.length; i++) {
        totalPeople += busStops[i][0];
        totalPeople -= busStops[i][1];
    }
    return totalPeople;

}

//solution
const number = busStops => busStops.reduce((p, n) => p + n[0] - n[1], 0)


//solution
var number = function (busStops) {
    return busStops.map(x => x[0] - x[1]).reduce((x, y) => x + y);
}



//solution

const number = busStops => {
    const sumOfIndex = x => busStops.map(arr => arr[x]).reduce((a, b) => a + b, 0);
    let enter = sumOfIndex(0);
    let leave = sumOfIndex(1);
    return enter - leave;
}


//solution
var number = function (busStops) {
    let numbersIn = 0;
    let numbersOut = 0;
    busStops.forEach(item => {
        numbersIn += item[0];
        numbersOut += item[1];
    });
    return numbersIn - numbersOut;
}


//solution
var number = function (busStops) {
    // Good Luck!
    let busCounter = 0;
    for (let busStop of busStops) {
        busCounter += busStop[0] -= busStop[1]
    }
    return busCounter;
}


function binToDec(bin) {
    let num = bin;
    let tot = 0;
    let base = 1;

    let len = num.length;
    for (let i = len - 1; i >= 0; i--) {
        if (num[i] == '1')
            tot += base;
        base = base * 2;
    }

    return tot;
}


//solution

function binToDec(bin) {
    let sum = 0;
    bin = bin.split("");
    bin.forEach(function (num, index) {
        if (num === "1") {
            sum += Math.pow(2, bin.length - index - 1);
        }
    });
    return sum;
}

//SOLUTION

function SeriesSum(n) {
    let total = 0;

    for (let i = 0; i < n; i++) {
        const denominator = 1 + (3 * i);
        const fraction = (1 / denominator);

        total += fraction;
    }

    return total.toFixed(2)
    // Happy Coding ^_^
}



//solution


function SeriesSum(n) {
    n = n - 1
    let x = 0
    let result = 1;
    if (n != -1) {
        for (i = 4; i < n * 3 + 2; i = i + 3) {
            result = result + 1 / i;
        }
    } else {
        return x.toFixed(2)
    }
    return result.toFixed(2);
}


//solution

function SeriesSum(n) {
    var str_arr = [], dec_arr = [], x, y;
    if (n == 0 || n == 1) {
        str_arr = [n];
        dec_arr = str_arr;
    }
    if (n >= 2) {
        str_arr = ["1", "1/4"];
        dec_arr = [1, 1 / 4];
    }
    while (str_arr.length < n) {
        x = str_arr[str_arr.length - 1];
        y = parseInt(x.toString().substr(2)) + 3;
        str_arr.push("1/".concat(y));
        dec_arr.push(1 / y);
    }
    var result = dec_arr.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    return result.toFixed(2);


    // solution
    function SeriesSum(n) {
        if (!n) return "0.00"

        var iterator = function (n, i = 1, divider = 1, acum = 1) {
            if (i > 1) acum += 1 / divider

            if (i < n) {
                divider += 3;
                return iterator(n, i + 1, divider, acum);
            }
            return acum.toFixed(2);
        }

        return iterator(n);
    }
}


//solution
function SeriesSum(n) {
    if (n === 0) { return "0.00" } else {
        let result = 0;
        let one = [1];

        for (let i = 0; i < n - 1; i++) {
            const a = one[i];
            one.push(a + 3);
        };

        let two = one.map(e => 1 / e);
        for (let i = 0; i < two.length; i++) {
            result += two[i];
        }
        return result.toFixed(2);
    }
};


//solution

function SeriesSum(n) {
    let sum = 1;// create variable for the numerator
    let den = 1;// create variable for the denominator

    if (n === 0) {
        return "0.00";
    }

    for (let i = 1; i < n; i++) { // increase denominator by 3, every time n increases by 1 
        den += 3;
        sum += (1 / den);
    }
    sum = sum.toFixed(2);
    sum.toString()
    return sum; // round the answer to 2 dec places, return as string
}



//solution

function SeriesSum(n) {
    if (n === 0) { return "0.00" } else {
        let result = 0;
        let one = [1];

        for (let i = 0; i < n - 1; i++) {
            const a = one[i];
            one.push(a + 3);
        };

        let two = one.map(e => 1 / e);
        for (let i = 0; i < two.length; i++) {
            result += two[i];
        }
        return result.toFixed(2);
    }
}



//solution

function SeriesSum(n) {
    // Happy Coding ^_^
    let SeriesArr = [];
    if (n !== 0) {
        SeriesArr.push(1);
        n = n - 1;
    }
    let x = 4;
    for (i = 0; i <= n - 1; i++) {
        SeriesArr.push(1 / x);
        x = x + 3;
    }

    let totalSum = 0;
    for (i = 0; i <= SeriesArr.length - 1; i++) {
        totalSum = totalSum + SeriesArr[i];
    }


    return totalSum.toFixed(2);
}

//solutions

function SeriesSum(n) {
    var str_arr = [], dec_arr = [], x, y;
    if (n == 0 || n == 1) {
        str_arr = [n];
        dec_arr = str_arr;
    }
    if (n >= 2) {
        str_arr = ["1", "1/4"];
        dec_arr = [1, 1 / 4];
    }
    while (str_arr.length < n) {
        x = str_arr[str_arr.length - 1];
        y = parseInt(x.toString().substr(2)) + 3;
        str_arr.push("1/".concat(y));
        dec_arr.push(1 / y);
    }
    var result = dec_arr.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    return result.toFixed(2);
}

//Solution

function addToSeries(x) {
    return 1 / (x * 3 + 1)
}

function SeriesSum(n) {
    if (n === 0) { return '0.00' }

    let nArr = []
    for (i = 0; i < n; i++) {
        nArr.push(addToSeries(i))
    }

    return String(nArr.reduce((x, total) => x + total).toFixed(2))
}

//solution

function SeriesSum(n) {

    if (n === 1) {
        return "1.00"
    } else if (n === 0) {
        return "0.00"
    }

    // Happy Coding ^_^
    let anwser = 1
    let counter = 1

    while (n > 1) {
        anwser = anwser + (1 / (1 + 3 * counter))
        n = n - 1
        counter++
    }
    return anwser.toFixed(2).toString()
}


//Solution

function SeriesSum(n) {
    if (n === 0) {
        return "0.00"
    } else {
        const array = [1]
        let accumulator = 1
        for (i = 1; i < n; i++) {
            accumulator = accumulator + 3
            array.push(accumulator)
        }

        const newArray = array.map((item) => 1 / item)
        const number = newArray.reduce((a, b) => a + b)
        return number.toFixed(2).toString()
    }
}


// solution

function SeriesSum(n) {
    let x = 0;
    let c = 1;
    for (let i = 0; i < n; i++) {
        x += 1 / c;
        c += 3
    }
    x = (Math.round(x * 100) / 100).toString()
    if (x.length == 1) { x += '.' }
    while (x.length != 4) {
        x += '0'
    }
    return x
}



// solution

function repeats(arr) {
    let repeat = [];
    arr.sort((a, b) => a - b)
    //   console.log(arr)
    for (i = 0; i < arr.length; i++) {
        switch (i) {
            case 0:
                if (arr[i] !== arr[i + 1])
                    repeat.push(arr[i])
                break;
            case arr.length - 1:
                if (arr[i] !== arr[i - 1])
                    repeat.push(arr[i])
                break;
            default:
                if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1])
                    repeat.push(arr[i])
                break;
        }
    }
    return repeat.reduce((a, b) => a + b, 0);
}


//solution

const repeats = (arr) => {
    const seen1 = new Set();
    const seen2 = new Set();

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];

        if (!seen1.has(val)) {
            sum += val;
            seen1.add(val);
            continue;
        }

        if (!seen2.has(val)) {
            sum -= val;
            seen2.add(val);
        }
    }

    return sum;
};

//Solution

function repeats(arr) {
    //..
    let result = [];
    let sorted = arr.sort((a, b) => a - b);
    console.log(arr.sort((a, b) => a - b))
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] != sorted[i + 1] && sorted[i] != sorted[i - 1]) {
            result.push(sorted[i])
        }
    }
    console.log(result)
    return result.reduce((sum, current) => sum + current, 0);
};

//solution
function repeats(arr) {

    const obj = {}
    let sum = 0;

    arr.forEach((v) => {
        if (!obj[v]) obj[v] = 1
        else obj[v] += 1
    })

    for (const val in obj) {
        if (obj[val] === 1) {
            sum += Number(val)
        }
    }

    return sum
};

//SOLUTION

function repeats(arr) {
    let repeat = [];
    arr.sort((a, b) => a - b)
    //   console.log(arr)
    for (i = 0; i < arr.length; i++) {
        switch (i) {
            case 0:
                if (arr[i] !== arr[i + 1])
                    repeat.push(arr[i])
                break;
            case arr.length - 1:
                if (arr[i] !== arr[i - 1])
                    repeat.push(arr[i])
                break;
            default:
                if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1])
                    repeat.push(arr[i])
                break;
        }
    }
    return repeat.reduce((a, b) => a + b, 0);
}

//Solution

function repeats(arr) {
    var counter1 = 1;
    var sum1 = 0;
    for (var i = 0; i < arr.length; i++) {
        counter1 = 1;
        for (var j = 0; j < arr.length; j++) {
            if (i != j) {
                if (arr[i] == arr[j]) {
                    counter1 += 1;
                }

                if (counter1 > 1) {
                    break;
                }
            }
        }

        if (counter1 == 1) {
            sum1 += arr[i];
        }
    }

    return sum1;
};

//SOLUTION

function repeats(arr) {
    //..
    const newArr = [...arr];

    newArr.sort((a, b) => { return a - b });

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === newArr[i - 1]) {
            newArr.splice(i - 1, 2);
            i--;
        }
    }
    console.log(newArr);
    return newArr.reduce((a, b) => { return a + b }, 0);
};

//solution

function repeats(arr) {
    let singles = [];
    arr.forEach((num) => {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (num === arr[i]) {
                counter++
            }
        }
        if (counter === 1) {
            singles.push(num);
        }
    })
    return singles[0] + singles[1];
};

// Solution

const repeats = (arr) => {
    const seen1 = new Set();
    const seen2 = new Set();

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];

        if (!seen1.has(val)) {
            sum += val;
            seen1.add(val);
            continue;
        }

        if (!seen2.has(val)) {
            sum -= val;
            seen2.add(val);
        }
    }

    return sum;
};


//solution

function repeats(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in obj)) {
            obj[arr[i]] = 0
        }
        obj[arr[i]]++
    }
    let sum = 0
    for (let keys in obj) {
        if (obj[keys] === 1) {
            sum += +keys
        }
    }
    return sum
};
// solutions

function repeats(arr) {
    const map = new Map();
    arr.forEach(n => map.set(n, map.has(n) ? map.get(n) + 1 : 1));
    return Array.from(map).reduce((a, c) => c[1] === 1 ? a + c[0] : a, 0);
};


//solution
function repeats(arr) {
    let equation = []
    let sorted = arr.sort((a, b) => a - b)

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== sorted[i + 1] && sorted[i] !== sorted[i - 1]) {
            equation.push(sorted[i])
        }
    }

    return equation.reduce((acc, num) => acc + num)
};

// solution

function repeats(arr) {
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item))
        .reduce((acc, val) => acc + val, 0)
};

// solution

const repeats = (arr) => arr.reduce((reducer, item, ind, array) => reducer += array.filter(i => i === item).length === 1 ? item : 0, 0);

//solution
const { sum, countBy } = require('lodash')

function repeats(arr) {
    const count = countBy(arr)
    return sum(arr.filter(x => count[x] == 1))
};

//solution

function repeats(arr) {
    var obj = arr.reduce((acc, e) => {
        acc[e] = acc[e] + 1 || 1;
        return acc;
    }, {});
    var freq = Object.keys(obj).sort((a, b) => obj[a] - obj[b]).map(e => Number(e));
    return freq[0] + freq[1];
};

//solution

repeats = a => a.filter(r => a.indexOf(r) == a.lastIndexOf(r)).reduce((a, b) => a + b, 0)

//solution

const repeats = arr => {
    return arr.reduce(([A, S], x) => {
        return A[x] ? [A, S - x] : [Object.assign({ [x]: 1 }, A), S + x];
    }, [{}, 0])[1];
}

//solution

function repeats(arr) {
    return arr.reduce((a, c) => arr.filter(x => x == c).length > 1 ? a : a + c, 0);
};

//solution

function repeats(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr = arr.filter(v => v !== arr[i]);
            i--;
        };
    };
    return arr.reduce((a, v) => a + v, 0);
};


//solution 

function repeats(arr) {
    const uniques = [];

    arr.map(v => {
        if (uniques.includes(v)) uniques.splice(uniques.indexOf(v), 1);
        else uniques.push(v);
    });

    return uniques.reduce((a, b) => a + b);
};

//solution 

function repeats(arr) {
    return arr.sort((a, b) => a - b).map((x, i) => x == arr[i + 1] || x == arr[i - 1] ? x.toString() : x)
        .filter(x => typeof x == 'number').reduce((a, b) => a + b, 0)
};

// Solution

function repeats(arr) {
    //..
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item)).reduce((acc, val) => acc + val)
}

// uniqueArray = a.filter(function(item, pos) {
//     return a.indexOf(item) == pos;
// })

//solution

function repeats(arr) {
    var result = {};
    var array = [];
    arr.forEach(item => result[item] ? result[item]++ : result[item] = 1);
    array = Object.entries(result);
    array = array.filter(valor => valor.includes(1));
    array = array.map(item => item[0]).reduce((a, b) => Number(a) + Number(b));
    return array;
};

//solution always

function repeats(arr) {
    arr.sort((a, b) => { return a - b; });
    return arr.reduce((prev, current, index, arr) => {
        if (0 === binarySearch(arr, current, index + 1, arr.length - 1) && current != arr[index - 1]) {
            prev += current;
        }
        return prev;
    }, 0);
};
function binarySearch(arr, key, low, high) {  // binary search
    let found = 0, mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        if (arr[mid] == key) {
            found = 1;
            break;
        }
    }
    return found;
}

// solution
function repeats(arr) {
    unique = Array()
    for (i = 0; i < arr.length; i++) {
        if (count(arr, arr[i]) < 2) {
            unique.push(arr[i])
        }
    }
    return unique.reduce(sum)
};

let sum = (value, arr) => {
    return value + arr
}

function count(a, i) {
    var result = 0;
    for (var o in a)
        if (a[o] == i)
            result++;
    return result;
}

// solution

function repeats(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let p = 0;
        for (let j = 0; j < arr.length; j++) {
            if (i == j) {
            } else if (arr[i] == arr[j]) {
                p = 1;
            } else {
            }
        }
        if (p == 0) {
            sum += arr[i];

        }
    }
    return sum;
};


// solution

function repeats(arr) {
    let uniqueArray = [];
    let sorted_arr = arr.slice().sort();
    // Loop through array values
    for (i = 0; i < arr.length; i++) {
        //console.log(arr[i])
        if (uniqueArray.indexOf(arr[i]) === -1) {
            //  console.log('j')
            uniqueArray.push(arr[i]);
        } else {
            // console.log('fff')
        }
    }
    console.log(uniqueArray)


    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }


    var array3 = uniqueArray.filter(function (obj) { return results.indexOf(obj) == -1; });

    console.log(array3);
    return array3.reduce((a, b) => a + b, 0)

};

// solution 
function repeats(arr) {
    let newArr = arr.slice(0);
    let repeatedNumbersArr = [];
    let uniqueNumbersArr = [];
    let sumNumbersArr = 0;

    for (let i = 0; i < arr.length; i++) {
        newArr.shift();
        let num = arr[i];
        newArr.includes(num) || repeatedNumbersArr.includes(num) ? repeatedNumbersArr.push(num) : uniqueNumbersArr.push(num);
    };
    for (let i = 0; i < uniqueNumbersArr.length; i++) {
        sumNumbersArr += uniqueNumbersArr[i];
    }
    return sumNumbersArr;
};
repeats([4, 5, 7, 5, 4, 8]);

//solution

function repeats(arr) {
    const set = new Set(arr);
    const sum = arr.reduce((sum, num) => sum + num)
    const distinct = Array.from(set)
    const sumDistinct = distinct.reduce((sum, num) => sum + 2 * num, 0)
    return sumDistinct - sum
    console.log({ sum })
    console.log({ set })
    console.log({ distinct })
    console.log({ sumDistinct })
};

// solution


function repeats(arr) {

    let map = {};
    arr.forEach(num => {
        map[num] = map[num] ? map[num] += 1 : 1;
    })

    let total = 0;

    for (let key in map) {
        if (map[key] === 1) total += Number(key);
    }

    return total;

};

// solution 
function repeats(arr) {
    //..
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let flag = false
        for (let j = 0; j < result.length; j++) {
            if (arr[i] == result[j][0]) {
                result[j][1]++;
                flag = true
            }

        }
        if (flag == false) {
            result.push([arr[i], 1])
        }
    }
    let result2 = 0
    for (let i = 0; i < result.length; i++) {
        if (result[i][1] == 1) {
            result2 += result[i][0]
        }
    }
    return result2
};

// solution
function repeats(arr) {
    //..
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let flag = false
        for (let j = 0; j < result.length; j++) {
            if (arr[i] == result[j][0]) {
                result[j][1]++;
                flag = true
            }

        }
        if (flag == false) {
            result.push([arr[i], 1])
        }
    }
    let result2 = 0
    for (let i = 0; i < result.length; i++) {
        if (result[i][1] == 1) {
            result2 += result[i][0]
        }
    }
    return result2
};

// solution 
function repeats(arr) {

    var count_number = []; //Para contar quantidade de cada número
    var total = 0; //Para somar valores únicos

    arr.forEach(function (value) {

        if (typeof count_number[value] !== 'undefined') {
            count_number[value] = count_number[value] + 1;
        }
        else {
            count_number[value] = 1;
        }

    });

    count_number.forEach(function (value, index) {
        if (value == 1) {
            total += index;
        }
    });

    return total;
};

//solution

function repeats(arr) {

    //create empty variables. One for previous element to use in loop and the other to save values that have repeated. 
    var a = [], b = [], prev;

    //sort the array into ascending order
    arr.sort(function (a, b) {
        return a - b;
    });

    //Loop through the now sorted array and add numbers to a that have repeated. 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == prev) {
            a.push(arr[i])
            b.push(1)
        }
        prev = arr[i]
    }

    //nested loop to look at each value of arr and check if it matches any value in a, as all the value in a must be removed from arr. 
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (arr[i] == a[j]) {

                arr.splice(i, 1)
                arr.splice(i, 1)
            }
        }
    }

    //Return the sum of all the elements left in the array. 
    return arr.reduce((a, b) => a + b, 0)


}
let x = ([5, 10, 19, 13, 10, 13])


repeats(x);


//  solution

function repeats(arr) {
    let singles = [];
    let doubles = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i], i + 1) === -1 && doubles.indexOf(arr[i]) === -1) {
            singles.push(arr[i]);
        } else {
            doubles.push(arr[i]);
        }
    }
    console.log(singles);
    return singles.reduce((a, b) => a + b);
};

// solution

function repeats(arr) {
    const numbersHash = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (numbersHash[num]) {
            numbersHash[num] += 1;
        } else {
            numbersHash[num] = 1;
        }
    }
    let total = 0;
    for (const num in numbersHash) {
        if (numbersHash[num] == 1) {
            total += parseInt(num);
        }
    }
    return total;
};


// Solution

function repeats(arr) {
    const x = arr.sort((a, b) => a - b);
    for (let i = 0; i < x.length; i++) {
        if (x[i] === x[i + 1]) {
            x[i] = 0;
            x[i + 1] = 0;
        }
    }

    // solution 
    function repeats(arr) {
        return arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e)).reduce((a, b) => a + b, 0)
    };


    return x.reduce((e, i) => e + i, 0);

};

// solution

function repeats(arr) {
    let obj = {}, unq = []
    for (let val of arr) {
        if (!obj[val]) obj[val] = 1
        else {
            obj[val]++
        }
    }
    for (let val in obj) {
        if (obj[val] < 2) unq.push(parseInt(val))
    }
    return unq.reduce((ac, v) => ac + v, 0)
};

// solution 
function repeats(arr) {
    var result = {};
    var array = [];
    arr.forEach(item => result[item] ? result[item]++ : result[item] = 1);
    array = Object.entries(result);
    array = array.filter(valor => valor.includes(1));
    array = array.map(item => item[0]).reduce((a, b) => Number(a) + Number(b));
    return array;
};

// solution

function repeats(arr) {
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        for (let w = 0; w < arr.length; w++) {
            if (a === arr[w]) {
                sum++;
            }
        }
        if (sum === 1) {
            sum2 = sum2 + a;

        }
        sum = 0;
    }
    return sum2;
};

// solution

const repeats = arr => {
    let count = {}
    let total = 0;
    arr.forEach(e => count[e] != undefined ? count[e]++ : count[e] = 1)
    for (let key in count) {
        if (count[key] == 1) total += +key;
    }
    return total;
};

// solution 
function repeats(arr) {
    const c = counter(arr)
    return arr.filter(x => c[x] == 1).reduce((a, b) => a + b)
}
function counter(e) {
    const C = {}
    for (const i of e) C[i] = (C[i] || 0) + 1
    return C
}

// solution

function repeats(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            count += arr[i];
        }

    }
    return count;
};

// solution 

const repeats = (arr) =>
    // iterate over elements and filter
    arr.filter((x) =>
        // get the count of the current element in array
        // and filter based on the count
        arr.filter((y) =>
            // compare with current element
            y == x).length == 1).reduce((a, b) => a + b);


// solution
const getSingles = (t, i, a) => !a.slice(a.indexOf(t) + 1).includes(t)
const repeats = a => a.filter(getSingles).reduce((x, y) => x + y)

// solution

const repeats = arr => 2 * [...(new Set(arr))].reduce((s, n) => s + n, 0) - arr.reduce((s, n) => s + n, 0);

// solution

function repeats(arr) {
    return arr
        .filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
        .reduce((a, b) => a + b);
};

// solution
// i like reduce 
const repeats = (arr) => [0, ...arr].
    reduce((acc, el, _, arr) => arr.
        filter(e => e === el).
        length < 2 ? acc + el : acc)


// solution

function repeats(arr) {
    var helper = {};
    for (var i = 0; i < arr.length; ++i) {
        if (helper[arr[i]] === undefined) {
            helper[arr[i]] = 1;
        } else {
            delete helper[arr[i]];
        }
    }
    var ks = Object.keys(helper);
    return parseInt(ks[0]) + parseInt(ks[1]);
};

// solution 
function repeats(arr) {

    single = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr.indexOf(arr[i], 0) == arr.lastIndexOf(arr[i], -1)) {

            single.push(arr[i])

        }

    }

    return single.reduce((a, b) => a + b)

};

// solution

function repeats(arr) {
    // place to store the sum
    let sum = 0
    // place to store the lookup table
    let lookup = {}
    // build up object with number of occurancies of each number
    for (let num of arr) {
        lookup[num] = lookup[num] + 1 || 1
    }
    // iterate over the values
    for (const key in lookup) {
        if (Object.hasOwnProperty.call(lookup, key)) {
            // if the values is 1
            if (lookup[key] == 1) {
                // add the key to the sum
                sum += +key
            }
        }
    }
    // return sum
    return sum
}
//soluton

function repeats(arr) {
    let nonRepeatNums = 0;
    for (let i = 0; i < arr.length; i++) {
        let cloneArr = arr.slice();
        cloneArr.splice(i, 1);
        if (!cloneArr.includes(arr[i])) {
            nonRepeatNums += arr[i];
        }
    }
    return nonRepeatNums
}

// SOLUTION

function repeats(arr) {
    //..
    let slicedArray = arr.sort();
    let addedArray = arr.reduce((acc, cur) => { return acc + cur })
    let regularArr = arr;
    let newArray = [];
    let deleteNum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (slicedArray[i + 1] === slicedArray[i]) {
            newArray.push(slicedArray[i])
        } else {//do nothing
        }
    }
    newArray.reduce((acc, curr) => {
        return deleteNum = acc + curr
    })
    return addedArray - deleteNum * 2

};

// Solution
function repeats(arr) {
    let scarto = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                scarto.push(arr[i])
            }
        }
    }
    let once = arr.filter(function (n) {
        return !scarto.includes(n)
    })
    let sum = 0
    once.forEach(function (value) {
        sum = sum + value
    })
    return sum
};

// solution
function repeats(arr) {
    var sum = 0;
    for (x = 0; x <= arr.length - 1; x++) {
        var chck = 0;
        for (y = 0; y <= arr.length - 1; y++) {
            if (arr[x] == arr[y]) {
                chck += 1;
            }
            if (chck > 1) {
                break;
            }
        }
        if (chck == 1) {
            sum += arr[x];
        }
    }
    return sum;
};

// solution

function repeats(arr) {

    let total = 0;

    arr.forEach(number => {

        const filtered = arr.filter((num, index) => num === number);

        if (filtered.length === 1) {

            total += filtered[0];

        }

    });

    return total;


};

// solution

function repeats(arr) {
    return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((acc, v) => acc + v, 0)
};

// solution

function repeats(arr) {
    //..
    var array = [];
    var summa = 0;

    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter <= 1) {
            array.push(arr[i]);
        }
    }
    console.log(array);
    for (var k = 0; k < array.length; k++) {
        summa += array[k];
    }
    return summa;
};

// solution

function repeats(arr) {
    let x = arr.filter((v, i) => arr.indexOf(v) !== i);
    return arr.reduce((acc, curr) => !x.includes(curr) ? acc + curr : acc, 0)
};

// solution

function repeats(arr) {
    let set = new Set()
    arr.forEach(x => set.has(x) ? set.delete(x) : set.add(x))
    return [...set].reduce((s, v) => s + v, 0)
}

// solution

function repeats(arr) {
    var helper = {};
    for (var i = 0; i < arr.length; ++i) {
        if (helper[arr[i]] === undefined) {
            helper[arr[i]] = 1;
        } else {
            delete helper[arr[i]];
        }
    }
    var ks = Object.keys(helper);
    return parseInt(ks[0]) + parseInt(ks[1]);
};

// solution 

function repeats(arr) {
    return arr
        .filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
        .reduce((a, b) => a + b);
};

// solution 
function repeats(arr) {
    let numbersRepetitions = {};
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];

        if (!numbersRepetitions[number]) {
            numbersRepetitions[number] = 1;
            sum += number;
        } else {
            sum -= number;
        }
    }

    return sum;
};

// solution

function repeats(arr) {

    let newArr = []
    arr = arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) { if (arr[i] === arr[i + 1]) arr.splice(i, 2, 0, 0) }

    let returnNum = 0;

    arr.map(el => returnNum += el);
    return returnNum
};

// solution 

function repeats(arr) {
    //..
    var array = [];
    var summa = 0;

    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter <= 1) {
            array.push(arr[i]);
        }
    }
    console.log(array);
    for (var k = 0; k < array.length; k++) {
        summa += array[k];
    }
    return summa;
};

// solution

function repeats(arr) {

    let total = 0;

    arr.forEach(number => {

        const filtered = arr.filter((num, index) => num === number);

        if (filtered.length === 1) {

            total += filtered[0];

        }

    });

    return total;

    // solution 

    /*
Parameters: an array of numbers, two occur once and the rest occur twice
Return: sum of numbers that only occur once
Examples: [3, 4, 5, 3, 4, 6] => 5 + 6 = 11;
Pseudocode:
create an object with array, assigning values to number of occurances
leon mentioned reduce, filter, indexOf; use reduce to create object
*/
    function repeats(arr) {
        let obj = arr.reduce((acc, cur) => {
            if (cur in acc) {
                acc[cur] += 1
            } else {
                acc[cur] = 1;
            }
            return acc
        }, {})
        let result = 0
        for (let num in obj) {
            if (obj[num] === 1) {
                result += Number(num)
            }
        }
        return result
    };

    // soultion 

    function repeats(arr) {
        // place to store the sum
        let sum = 0
        // place to store the lookup table
        let lookup = {}
        // build up object with number of occurancies of each number
        for (let num of arr) {
            lookup[num] = lookup[num] + 1 || 1
        }
        // iterate over the values
        for (const key in lookup) {
            if (Object.hasOwnProperty.call(lookup, key)) {
                // if the values is 1
                if (lookup[key] == 1) {
                    // add the key to the sum
                    sum += +key
                }
            }
        }
        // return sum
        return sum
    }

    // solution

    function repeats(arr) {
        let numbersRepetitions = {};
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            let number = arr[i];

            if (!numbersRepetitions[number]) {
                numbersRepetitions[number] = 1;
                sum += number;
            } else {
                sum -= number;
            }
        }

        return sum;
    };


    // solution 

    function repeats(arr) {
        let equation = []
        let sorted = arr.sort((a, b) => a - b)

        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i] !== sorted[i + 1] && sorted[i] !== sorted[i - 1]) {
                equation.push(sorted[i])
            }
        }

        return equation.reduce((acc, num) => acc + num)
    };


};

// solution 

function repeats(arr) {
    //..
    let result = [];
    let sorted = arr.sort((a, b) => a - b);
    console.log(arr.sort((a, b) => a - b))
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] != sorted[i + 1] && sorted[i] != sorted[i - 1]) {
            result.push(sorted[i])
        }
    }
    console.log(result)
    return result.reduce((sum, current) => sum + current, 0);
};

// solution 

function repeats(arr) {
    let charMap = {}

    for (let char of arr) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    }

    let arr2 = []

    for (let char in charMap) {
        if (charMap[char] === 1) {
            arr2.push(+char)
        }
    }

    return arr2.reduce((a, b) => a + b)
};

// solution 

function repeats(arr) {
    // place to store the sum
    let sum = 0
    // place to store the lookup table
    let lookup = {}
    // build up object with number of occurancies of each number
    for (let num of arr) {
        lookup[num] = lookup[num] + 1 || 1
    }
    // iterate over the values
    for (const key in lookup) {
        if (Object.hasOwnProperty.call(lookup, key)) {
            // if the values is 1
            if (lookup[key] == 1) {
                // add the key to the sum
                sum += +key
            }
        }
    }
    // return sum
    return sum
}

// solution 

function repeats(arr) {
    let result = {}
    let resultado = 0;
    arr.forEach((item, key) => {
        result[item] ? result[item]++ : result[item] = 1
    })

    for (const [key, value] of Object.entries(result)) {
        if (value === 1) {
            resultado += Number(key)
        }
    }

    return resultado
};

// solution

function repeats(arr) {
    var result = {};
    var array = [];
    arr.forEach(item => result[item] ? result[item]++ : result[item] = 1);
    array = Object.entries(result);
    array = array.filter(valor => valor.includes(1));
    array = array.map(item => item[0]).reduce((a, b) => Number(a) + Number(b));
    return array;
};


// solution

function repeats(arr) {
    let counting = {}
    let total = 0
    for (let val of arr) {
        counting[val] = (counting[val] || 0) + 1
    }
    for (let val2 in counting) {
        console.log(counting[val2])
        if (counting[val2] === 1) {
            total += parseInt(val2)
        }
    }
    return total
}; c


// solution

function repeats(arr) {
    //given an array of integeres return the sum of unqiue integers from the given
    //make a object varaible to store the integers with occurences
    let obj = {};
    let result = 0;
    //loop the arr
    for (let elem of arr) {
        if (obj[elem] === undefined) {
            obj[elem] = 1;
        } else {
            obj[elem]++;
        }
    }
    //add the integers into the object variable
    //iterate the object
    for (let elem2 in obj) {
        if (obj[elem2] === 1) {
            result += parseInt(elem2);
        }
    }
    return result;
    //find the value with only 1 and add them together
    //return the sum of the two unique integers
};

// solution

let counts = arr.reduce((acc, el) => {
    !acc[el] ? acc[el] = +1 : acc[el] += 1;
    return acc;
}, {});
let sum = 0;
for (let key in counts) {
    if (counts[key] == 1) { sum = sum + +key; }
}
return sum;

// solution

function repeats(arr) {
    let noRepeatedNumbers = [...new Set(arr)];
    let doubleSetNumbers = [...noRepeatedNumbers, ...noRepeatedNumbers]
    let doubleSum = doubleSetNumbers.reduce((ac, cv) => ac += cv, 0)
    let missingTwo = arr.reduce((ac, cv) => ac += cv, 0);

    return doubleSum - missingTwo;


};

// solution 

function repeats(arr) {
    let uniArr = [];
    let uniNum = [];
    arr.forEach((i) => {
        if (uniArr.includes(i) && arr[i]) {
            uniArr.push(i);
        }
    });
    function arrDiff(arr1, arr2) {
        let array = [], diff = [];
        for (let i = 0; i < arr1.length; i++) {
            array[arr1[i]] = true;
        }
        for (let i = 0; i < arr2.length; i++) {
            if (array[arr2[i]]) {
                delete array[arr2[i]];
            } else {
                array[arr2[i]] = true;
            }
        }
        for (let k in array) {
            diff.push(k);
        }
        return diff;
    }
    uniNum = arrDiff(uniArr, arr);
    let sumNum = uniNum.reduce((a, b) => (a - 0) + (b - 0));
    return sumNum;
};

// solution 

function repeats(arr) {
    let newArray = [];
    let x;

    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        } else if (newArray.includes(arr[i])) {
            x = newArray.indexOf(arr[i]);
            newArray.splice(x, 1);
        }
    }
    return newArray.reduce((a, c) => a + c);
}

// solution

function repeats(arr) {
    let hash = {}
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] ? hash[arr[i]] = false : hash[arr[i]] = true;
    }
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            sum += arr[i]
        }
    }
    console.log(hash)
    console.log(sum)
    return sum
};

// solution 

function repeats(arr) {
    arr.sort((a, b) => { return a - b; });
    return arr.reduce((prev, current, index, arr) => {
        if (0 === binarySearch(arr, current, index + 1, arr.length - 1) && current != arr[index - 1]) {
            prev += current;
        }
        return prev;
    }, 0);
};
function binarySearch(arr, key, low, high) {  // binary search
    let found = 0, mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        if (arr[mid] == key) {
            found = 1;
            break;
        }
    }
    return found;
}

// solution

function repeats(arr) {
    let sum = 0;
    //console.log(newarr)
    for (let i = 0; i < arr.length; i++) {
        let newarr = [];
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                newarr.push(arr[j])
                console.log(newarr)
            }
        }
        if (newarr.length < 1) {
            sum += arr[i];
        }
    }
    return sum
}


// solution

function repeats(arr) {
    //..
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++;
            }
        }
        if (count === 1) {
            sum += arr[i];
        }
    }
    return sum;
};

// solution

function repeats(arr) {
    //..
    var array = [];
    var summa = 0;

    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter <= 1) {
            array.push(arr[i]);
        }
    }
    console.log(array);
    for (var k = 0; k < array.length; k++) {
        summa += array[k];
    }
    return summa;
};

//solution 

function repeats(arr) {
    //..
    let result = [];
    let sorted = arr.sort((a, b) => a - b);
    console.log(arr.sort((a, b) => a - b))
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] != sorted[i + 1] && sorted[i] != sorted[i - 1]) {
            result.push(sorted[i])
        }
    }
    console.log(result)
    return result.reduce((sum, current) => sum + current, 0);
};


// solution

function repeats(arr) {
    //..
    var array = [];
    var summa = 0;

    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter <= 1) {
            array.push(arr[i]);
        }
    }
    console.log(array);
    for (var k = 0; k < array.length; k++) {
        summa += array[k];
    }
    return summa;
};


// solution 

function repeats(arr) {
    const copy = [...arr];

    copy.sort((a, b) => a - b);

    for (let i = 0; i < copy.length; i++) {
        if (copy[i] === copy[i + 1]) {
            copy[i] = null;
            copy[i + 1] = null;
        }
    }

    return copy.filter((x) => typeof x === 'number').reduce((a, b) => a + b);
};

// solution 

function repeats(arr) {
    // P: array of numbers with two numbers have duplicates
    // R: sum of two numbers that have duplicates
    // E: [1,2,2,3,3,4] = 2+3 = 5
    // P: Iterate through the array
    // push every element into a frequency hashmap
    // if frequency in hashmap ever reaches 2, 
    // resultVariable += element with 2 frequency
    // return resultVariable
    //   let numFrequency = {},
    //       sum = 0,
    //       windowStart = 0;

    //   for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    //     const numRight = arr[windowEnd]
    //     if (!(numRight in numFrequency)){
    //       numFrequency[numRight] = 0;
    //     }
    //     while(numFrequency <= 1){
    //       numFrequency[numRight] += 1 
    //     }
    //     const numLeft = arr[windowStart]
    //     if(numFrequency[numRight] == 2){      
    //       sum += numFrequency[numLeft]
    //     }
    //     windowStart += 1;
    //   }
    //   return sum;
    let counts = arr.reduce((acc, el) => {
        !acc[el] ? acc[el] = +1 : acc[el] += 1;
        return acc;
    }, {});
    let sum = 0;
    for (let key in counts) {
        if (counts[key] == 1) { sum = sum + +key; }
    }
    return sum;
};

// solution

function repeats(arr) {
    arr.sort();
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] != arr[i]) newArr.push(arr[i]);
        else i += 1;
    }
    return newArr.reduce((sum, num) => sum + num);
};

// solution

const repeats = (arr) => {
    const seen1 = new Set();
    const seen2 = new Set();

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];

        if (!seen1.has(val)) {
            sum += val;
            seen1.add(val);
            continue;
        }

        if (!seen2.has(val)) {
            sum -= val;
            seen2.add(val);
        }
    }

    return sum;
};

// solution

function repeats(arr) {
    let nums = {};
    for (let num of arr) {
        if (nums[num] === undefined) {
            nums[num] = 1;
        } else {
            nums[num] += 1;
        }
    }
    let singleSum = 0;
    for (let key in nums) {
        if (nums[key] < 2) {
            singleSum += +key;
        }
    }
    return singleSum;
};

// solution

function repeats(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const count = arr.reduce((pre, cur) => (cur === arr[i]) ? ++pre : pre, 0)
        if (count === 1) {
            result += arr[i];
        }
    }
    return result
};

// solution

function repeats(arr) {
    let result = 0
    let resultArray = []

    for (let i = 0; i < arr.length; i++) {

        if (!resultArray.includes(arr[i])) { resultArray.push(arr[i]) }
        else { resultArray = resultArray.filter((index) => { return index !== arr[i] }) }
    }

    for (let i = 0; i < resultArray.length; i++) {
        result += resultArray[i]
    }
    return result
};

// solution

function repeats(arr) {
    const arrSort = arr.slice().sort((a, b) => a - b);

    let result = 0;

    for (let i = 0; i <= arrSort.length; i++) {
        if (arrSort[i] !== arrSort[i - 1] && arrSort[i] !== arrSort[i + 1]) {
            result += arrSort[i];
        }
    }

    return result
};

// solution

function repeats(arr) {
    let arrSum = [];
    let sumAll = 0;
    let sumRepeat = 0;
    arr.sort(function (a, b) { return a - b });
    for (let i = 0; i < arr.length; i++) {
        sumAll += arr[i];
        if (arr[i] === arr[i + 1]) {
            arrSum.push(arr[i]);
        }
    }
    for (let i = 0; i < arrSum.length; i++) {
        sumRepeat += arrSum[i];
    }
    return sumAll - 2 * sumRepeat;
};

// solution

function repeats(arr) {
    //..  
    let newArr = arr.filter((value, index) => {
        return arr.indexOf(value) !== index;
    });
    let i = arr.length,
        j = newArr.length;

    while (i--) {
        while (j--) {
            if (arr[i] === newArr[j]) {
                arr.splice(i, 1);
                break;
            }
        }
        j = newArr.length;
    }
    return arr.reduce((a, b) => a + b);
};

// solution 

function repeats(arr) {
    let sum = 0;
    const occurrence = {};

    arr.forEach(num => {
        occurrence[num] ? occurrence[num]++ : occurrence[num] = 1;
    })

    for (let num in occurrence) {
        if (occurrence[num] === 1) {
            sum += parseInt(num);
        }
    }

    return sum;

}

// solution
function repeats(arr) {
    return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a, b) => a + b, 0);
};

// solution 

function repeats(arr) {
    return arr
        .filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
        .reduce((a, b) => a + b);
};

// solution

function repeats(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            count += arr[i];
        }

    }
    return count;
};

// solution

function repeats([h, ...t], s = new Set()) {
    return (s.has(h) ? -h : h) + (t.length && repeats(t, s.add(h)))
}

// solution

function repeats(numbers) {
    let sum = 0

    for (const number of numbers) {
        const firstOccurence = numbers.indexOf(number)
        const lastOccurence = numbers.lastIndexOf(number)

        if (firstOccurence == lastOccurence) {
            sum += number
        }
    }

    return sum
}

// solution

function repeats(arr) {
    return arr
        .filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
        .reduce((a, b) => a + b);
};

// solution

// i like reduce 
const repeats = (arr) => [0, ...arr].
    reduce((acc, el, _, arr) => arr.
        filter(e => e === el).
        length < 2 ? acc + el : acc)


// solution 
function repeats([h, ...t], s = new Set()) {
    return (s.has(h) ? -h : h) + (t.length && repeats(t, s.add(h)))
}


// solution 

function repeats(arr) {
    //..
    var array = [];
    var summa = 0;

    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter <= 1) {
            array.push(arr[i]);
        }
    }
    console.log(array);
    for (var k = 0; k < array.length; k++) {
        summa += array[k];
    }
    return summa;
};

// solution

function repeats(arr) {
    const uniques = [];

    arr.map(v => {
        if (uniques.includes(v)) uniques.splice(uniques.indexOf(v), 1);
        else uniques.push(v);
    });
    return uniques.reduce((a, b) => a + b);
};

// solution

function repeats(arr) {

    let dup_arr = []
    let new_arr = []
    arr.map(n => dup_arr.includes(n) ? dup_arr.map(el => el == n && new_arr.push(el)) : dup_arr.push(n))
    return dup_arr.filter(num => !new_arr.includes(num)).reduce((acc, cv) => acc + cv)
}

// solution 

function repeats(arr) {
    let save = []
    let set = [...new Set(arr)].filter(el => arr.filter(e => e === el).length === 1)
    return set.reduce((acc, cur) => acc + cur)
};

// solution

function repeats(arr) {
    //..
    let result = [];
    let sorted = arr.sort((a, b) => a - b);
    console.log(arr.sort((a, b) => a - b))
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] != sorted[i + 1] && sorted[i] != sorted[i - 1]) {
            result.push(sorted[i])
        }
    }
    console.log(result)
    return result.reduce((sum, current) => sum + current, 0);
};

// solution

const repeats = arr => arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a, b) => a + b)

// solution
function repeats(arr) {
    let counts = arr.reduce((cnts, num) => {
        if (!cnts[num]) cnts[num] = 0;
        cnts[num]++;
        return cnts;
    }, {});

    return Object.entries(counts).reduce((sum, [num, cnt]) => cnt == 1 ? sum + +num : sum, 0);
};

// solution

function repeats(arr) {
    //..
    var array = [];
    var summa = 0;

    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter <= 1) {
            array.push(arr[i]);
        }
    }
    console.log(array);
    for (var k = 0; k < array.length; k++) {
        summa += array[k];
    }
    return summa;
};

// solution

function repeats(arr) {
    const uniques = [];

    arr.map(v => {
        if (uniques.includes(v)) uniques.splice(uniques.indexOf(v), 1);
        else uniques.push(v);
    });

    return uniques.reduce((a, b) => a + b);
};

// solution

function repeats(arr) {

    let dup_arr = []
    let new_arr = []
    arr.map(n => dup_arr.includes(n) ? dup_arr.map(el => el == n && new_arr.push(el)) : dup_arr.push(n))
    return dup_arr.filter(num => !new_arr.includes(num)).reduce((acc, cv) => acc + cv)
}

// solution
function repeats(arr) {
    let save = []
    let set = [...new Set(arr)].filter(el => arr.filter(e => e === el).length === 1)
    return set.reduce((acc, cur) => acc + cur)
};

// solution 

function repeats(arr) {
    let set = new Set()
    arr.forEach(x => set.has(x) ? set.delete(x) : set.add(x))
    return [...set].reduce((s, v) => s + v, 0)
}

// solution

function repeats(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            count += arr[i];
        }

    }
    return count;
};

// solution

const repeats = (arr) =>
    // iterate over elements and filter
    arr.filter((x) =>
        // get the count of the current element in array
        // and filter based on the count
        arr.filter((y) =>
            // compare with current element
            y == x).length == 1).reduce((a, b) => a + b);

// solution 

function repeats(arr) {

    let dup_arr = []
    let new_arr = []
    arr.map(n => dup_arr.includes(n) ? dup_arr.map(el => el == n && new_arr.push(el)) : dup_arr.push(n))
    return dup_arr.filter(num => !new_arr.includes(num)).reduce((acc, cv) => acc + cv)
}

// solution 
function repeats(arr) {
    //..
    var array = [];
    var summa = 0;

    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter <= 1) {
            array.push(arr[i]);
        }
    }
    console.log(array);
    for (var k = 0; k < array.length; k++) {
        summa += array[k];
    }
    return summa;
};

// solution

function repeats(arr) {
    //..
    let result = [];
    let sorted = arr.sort((a, b) => a - b);
    console.log(arr.sort((a, b) => a - b))
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] != sorted[i + 1] && sorted[i] != sorted[i - 1]) {
            result.push(sorted[i])
        }
    }
    console.log(result)
    return result.reduce((sum, current) => sum + current, 0);
};

// solution 

const repeats = (arr) => {
    const visited = {};

    arr.forEach((number) => {
        if (!visited[number]) visited[number] = 0;
        visited[number] += 1;
    });

    return Object.entries(visited)
        .filter(([, count]) => count === 1)
        .map(([number]) => Number(number))
        .reduce((acc, curr) => acc + curr, 0);
};

// solution

function repeats(arr) {
    let charMap = {}

    for (let char of arr) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    }

    let arr2 = []

    for (let char in charMap) {
        if (charMap[char] === 1) {
            arr2.push(+char)
        }
    }

    return arr2.reduce((a, b) => a + b)
};

function repeats(arr) {

    let total = 0;

    arr.forEach(number => {

        const filtered = arr.filter((num, index) => num === number);

        if (filtered.length === 1) {

            total += filtered[0];

        }

    });

    return total;


};

// solution

function repeats(arr) {
    //..
    var array = [];
    var summa = 0;

    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter <= 1) {
            array.push(arr[i]);
        }
    }
    console.log(array);
    for (var k = 0; k < array.length; k++) {
        summa += array[k];
    }
    return summa;
};

// solution

function repeats(arr) {
    let arr2 = []
    let c = 0
    for (let i = 0; i < arr.length; i++) {
        c = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) c++
        }
        if (c == 1) arr2.push(arr[i]);
    }
    return arr2.reduce((s, i) => s + i, 0)
};
//  solution
function repeats(arr) {
    // inputs - an array of numbers in which 2 numbers occur ONCE and the rest TWICE
    // output - return the sum of the numbers that occur only once
    // I need to take each value and compare it with the rest of the values in the array
    let obj = {};
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = "in"
            sum += arr[i]
        } else {
            sum -= arr[i]
        }
    }
    return sum;
};

// solution

function repeats(arr) {
    let newArr = arr.map(num => arr.indexOf(num) === arr.lastIndexOf(num) ? num : 0)
    let sum = newArr.reduce((acc, curr) => acc + curr)
    return sum
};

// solution

function repeats(arr) {
    let arr2 = []
    let c = 0
    for (let i = 0; i < arr.length; i++) {
        c = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) c++
        }
        if (c == 1) arr2.push(arr[i]);
    }
    return arr2.reduce((s, i) => s + i, 0)
};

// solution

function repeats(arr) {
    let reducer = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
    }, {})
    let singles = 0

    for (const [key, val] of Object.entries(reducer)) {
        if (val === 1) {
            singles += parseInt(key)
        }
    }
    return singles
};

// solution 

function repeats(arr) {
    let set = new Set()
    arr.forEach(x => set.has(x) ? set.delete(x) : set.add(x))
    return [...set].reduce((s, v) => s + v, 0)
}

// solution

function repeats(arr) {
    let set = new Set()
    arr.forEach(x => set.has(x) ? set.delete(x) : set.add(x))
    return [...set].reduce((s, v) => s + v, 0)
}

function repeats(arr) {
    var helper = {};
    for (var i = 0; i < arr.length; ++i) {
        if (helper[arr[i]] === undefined) {
            helper[arr[i]] = 1;
        } else {
            delete helper[arr[i]];
        }
    }
    var ks = Object.keys(helper);
    return parseInt(ks[0]) + parseInt(ks[1]);
};

// SOLUTION 

function repeats(arr) {
    //..
    var array = [];
    var summa = 0;

    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter <= 1) {
            array.push(arr[i]);
        }
    }
    console.log(array);
    for (var k = 0; k < array.length; k++) {
        summa += array[k];
    }
    return summa;
};

// solution

function repeats(arr) {
    const uniques = [];

    arr.map(v => {
        if (uniques.includes(v)) uniques.splice(uniques.indexOf(v), 1);
        else uniques.push(v);
    });

    return uniques.reduce((a, b) => a + b);
};

// solution

function repeats(arr) {

    let dup_arr = []
    let new_arr = []
    arr.map(n => dup_arr.includes(n) ? dup_arr.map(el => el == n && new_arr.push(el)) : dup_arr.push(n))
    return dup_arr.filter(num => !new_arr.includes(num)).reduce((acc, cv) => acc + cv)
}

// Solution

function repeats(arr) {
    arr = arr.sort()
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            i++
        } else
            newArr.push(arr[i])
    }
    return newArr[0] + newArr[1]
};

// solution

function repeats(arr) {
    //..
    const singles = arr.reduce((obj, currVal) => {
        obj[currVal] = (obj[currVal] || 0) + 1;
        return obj;
    }, {});

    let result = 0;
    for (let [key, val] of Object.entries(singles)) {
        if (val === 1) {
            result += +key;
        }
    }
    return result;
}

// solution

function repeats(arr) {
    let set = new Set()
    arr.forEach(x => set.has(x) ? set.delete(x) : set.add(x))
    return [...set].reduce((s, v) => s + v, 0)
}

// Solution

function repeats(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            count += arr[i];
        }

    }
    return count;
};

// Solution

function repeats(arr) {
    var helper = {};
    for (var i = 0; i < arr.length; ++i) {
        if (helper[arr[i]] === undefined) {
            helper[arr[i]] = 1;
        } else {
            delete helper[arr[i]];
        }
    }
    var ks = Object.keys(helper);
    return parseInt(ks[0]) + parseInt(ks[1]);
};

// Solution

function repeats(numbers) {
    let sum = 0

    for (const number of numbers) {
        const firstOccurence = numbers.indexOf(number)
        const lastOccurence = numbers.lastIndexOf(number)

        if (firstOccurence == lastOccurence) {
            sum += number
        }
    }

    return sum
}

// Solution

function repeats(arr) {

    let dup_arr = []
    let new_arr = []
    arr.map(n => dup_arr.includes(n) ? dup_arr.map(el => el == n && new_arr.push(el)) : dup_arr.push(n))
    return dup_arr.filter(num => !new_arr.includes(num)).reduce((acc, cv) => acc + cv)
}

// solution 

function repeats(arr) {
    let save = []
    let set = [...new Set(arr)].filter(el => arr.filter(e => e === el).length === 1)
    return set.reduce((acc, cur) => acc + cur)
};

// solution

function repeats(arr) {
    //..
    let result = [];
    let sorted = arr.sort((a, b) => a - b);
    console.log(arr.sort((a, b) => a - b))
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] != sorted[i + 1] && sorted[i] != sorted[i - 1]) {
            result.push(sorted[i])
        }
    }
    console.log(result)
    return result.reduce((sum, current) => sum + current, 0);
};

// Solution 

function repeats(arr) {
    let save = []
    let set = [...new Set(arr)].filter(el => arr.filter(e => e === el).length === 1)
    return set.reduce((acc, cur) => acc + cur)
};

// solution
function repeats(arr) {

    let dup_arr = []
    let new_arr = []
    arr.map(n => dup_arr.includes(n) ? dup_arr.map(el => el == n && new_arr.push(el)) : dup_arr.push(n))
    return dup_arr.filter(num => !new_arr.includes(num)).reduce((acc, cv) => acc + cv)
}

// solution
function repeats(arr) {
    let save = []
    let set = [...new Set(arr)].filter(el => arr.filter(e => e === el).length === 1)
    return set.reduce((acc, cur) => acc + cur)
};

// Solution

function repeats(arr) {
    const uniques = [];

    arr.map(v => {
        if (uniques.includes(v)) uniques.splice(uniques.indexOf(v), 1);
        else uniques.push(v);
    });

    return uniques.reduce((a, b) => a + b);
};

// Solution
function repeats(arr) {
    //..
    var array = [];
    var summa = 0;

    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter <= 1) {
            array.push(arr[i]);
        }
    }
    console.log(array);
    for (var k = 0; k < array.length; k++) {
        summa += array[k];
    }
    return summa;
};

// Solution 
function repeats(arr) {
    return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a, b) => a + b, 0);
};

// Solution

function repeats(arr) {
    let unique = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            unique.push(arr[i])
        }
    }
    let count = 0
    for (let j = 0; j < unique.length; j++) {
        count += unique[j]
    }
    return count
};

// Solution

function repeats(arr) {
    var z = arr.filter(function (v) {
        return arr.filter(function (v1) {
            return v1 == v;
        }).length == 1;
    }); return z.reduce((x, y) => x + y, 0);
};

// Solution

function repeats(arr) {
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) { map.set(arr[i], 1) }
        else {
            let contador = map.get(arr[i])
            contador = contador + 1;
            map.set(arr[i], contador)
        }
    }
    let onlyAppearOnce = []
    for (let key of map.keys()) {
        if (map.get(key) === 1) { onlyAppearOnce.push(key) }
    }
    return onlyAppearOnce.reduce((a, b) => a + b)
}

// solution

function repeats(arr) {
    nonDups = []
    for (let i = 0; i < arr.length; i++) {
        counts = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == arr[i]) { counts++ }
        }
        if (counts == 1) {
            nonDups.push(arr[i])
        }
    }
    return nonDups[0] + nonDups[1]
};

// Solution

function repeats(arr) {
    return arr.filter((n, i, a) => a.indexOf(n) === a.lastIndexOf(n)).reduce((s, i) => s + i, 0);
};

// Solution

function repeats(arr) {
    arr.sort();
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] != arr[i]) newArr.push(arr[i]);
        else i += 1;
    }
    return newArr.reduce((sum, num) => sum + num);
};

// Solution

function repeats(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            count += arr[i];
        }

    }
    return count;
};

// solution
function repeats(arr) {
    let n = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.filter((v) => v == arr[i]).length != 2) {
            n.push(arr[i]);
        }
    }
    return n[0] + n[1]
}

// solution

const repeats = arr => {

    const numsCount = arr.reduce((acc, currNum) => {
        acc[currNum] = acc[currNum] ? acc[currNum] + 1 : 1;
        return acc;
    }, {});

    let oddNums = 0;

    for (const key in numsCount) {
        if (numsCount[key] % 2 !== 0) {
            oddNums += +key;
        }
    }

    return oddNums;
};

// Solution

function repeats(arr) {

    let dup_arr = []
    let new_arr = []
    arr.map(n => dup_arr.includes(n) ? dup_arr.map(el => el == n && new_arr.push(el)) : dup_arr.push(n))
    return dup_arr.filter(num => !new_arr.includes(num)).reduce((acc, cv) => acc + cv)
}

// solution

function repeats(arr) {
    arr = arr.sort();
    res = 0;
    if (arr[0] != arr[1])
        res += arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1])
            res += arr[i];
    }
    return res;
}; S

// Solution

function repeats(arr) {
    arr.sort();
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] != arr[i]) newArr.push(arr[i]);
        else i += 1;
    }
    return newArr.reduce((sum, num) => sum + num);
};

// Solution 

function repeats(arr) {
    total = 0
    for (i = 0; i < arr.length; i++) {
        if (getOccurrence(arr, arr[i]) == 1) {
            total += arr[i]
        }
    }
    return total
};

function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}

// sOLUTION
function repeats(arr) {

    return arr.sort((a, b) => (a - b)).filter((x, y, z) => ((z[y] != z[y + 1]) && (z[y] != z[y - 1]))).reduce((a, b) => (a + b));

};

// Solution

function repeats(arr) {
    //..
    var array = [];
    var summa = 0;

    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter <= 1) {
            array.push(arr[i]);
        }
    }
    console.log(array);
    for (var k = 0; k < array.length; k++) {
        summa += array[k];
    }
    return summa;
};

// Solution

function repeats(arr) {
    let seen = new Set();
    let sum = 0;

    for (let v of arr) {
        if (!seen.has(v)) {
            seen.add(v);
            sum += v;
        } else {
            sum -= v;
        }
    }

    return sum;
};

// Solution

function repeats(arr) {
    let save = []
    let set = [...new Set(arr)].filter(el => arr.filter(e => e === el).length === 1)
    return set.reduce((acc, cur) => acc + cur)
};

// olution

function repeats(arr) {
    const dct = new Map();
    let sum = 0;

    arr.forEach((v) => {
        const count = dct.get(v) || 0;
        dct.set(v, count + 1);
    })

    dct.forEach((count, v) => {
        if (count === 1) {
            sum = sum + v
        }
    })

    return sum
};

// Solution

function repeats(arr) {
    //..
    let result = [];
    let sorted = arr.sort((a, b) => a - b);
    console.log(arr.sort((a, b) => a - b))
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] != sorted[i + 1] && sorted[i] != sorted[i - 1]) {
            result.push(sorted[i])
        }
    }
    console.log(result)
    return result.reduce((sum, current) => sum + current, 0);
};
// solution 
function repeats(arr) {
    //..
    var array = [];
    var summa = 0;

    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter <= 1) {
            array.push(arr[i]);
        }
    }
    console.log(array);
    for (var k = 0; k < array.length; k++) {
        summa += array[k];
    }
    return summa;
};

// Solution

function repeats(arr) {

    let dup_arr = []
    let new_arr = []
    arr.map(n => dup_arr.includes(n) ? dup_arr.map(el => el == n && new_arr.push(el)) : dup_arr.push(n))
    return dup_arr.filter(num => !new_arr.includes(num)).reduce((acc, cv) => acc + cv)
}

// Solution

function repeats(arr) {
    let n = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.filter((v) => v == arr[i]).length != 2) {
            n.push(arr[i]);
        }
    }
    return n[0] + n[1]
}

// solution
function repeats(arr) {
    let seen = new Set();
    let sum = 0;

    for (let v of arr) {
        if (!seen.has(v)) {
            seen.add(v);
            sum += v;
        } else {
            sum -= v;
        }
    }

    return sum;
};

// solution 

function repeats(arr) {
    return arr
        .filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
        .reduce((a, b) => a + b);
};

// solution
const repeats = (arr) =>
    // iterate over elements and filter
    arr.filter((x) =>
        // get the count of the current element in array
        // and filter based on the count
        arr.filter((y) =>
            // compare with current element
            y == x).length == 1).reduce((a, b) => a + b);

// solution

function repeats(arr) {
    let i;
    let sum = 0;
    arr.sort((a, b) => {
        return a - b;
    });
    for (i = 0; i < arr.length; i += 2) {
        if (arr[i] !== arr[i + 1]) {
            sum += arr[i];
            i--;
        }
    }

    return sum;
};

// Solution

function repeats(arr) {
    //..
    let sum = 0
    let hash = {}
    arr.forEach(n => {
        if (hash[n]) {
            hash[n]++
        } else {
            hash[n] = 1
        }
        sum += n
        if (hash[n] > 1) {
            sum -= n * 2
        }
    })
    return sum
};

// sOLUTION

const getCounts = arr => {
    let result = {}
    for (const item of arr) {
        result[item] = result[item] + 1 || 1;
    }
    return result;
}

const getNewSum = (sum, key, counts) => {
    if (counts[key] === 1)
        return sum + Number(key);
    return sum
}

function repeats(arr) {
    const counts = getCounts(arr);

    return Object.keys(counts)
        .reduce((sum, key) => getNewSum(sum, key, counts), 0);
};

// Solution

function repeats(arr) {
    const resArr = [];
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (resArr.includes(arr[i])) {
            resArr.splice(resArr.indexOf(arr[i]), 1)
        } else {
            resArr.push(arr[i])
        }
    }
    for (let i = 0; i < resArr.length; i++) {
        res += resArr[i]
    }
    return res;
};

// solution 
function repeats(arr) {
    const obj = arr.reduce((number, curr) => {
        number[curr] = number[curr] || 0
        number[curr]++
        return number
    }, {})
    let singles = []
    for (const key in obj) {
        if (obj[key] == 1) {
            singles.push(Number(key))
        }
    }
    return singles.reduce((acc, curr) => acc + curr, 0)
};


// solution
function repeats(arr) {
    let obj = {};
    let tab = [];

    for (let i of arr) {
        obj[i] = 0;
    }

    let test = Object.keys(obj);

    for (let j = 0; j < arr.length; j++) {

        test.map(a => {
            if (a === arr[j].toString()) {
                obj[a] += 1;
            }
        });

    }
    for (let elt in obj) {
        if (obj[elt] == 1) {
            tab.push(parseInt(elt));
        }
    }

    return tab.reduce((a, b) => a + b);

}


// ssolution
function repeats(arr) {
    let candidates = []
    for (let i = 0; i < arr.length; i++) {
        if (!candidates.includes(arr[i])) {
            candidates.push(arr[i])
        } else {
            candidates.splice(candidates.indexOf(arr[i]), 1)
        }
    }
    return candidates[0] + candidates[1]
};

// Solution

const repeats = (arr) => {
    let result = [];
    let object = {};
    arr.forEach((a, b) => { object[a] ? object[a]++ : object[a] = 1 });
    for (let i = 0; i < Object.keys(object).length; i++) {
        if (Object.values(object)[i] == 1) { result.push(Object.keys(object)[i]) }
    }
    return result.map(Number).reduce((a, b) => a + b);
};

console.log(repeats([4, 5, 7, 5, 4, 8]));                // should return 15
console.log(repeats([9, 10, 19, 13, 19, 13]));      // should return 19
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])); // should return 12

// Object.keys(object)   <-- numbers
// Object.values(object) <-- count

//   solution
function repeats(arr) {
    let numbersRepetitions = {};
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];

        if (!numbersRepetitions[number]) {
            numbersRepetitions[number] = 1;
            sum += number;
        } else {
            sum -= number;
        }
    }

    return sum;
};

// solution

function repeats(arr) {
    let retValue = 0;

    for (let i = 0; i < arr.length; i++) {
        var currItem = arr[i];
        var nextItemIdx = arr.indexOf(currItem, i + 1);
        if (nextItemIdx >= 0) {
            arr[i] = 0;
            arr[nextItemIdx] = 0;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        retValue += arr[i];
    }
    return retValue;
};

// Solution

function repeats(arr) {
    let i;
    let sum = 0;
    arr.sort((a, b) => {
        return a - b;
    });
    for (i = 0; i < arr.length; i += 2) {
        if (arr[i] !== arr[i + 1]) {
            sum += arr[i];
            i--;
        }
    }

    return sum;
};

// solution

function repeats(arr) {
    let computer = {}
    arr.forEach(x => computer[x] = (computer[x] || 0) + 1)
    let meanings = Object.values(computer)
    let clefs = Object.keys(computer)
    let storage = []

    for (let i = 0; i < meanings.length; i++) {
        meanings[i] === 1 ? storage.push(clefs[i]) : i
    }
    return storage.reduceRight((a, b) => +a + +b)
};

// SOLUTION
function repeats(arr) {
    let res = []
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (res.includes(arr[i])) {
            sum += arr[i] * 2
        } else {
            res.push(arr[i])
        }
    }
    return arr.reduce((sum, item) => sum += item) - sum
};

// solution

function repeats(arr) {
    var helper = {};
    for (var i = 0; i < arr.length; ++i) {
        if (helper[arr[i]] === undefined) {
            helper[arr[i]] = 1;
        } else {
            delete helper[arr[i]];
        }
    }
    var ks = Object.keys(helper);
    return parseInt(ks[0]) + parseInt(ks[1]);
};

// solution

function repeats([h, ...t], s = new Set()) {
    return (s.has(h) ? -h : h) + (t.length && repeats(t, s.add(h)))
}

// Solution
function repeats(arr) {
    let n = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.filter((v) => v == arr[i]).length != 2) {
            n.push(arr[i]);
        }
    }
    return n[0] + n[1]
}

// solution 

function repeats(arr) {

    return arr.filter((num, pos) => { return arr.lastIndexOf(num) == arr.indexOf(num) }).reduce((a, b) => a + b, 0);

};


// Solution

function repeats(arr) {
    const dct = new Map();
    let sum = 0;

    arr.forEach((v) => {
        const count = dct.get(v) || 0;
        dct.set(v, count + 1);
    })

    dct.forEach((count, v) => {
        if (count === 1) {
            sum = sum + v
        }
    })

    return sum
};

// solution

function repeats(arr) {
    const cache = {};
    let res = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (!cache[arr[i]]) {
            cache[arr[i]] = 1;
        } else {
            ++cache[arr[i]];
        }
    }

    for (let key in cache) {
        if (cache[key] === 1) {
            res += parseInt(key);
        }
    }
    return res;
};

// Solution

function repeats(arr) {
    let res = []
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (res.includes(arr[i])) {
            sum += arr[i] * 2
        } else {
            res.push(arr[i])
        }
    }
    return arr.reduce((sum, item) => sum += item) - sum
};

// Solution

function repeats(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    let sum = 0;

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr[i + 1]) {
            i++;
        } else {
            sum += sortedArr[i]
        }
    }
    return sum
};

// Solution 

function repeats(arr) {
    const counter = {};
    for (let i = 0; i < arr.length; i++) {
        counter[arr[i]] = (counter[arr[i]] || 0) + 1;
    }
    let acc = 0;
    for (const [key, value] of Object.entries(counter)) {
        if (value === 1) acc += +key;
    }
    return acc;
};

// Solution

function repeats(arr) {
    let set = new Set()
    arr.forEach(x => set.has(x) ? set.delete(x) : set.add(x))
    return [...set].reduce((s, v) => s + v, 0)
}

// function repeats(arr){
var count = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
        count += arr[i];
    }

}
return count;

// Solution

function repeats(arr) {
    const foundOnce = (n) => arr.filter(x => x == n).length == 1;
    return arr.filter(n => foundOnce(n)).reduce((a, b) => a + b);
};

// Solution
function repeats(arr) {
    let seen = new Set()
    let sum = 0
    for (let x of arr) {
        if (!seen.has(x)) {
            seen.add(x);
            sum += x;
        }
        else {
            sum -= x
        }
    } return sum
};

// Solution

function repeats(arr) {
    let n = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.filter((v) => v == arr[i]).length != 2) {
            n.push(arr[i]);
        }
    }
    return n[0] + n[1]
}

// Solution

function repeats(arr) {
    const uniqArr = [...new Set(arr)];
    const uniqArrSum = uniqArr.reduce(function (acc, item) {
        acc += item;
        return acc;
    }, 0);
    const allArrSum = arr.reduce(function (acc, item) {
        acc += item;
        return acc;
    }, 0);
    const difference = allArrSum - uniqArrSum;
    return uniqArrSum - difference;
};

// Solution

function repeats(arr) {
    let doubles = [];
    for (let i = 0; i <= arr.length; i++) {
        for (let y = i + 1; y <= arr.length; y++) {
            if (arr[i] === arr[y]) {
                doubles.push(arr[i])
            }
        }
    }
    let singles = [];
    for (let x = 0; x < arr.length; x++) {
        if (!doubles.includes(arr[x])) {
            singles.push(arr[x])
        }
    }
    return singles.reduce((a, b) => a + b);
};

// solution

function repeats(arr) {
    let numbersRepetitions = {};
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];

        if (!numbersRepetitions[number]) {
            numbersRepetitions[number] = 1;
            sum += number;
        } else {
            sum -= number;
        }
    }

    return sum;
};

// Solution

const repeats = arr => {

    const numsCount = arr.reduce((acc, currNum) => {
        acc[currNum] = acc[currNum] ? acc[currNum] + 1 : 1;
        return acc;
    }, {});

    let oddNums = 0;

    for (const key in numsCount) {
        if (numsCount[key] % 2 !== 0) {
            oddNums += +key;
        }
    }

    return oddNums;
};

// Solution

function repeats(arr) {
    var helper = {};
    for (var i = 0; i < arr.length; ++i) {
        if (helper[arr[i]] === undefined) {
            helper[arr[i]] = 1;
        } else {
            delete helper[arr[i]];
        }
    }
    var ks = Object.keys(helper);
    return parseInt(ks[0]) + parseInt(ks[1]);
};

// SOlution

const repeats = (arr) =>
    // iterate over elements and filter
    arr.filter((x) =>
        // get the count of the current element in array
        // and filter based on the count
        arr.filter((y) =>
            // compare with current element
            y == x).length == 1).reduce((a, b) => a + b);

// solution
function repeats(a) {
    return a.filter(x => a.indexOf(x) == a.lastIndexOf(x)).reduce((a, b) => a + b, 0)
};

// solution

function repeats(arr) {
    const uniques = [];

    arr.map(v => {
        if (uniques.includes(v)) uniques.splice(uniques.indexOf(v), 1);
        else uniques.push(v);
    });

    return uniques.reduce((a, b) => a + b);
};

// Solution

function repeats(arr) {
    let save = []
    let set = [...new Set(arr)].filter(el => arr.filter(e => e === el).length === 1)
    return set.reduce((acc, cur) => acc + cur)
};

// Solution

function repeats(arr) {
    //..
    let result = [];
    let sorted = arr.sort((a, b) => a - b);
    console.log(arr.sort((a, b) => a - b))
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] != sorted[i + 1] && sorted[i] != sorted[i - 1]) {
            result.push(sorted[i])
        }
    }
    console.log(result)
    return result.reduce((sum, current) => sum + current, 0);
};

// solution

const { sum, countBy } = require('lodash')

function repeats(arr) {
    const count = countBy(arr)
    return sum(arr.filter(x => count[x] == 1))
};

// solution

// i like reduce 
const repeats = (arr) => [0, ...arr].
    reduce((acc, el, _, arr) => arr.
        filter(e => e === el).
        length < 2 ? acc + el : acc)

// solution

function repeats(arr) {
    var helper = {};
    for (var i = 0; i < arr.length; ++i) {
        if (helper[arr[i]] === undefined) {
            helper[arr[i]] = 1;
        } else {
            delete helper[arr[i]];
        }
    }
    var ks = Object.keys(helper);
    return parseInt(ks[0]) + parseInt(ks[1]);
};

//Solution

function repeats(arr) {
    let i;
    let sum = 0;
    arr.sort((a, b) => {
        return a - b;
    });
    for (i = 0; i < arr.length; i += 2) {
        if (arr[i] !== arr[i + 1]) {
            sum += arr[i];
            i--;
        }
    }

    return sum;
};

// solution

function repeats(arr) {
    arr.sort();
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] != arr[i]) newArr.push(arr[i]);
        else i += 1;
    }
    return newArr.reduce((sum, num) => sum + num);
};

// solution

function repeats(arr) {
    var total = 0;

    for (let n of arr) {
        if (arr.indexOf(n) === arr.lastIndexOf(n)) {
            total = total + n;
        }
    }

    return total;
};

// solution
function repeats(arr) {
    let sum = 0;
    let dups = [];
    for (i = 0; i < arr.length; i++) {
        let new_arr = arr.slice(i + 1, arr.length);
        if (new_arr.includes(arr[i]) || dups.includes(arr[i])) {
            dups.push(arr[i]);
            continue
        } else {
            sum += arr[i]
        }
    }
    return sum;
};

// solution

function repeats(arr) {
    //..
    let sum = 0
    let hash = {}
    arr.forEach(n => {
        if (hash[n]) {
            hash[n]++
        } else {
            hash[n] = 1
        }
        sum += n
        if (hash[n] > 1) {
            sum -= n * 2
        }
    })
    return sum
};

// Solution

function repeats(arr) {
    const singles = arr.filter(d => {
        const isSingle = arr.filter(n => n === d).length === 1;

        return isSingle;
    });

    return singles.reduce((a, v) => a + v, 0);
};

// solution

function repeats(arr) {
    const uniqArr = [...new Set(arr)];
    const uniqArrSum = uniqArr.reduce(function (acc, item) {
        acc += item;
        return acc;
    }, 0);
    const allArrSum = arr.reduce(function (acc, item) {
        acc += item;
        return acc;
    }, 0);
    const difference = allArrSum - uniqArrSum;
    return uniqArrSum - difference;
};

// Solution

function repeats(arr) {
    const counter = {};
    for (let i = 0; i < arr.length; i++) {
        counter[arr[i]] = (counter[arr[i]] || 0) + 1;
    }
    let acc = 0;
    for (const [key, value] of Object.entries(counter)) {
        if (value === 1) acc += +key;
    }
    return acc;
};

// const repeats = arr => {

const numsCount = arr.reduce((acc, currNum) => {
    acc[currNum] = acc[currNum] ? acc[currNum] + 1 : 1;
    return acc;
}, {});

let oddNums = 0;

for (const key in numsCount) {
    if (numsCount[key] % 2 !== 0) {
        oddNums += +key;
    }
}

return oddNums;


//solution

function repeats(arr) {
    let n = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.filter((v) => v == arr[i]).length != 2) {
            n.push(arr[i]);
        }
    }
    return n[0] + n[1]
}

// function repeats(arr){


//Solution
var array = [];
var summa = 0;

for (var i = 0; i < arr.length; i++) {
    var counter = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            counter++;
        }
    }
    if (counter <= 1) {
        array.push(arr[i]);
    }
}
console.log(array);
for (var k = 0; k < array.length; k++) {
    summa += array[k];
}
return summa;


// solution

function repeats(arr) {

    return arr.sort((a, b) => (a - b)).filter((x, y, z) => ((z[y] != z[y + 1]) && (z[y] != z[y - 1]))).reduce((a, b) => (a + b));

};



// solution
function repeats(arr) {
    arr = arr.sort();
    res = 0;
    if (arr[0] != arr[1])
        res += arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1])
            res += arr[i];
    }
    return res;
};

// Solution
function repeats(numbers) {
    let sum = 0

    for (const number of numbers) {
        const firstOccurence = numbers.indexOf(number)
        const lastOccurence = numbers.lastIndexOf(number)

        if (firstOccurence == lastOccurence) {
            sum += number
        }
    }

    return sum
}

// Solution

function repeats(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            count += arr[i];
        }

    }
    return count;
};

// Solution

function repeats(arr) {
    const obj = arr.reduce((number, curr) => {
        number[curr] = number[curr] || 0
        number[curr]++
        return number
    }, {})
    let singles = []
    for (const key in obj) {
        if (obj[key] == 1) {
            singles.push(Number(key))
        }
    }
    return singles.reduce((acc, curr) => acc + curr, 0)

    //solution for damn kata

    function repeats(arr) {
        //..
        let singles = []
        for (let i = 0; i < arr.length; i++) {
            let check = arr[i]
            let checkArr = []
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] == arr[i]) {
                    checkArr.push(arr[j])
                }
            }
            if (checkArr.length == 1) singles.push(checkArr[0])
        }
        return singles.reduce((acc, c) => acc + c)
    };


    // solution

    function repeats(arr) {
        let doubles = [];
        for (let i = 0; i <= arr.length; i++) {
            for (let y = i + 1; y <= arr.length; y++) {
                if (arr[i] === arr[y]) {
                    doubles.push(arr[i])
                }
            }
        }
        let singles = [];
        for (let x = 0; x < arr.length; x++) {
            if (!doubles.includes(arr[x])) {
                singles.push(arr[x])
            }
        }
        return singles.reduce((a, b) => a + b);


        // solution

        function repeats(arr) {
            const occurs = arr.reduce((obj, el) => {
                obj[el] = obj[el] + 1 || 1;
                return obj;
            }, {});

            let sum = null;
            for (let [key, value] of Object.entries(occurs)) {
                if (value === 1) {
                    if (sum != null) return sum + +key;
                    sum = +key;
                }
            }
        }

        // solution

        function repeats(arr) {
            let count,
                res = []
            //const filteredArr = [...new Set(arr)]
            let counts = arr.reduce((counts, i) => {
                counts[i] = (counts[i] || 0) + 1

                return counts
            }, {})

            Object.keys(counts).reduce((arr, i) => {
                if (counts[i] === 1) {
                    res.push(Number(i))
                }
                return res
            }, [])

            return res.reduce((a, b) => a + b)
        }
        //Solution
        function repeats(arr) {
            arr.sort();
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i + 1] != arr[i]) newArr.push(arr[i]);
                else i += 1;
            }
            return newArr.reduce((sum, num) => sum + num);
        };
        //solution 

        function repeats(numbers) {
            let sum = 0

            for (const number of numbers) {
                const firstOccurence = numbers.indexOf(number)
                const lastOccurence = numbers.lastIndexOf(number)

                if (firstOccurence == lastOccurence) {
                    sum += number
                }
            }

            return sum
        }

        // solution

        function repeats(arr) {
            var total = 0;

            for (let n of arr) {
                if (arr.indexOf(n) === arr.lastIndexOf(n)) {
                    total = total + n;
                }
            }

            return total;
        };
        // solution
        function repeats(arr) {
            var helper = {};
            for (var i = 0; i < arr.length; ++i) {
                if (helper[arr[i]] === undefined) {
                    helper[arr[i]] = 1;
                } else {
                    delete helper[arr[i]];
                }
            }
            var ks = Object.keys(helper);
            return parseInt(ks[0]) + parseInt(ks[1]);
        };

        // solution 
        function repeats(numbers) {
            let sum = 0

            for (const number of numbers) {
                const firstOccurence = numbers.indexOf(number)
                const lastOccurence = numbers.lastIndexOf(number)

                if (firstOccurence == lastOccurence) {
                    sum += number
                }
            }

            return sum
        }


        // Solution

        function repeats(arr) {
            const uniques = [];

            arr.map(v => {
                if (uniques.includes(v)) uniques.splice(uniques.indexOf(v), 1);
                else uniques.push(v);
            });

            return uniques.reduce((a, b) => a + b);
        };

        // solution 
        function repeats(arr) {
            let i;
            let sum = 0;
            arr.sort((a, b) => {
                return a - b;
            });
            for (i = 0; i < arr.length; i += 2) {
                if (arr[i] !== arr[i + 1]) {
                    sum += arr[i];
                    i--;
                }
            }

            return sum;
        };

        // solution
        function repeats(arr) {
            let set = new Set()
            arr.forEach(x => set.has(x) ? set.delete(x) : set.add(x))
            return [...set].reduce((s, v) => s + v, 0)
        }

        // Solution 
        function repeats(arr) {
            var helper = {};
            for (var i = 0; i < arr.length; ++i) {
                if (helper[arr[i]] === undefined) {
                    helper[arr[i]] = 1;
                } else {
                    delete helper[arr[i]];
                }
            }
            var ks = Object.keys(helper);
            return parseInt(ks[0]) + parseInt(ks[1]);
        };

        //Solution
        function repeats(numbers) {
            let sum = 0

            for (const number of numbers) {
                const firstOccurence = numbers.indexOf(number)
                const lastOccurence = numbers.lastIndexOf(number)

                if (firstOccurence == lastOccurence) {
                    sum += number
                }
            }

            return sum
        }

        // solution 
        function repeats(arr) {
            var count = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
                    count += arr[i];
                }

            }
            return count;
        };

        // solution

        // i like reduce 
        const repeats = (arr) => [0, ...arr].
            reduce((acc, el, _, arr) => arr.
                filter(e => e === el).
                length < 2 ? acc + el : acc)

        // solution

        function repeats(arr) {
            let singlesChicks = [];
            for (let i = 0; i < arr.length; i++) {
                let checkChicks = false;
                for (let k = 0; k < arr.length; k++) {
                    if (i === k) {
                    } else {
                        if (arr[i] === arr[k]) {
                            checkChicks = true;
                        }
                    }
                }
                if (!checkChicks) singlesChicks.push(arr[i]);
            }
            return singlesChicks.reduce((acc, val) => acc + val, 0);
        }//I solved this Kata on  [07-Feb-2022] ^_^ [03:52 PM]...#Hussam'sCodingDiary


        // solution

        function repeats(arr) {
            let arr1 = [];
            console.log(arr);
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr1[arr[i]] == undefined) {
                    arr1[arr[i]] = arr[i];
                    sum = sum + arr[i];
                } else {
                    arr1[arr[i]] = arr1[arr[i]] - arr[i];
                    sum = sum - arr[i];
                }
            }
            return sum;
        };

        // kata

        function repeats(arr) {
            let obj = {};
            let array = [];
            for (let el of arr) {
                if (obj[el]) {
                    obj[el] += 1
                } else {
                    obj[el] = 1
                }
            }
            for (let key in obj) {
                if (obj[key] === 1) {
                    array.push(key)
                }
            }
            return array.reduce((a, b) => +a + +b, 0)
        };

        // solution 
        function repeats(arr) {
            var sum = 0,
                number = 0,
                nextNumber = 0;
            arr = arr.sort();
            console.log(arr);

            for (var i = 0; i < arr.length; i++) {
                number = arr[i];
                nextNumber = arr[i + 1];

                if (number == nextNumber) {
                    i++
                }
                else {
                    sum += number;
                }
            }
            return sum;
        };

        // solution

        function repeats(arr) {
            let singlesChicks = [];
            for (let i = 0; i < arr.length; i++) {
                let checkChicks = false;
                for (let k = 0; k < arr.length; k++) {
                    if (i === k) {
                    } else {
                        if (arr[i] === arr[k]) {
                            checkChicks = true;
                        }
                    }
                }
                if (!checkChicks) singlesChicks.push(arr[i]);
            }
            return singlesChicks.reduce((acc, val) => acc + val, 0);
        }//I solved this Kata on  [07-Feb-2022] ^_^ [03:52 PM]...#Hussam'sCodingDiary




        // solution
        function repeats(arr) {
            let count = 0;
            let sortedArr = arr.sort((a, b) => a - b);

            for (let i = 0; i < sortedArr.length; i++) {
                if (sortedArr[i] != sortedArr[i + 1] && sortedArr[i] != sortedArr[i - 1]) {
                    count += sortedArr[i];
                }
            }
            return count;
        };


        // Solution

        function repeats(arr) {
            arr.sort()
            let result = [...arr];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === arr[i + 1]) {
                    result = result.filter(x => x !== arr[i])
                }
            }
            return result.reduce((x, y) => x + y)
        };


        // solution

        const repeats = (arr) =>
            // iterate over elements and filter
            arr.filter((x) =>
                // get the count of the current element in array
                // and filter based on the count
                arr.filter((y) =>
                    // compare with current element
                    y == x).length == 1).reduce((a, b) => a + b);

        // solution
        const repeats = arr => {
            let result = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
                    continue;
                };
                result += arr[i];
            };
            return result;
        };

        // solution

        function repeats(arr) {
            let set = new Set()
            arr.forEach(x => set.has(x) ? set.delete(x) : set.add(x))
            return [...set].reduce((s, v) => s + v, 0)
        }

        // solution

        function repeats(arr) {
            const sortedArr = arr.sort((a, b) => a - b);
            let sum = 0;
            sortedArr;
            for (let i = 0; i < sortedArr.length; i++) {
                if (sortedArr[i] !== sortedArr[i + 1]) sum += sortedArr[i];
                else i++;
            }
            return sum;
        }

        // solution

        function repeats(arr) {
            var count = {};
            arr.forEach(function (i) {
                count[i] = (count[i] || 0) + 1;
            });
            return arr.filter(a => count[a] < 2).reduce((a, b) => a + b)
        };


        // solution
        function repeats(arr) {
            const tmp = {}

            for (let i = 0; i < arr.length; i++) {
                const currentValue = arr[i]

                tmp[currentValue] = tmp[currentValue] ? tmp[currentValue] += 1 : 1
            }

            return Object.keys(tmp).reduce((result, key) => {
                if (tmp[key] === 1) {
                    result += parseInt(key)
                }

                return result
            }, 0)


            //  return [...new Set(arr)].reduce((a, b) => a +  b)
        };


        // solution 
        function repeats(items) {
            let result = [];
            let container = {};

            for (let i = 0; i < items.length; ++i) {
                if (items[i] in container) {
                    container[items[i]]++;
                } else {
                    container[items[i]] = 1;
                }
            }

            for (let k in container) {
                if (container[k] == 1) {
                    result.push(k);
                }
            }
            return result.reduce((a, b) => (+a) + (+b))
        };


        // solution


        function repeats(arr) {
            var helper = {};
            for (var i = 0; i < arr.length; ++i) {
                if (helper[arr[i]] === undefined) {
                    helper[arr[i]] = 1;
                } else {
                    delete helper[arr[i]];
                }
            }
            var ks = Object.keys(helper);
            return parseInt(ks[0]) + parseInt(ks[1]);
        };


        // solution

        function repeats(arr) {
            arr = arr.sort();
            res = 0;
            if (arr[0] != arr[1])
                res += arr[0];
            for (i = 1; i < arr.length; i++) {
                if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1])
                    res += arr[i];
            }
            return res;
        };

        // solution

        function repeats(a) {
            return a.filter(x => a.indexOf(x) == a.lastIndexOf(x)).reduce((a, b) => a + b, 0)
        };

        // solution

        function repeats(arr) {
            let n = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr.filter((v) => v == arr[i]).length != 2) {
                    n.push(arr[i]);
                }
            }
            return n[0] + n[1]
        }

        // solution

        function repeats(arr) {
            let result = [];
            let occurances = {};

            for (let num of arr) {
                occurances[num] = occurances[num] ? occurances[num] + 1 : 1;
            }

            for (let p in occurances) { if (occurances[p] === 1) { result.push(p) } }

            return result.map(Number).reduce((a, b) => (a + b));
        };

        // solution
        function repeats(arr) {
            let hash = {};

            for (let i = 0; i < arr.length; i++) {
                if (hash.hasOwnProperty(arr[i])) {
                    hash[arr[i]]++;
                }
                else {
                    hash[arr[i]] = 1;
                }
            }

            const filtered = (Object.entries(hash).filter(a => a[1] === 1));
            return filtered.reduce((a, b) => Number(a[0]) + Number(b[0]));

        };

        // solution
        function repeats(arr) {
            let obj = {};
            let sum = 0;
            arr.forEach(num => obj[num] ? obj[num]++ : obj[num] = 1)
            for (let i in obj) {
                if (obj[i] === 1) {
                    sum += +i;
                }
            }
            return sum;
        };

        // solution

        function repeats(numbers) {
            let sum = 0

            for (const number of numbers) {
                const firstOccurence = numbers.indexOf(number)
                const lastOccurence = numbers.lastIndexOf(number)

                if (firstOccurence == lastOccurence) {
                    sum += number
                }
            }

            return sum
        }

        // solution
        function repeats(arr) {
            //..

            let result = 0;

            arr.forEach((num) => {
                if (arr.indexOf(num) === arr.lastIndexOf(num)) {
                    result += num;
                }
            });

            return result;

            // solution

            function repeats(arr) {
                let hash = {};

                for (let i = 0; i < arr.length; i++) {
                    if (hash.hasOwnProperty(arr[i])) {
                        hash[arr[i]]++;
                    }
                    else {
                        hash[arr[i]] = 1;
                    }
                }

                const filtered = (Object.entries(hash).filter(a => a[1] === 1));
                return filtered.reduce((a, b) => Number(a[0]) + Number(b[0]));

            };

            // solution
            function repeats(arr) {
                //..
                let result = [];
                let sorted = arr.sort((a, b) => a - b);
                console.log(arr.sort((a, b) => a - b))
                for (let i = 0; i < sorted.length; i++) {
                    if (sorted[i] != sorted[i + 1] && sorted[i] != sorted[i - 1]) {
                        result.push(sorted[i])
                    }
                }
                console.log(result)
                return result.reduce((sum, current) => sum + current, 0);
            };

            // solution
            function repeats(arr) {

                let dup_arr = []
                let new_arr = []
                arr.map(n => dup_arr.includes(n) ? dup_arr.map(el => el == n && new_arr.push(el)) : dup_arr.push(n))
                return dup_arr.filter(num => !new_arr.includes(num)).reduce((acc, cv) => acc + cv)
            }


            // solution
            function repeats(numbers) {
                let sum = 0

                for (const number of numbers) {
                    const firstOccurence = numbers.indexOf(number)
                    const lastOccurence = numbers.lastIndexOf(number)

                    if (firstOccurence == lastOccurence) {
                        sum += number
                    }
                }

                return sum
            }

            // solution
            function repeats(arr) {
                var helper = {};
                for (var i = 0; i < arr.length; ++i) {
                    if (helper[arr[i]] === undefined) {
                        helper[arr[i]] = 1;
                    } else {
                        delete helper[arr[i]];
                    }
                }
                var ks = Object.keys(helper);
                return parseInt(ks[0]) + parseInt(ks[1]);
            };

            //solution
            function repeats(arr) {
                var helper = {};
                for (var i = 0; i < arr.length; ++i) {
                    if (helper[arr[i]] === undefined) {
                        helper[arr[i]] = 1;
                    } else {
                        delete helper[arr[i]];
                    }
                }
                var ks = Object.keys(helper);
                return parseInt(ks[0]) + parseInt(ks[1]);
            };

            // solution

            function repeats(arr) {
                var helper = {};
                for (var i = 0; i < arr.length; ++i) {
                    if (helper[arr[i]] === undefined) {
                        helper[arr[i]] = 1;
                    } else {
                        delete helper[arr[i]];
                    }
                }
                var ks = Object.keys(helper);
                return parseInt(ks[0]) + parseInt(ks[1]);
            };

            // solution
            function repeats(arr) {

                let dup_arr = []
                let new_arr = []
                arr.map(n => dup_arr.includes(n) ? dup_arr.map(el => el == n && new_arr.push(el)) : dup_arr.push(n))
                return dup_arr.filter(num => !new_arr.includes(num)).reduce((acc, cv) => acc + cv)
            }

            // solution

            function repeats(arr) {
                //..
                var array = [];
                var summa = 0;

                for (var i = 0; i < arr.length; i++) {
                    var counter = 0;
                    for (var j = 0; j < arr.length; j++) {
                        if (arr[i] == arr[j]) {
                            counter++;
                        }
                    }
                    if (counter <= 1) {
                        array.push(arr[i]);
                    }
                }
                console.log(array);
                for (var k = 0; k < array.length; k++) {
                    summa += array[k];
                }
                return summa;
            };
            // solution

            function repeats(arr) {
                var count = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
                        count += arr[i];
                    }

                }
                return count;
            };

            // solution
            function repeats(arr) {
                //..
                let result = [];
                let sorted = arr.sort((a, b) => a - b);
                console.log(arr.sort((a, b) => a - b))
                for (let i = 0; i < sorted.length; i++) {
                    if (sorted[i] != sorted[i + 1] && sorted[i] != sorted[i - 1]) {
                        result.push(sorted[i])
                    }
                }
                console.log(result)
                return result.reduce((sum, current) => sum + current, 0);
            };

            // solution

            function repeats(arr) {
                let i;
                let sum = 0;
                arr.sort((a, b) => {
                    return a - b;
                });
                for (i = 0; i < arr.length; i += 2) {
                    if (arr[i] !== arr[i + 1]) {
                        sum += arr[i];
                        i--;
                    }
                }

                return sum;
            };
            // solution
            function repeats(arr) {
                let i;
                let sum = 0;
                arr.sort((a, b) => {
                    return a - b;
                });
                for (i = 0; i < arr.length; i += 2) {
                    if (arr[i] !== arr[i + 1]) {
                        sum += arr[i];
                        i--;
                    }
                }


                // solution
                function repeats(arr) {
                    let numbersRepetitions = {};
                    let sum = 0;

                    for (let i = 0; i < arr.length; i++) {
                        let number = arr[i];

                        if (!numbersRepetitions[number]) {
                            numbersRepetitions[number] = 1;
                            sum += number;
                        } else {
                            sum -= number;
                        }
                    }

                    return sum;
                };

                return sum;
            };

            // solution

            function repeats(arr) {
                let n = [];
                for (let i = 0; i < arr.length; i++) {
                    if (arr.filter((v) => v == arr[i]).length != 2) {
                        n.push(arr[i]);
                    }
                }
                return n[0] + n[1]
            }

            //solution
            // i like reduce 
            const repeats = (arr) => [0, ...arr].
                reduce((acc, el, _, arr) => arr.
                    filter(e => e === el).
                    length < 2 ? acc + el : acc)

            // Solution
            function repeats(arr) {

                let dup_arr = []
                let new_arr = []
                arr.map(n => dup_arr.includes(n) ? dup_arr.map(el => el == n && new_arr.push(el)) : dup_arr.push(n))
                return dup_arr.filter(num => !new_arr.includes(num)).reduce((acc, cv) => acc + cv)
            }

            // Solution

            function repeats(arr) {
                let seen = new Set();
                let sum = 0;

                for (let v of arr) {
                    if (!seen.has(v)) {
                        seen.add(v);
                        sum += v;
                    } else {
                        sum -= v;
                    }
                }

                return sum;
            };

            // solution 
            function repeats(arr) {
                //..
                var array = [];
                var summa = 0;

                for (var i = 0; i < arr.length; i++) {
                    var counter = 0;
                    for (var j = 0; j < arr.length; j++) {
                        if (arr[i] == arr[j]) {
                            counter++;
                        }
                    }
                    if (counter <= 1) {
                        array.push(arr[i]);
                    }
                }
                console.log(array);
                for (var k = 0; k < array.length; k++) {
                    summa += array[k];
                }
                return summa;
            };

            // solution
            const repeats = (arr)

                => arr.reduce((reducer, item, ind, array) => reducer += array.filter(i => i === item).length === 1 ? item : 0, 0);

            // function repeats(arr){
            var set = [...new Set(arr)]
            var total1 = arr.reduce((a, b) => (a + b))
            var total2 = set.reduce((a, b) => (a + b))
            return total2 * 2 - total1
        };

        // Solution

        function repeats(arr) {
            arr.sort();
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i + 1] != arr[i]) newArr.push(arr[i]);
                else i += 1;
            }
            return newArr.reduce((sum, num) => sum + num);
        };

        // solution
        function repeats(arr) {
            var set = [...new Set(arr)]
            var total1 = arr.reduce((a, b) => (a + b))
            var total2 = set.reduce((a, b) => (a + b))
            return total2 * 2 - total1
        };

