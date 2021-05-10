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