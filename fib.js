function fib(n) {
    let fibArr = [0, 1];
    for (let i = 2; i < n; i++) {
        let nextNum = fibArr[i - 1] + fibArr[i - 2];
        fibArr.push(nextNum);
    }
    return fibArr;
}

function fibsRec(n) {
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1
    else
        return fibsRec(n - 1) + fibsRec(n - 2)
}

console.log(fib(8))

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(4));
console.log(fibsRec(5));
console.log(fibsRec(6));
console.log(fibsRec(7));
console.log(fibsRec(8));
console.log(fibsRec(9));
console.log(fibsRec(10));
console.log(fibsRec(11));
console.log(fibsRec(12));
console.log(fibsRec(13));
console.log(fibsRec(14));
console.log(fibsRec(15));
console.log(fibsRec(16));
console.log(fibsRec(17));
console.log(fibsRec(18));
console.log(fibsRec(19));
console.log(fibsRec(20));
