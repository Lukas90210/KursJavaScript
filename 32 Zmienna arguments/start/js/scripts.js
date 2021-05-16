function sum1(num1, num2) {

    if (arguments.length === 2 && typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        console.log("podaj właściwe dane");
    }
}

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum1(2, 3));
console.log(sum(2, 3, 4, 5));