function multiply1(number1, number2) {
    const resultNumber1 = number1 * number1;
    console.log(resultNumber1);
    const resultNumber2 = number2 * number2;
    console.log(resultNumber2);
    const resultBothNumbers = resultNumber1 + resultNumber2;
    console.log(resultBothNumbers);
    const finalResult = resultBothNumbers * resultBothNumbers;
    console.log(finalResult);
    return finalResult;
}

multiply1(1, 2);

const multiply2 = function (number1, number2) {
    const resultNumber1 = number1 * number1;
    console.log(resultNumber1);
    const resultNumber2 = number2 * number2;
    console.log(resultNumber2);
    const resultBothNumbers = resultNumber1 + resultNumber2;
    console.log(resultBothNumbers);
    const finalResult = resultBothNumbers * resultBothNumbers;
    console.log(finalResult);
    return finalResult;

};

multiply2(3, 4);

const multiply3 = (number1, number2) => {
    const resultNumber1 = number1 * number1;
    console.log(resultNumber1);
    const resultNumber2 = number2 * number2;
    console.log(resultNumber2);
    const resultBothNumbers = resultNumber1 + resultNumber2;
    console.log(resultBothNumbers);
    const finalResult = resultBothNumbers * resultBothNumbers;
    console.log(finalResult);
    return finalResult;
};

multiply3(80, 100);