// Створюємо об'єкт calculator
const calculator = {
    result: 0,

    add(number) {
        this.result += number;
    },

    subtract(number) {
        this.result -= number;
    },

    multiply(number) {
        this.result *= number;
    },

    divide(number) {
        if (number === 0) {
            console.log('Division by zero is not allowed!');
            return;
        }
        this.result /= number;
    },
    showResult() {
        console.log(this.result);
    },
};

// Створюємо масив операцій
const operations = [
    { operator: '+', operand: 5 },
    { operator: '-', operand: 3 },
    { operator: '*', operand: 10 },
    { operator: '/', operand: 2 },
];

// Проходимось по кожному елементу масиву operations та виконуємо відповідну операцію на об'єкті calculator
operations.forEach(operation => {
    console.log(operation);
    switch (operation.operator) {
        case '+':
            calculator.add(operation.operand);
            break;
        case '-':
            calculator.subtract(operation.operand);
            break;
        case '*':
            calculator.multiply(operation.operand);
            break;
        case '/':
            calculator.subtract(operation.operand);
            break;
        default:
            console.log('Error: Unknown operation');
    }
});
calculator.showResult();
