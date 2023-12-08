class Drib {
    constructor(numerator, denominator) {
        if (denominator === 0) {
            throw new Error("Знаменник не може бути нулем!");
        }
        this.numerator = numerator;
        this.denominator = denominator;
    }
    add(otherDrib) {
        const newNumerator = this.numerator * otherDrib.denominator + otherDrib.numerator * this.denominator;
        const newDenominator = this.denominator * otherDrib.denominator;
        return new Drib(newNumerator, newDenominator);
    }

    subtract(otherDrib) {
        const newNumerator = this.numerator * otherDrib.denominator - otherDrib.numerator * this.denominator;
        const newDenominator = this.denominator * otherDrib.denominator;
        return new Drib(newNumerator, newDenominator);
    }

    multiply(otherDrib) {
        const newNumerator = this.numerator * otherDrib.numerator;
        const newDenominator = this.denominator * otherDrib.denominator;
        return new Drib(newNumerator, newDenominator);
    }

    divide(otherDrib) {
        const newNumerator = this.numerator * otherDrib.denominator;
        const newDenominator = this.denominator * otherDrib.numerator;
        return new Drib(newNumerator, newDenominator);
    }

    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
}

function calculate() { 
        const numerator1 = parseInt(document.getElementById('numerator1').value);
        const denominator1 = parseInt(document.getElementById('denominator1').value);
        const numerator2 = parseInt(document.getElementById('numerator2').value);
        const denominator2 = parseInt(document.getElementById('denominator2').value);
    
        if (denominator1 === 0 || denominator2 === 0) {
            alert("Знаменник не може бути нулем!");
            return;
        }
    
        const drib1 = new Drib(numerator1, denominator1);
        const drib2 = new Drib(numerator2, denominator2);

    const operation = document.getElementById('operation').value;

    let result;
    switch (operation) {
        case 'add':
            result = drib1.add(drib2);
            break;
        case 'subtract':
            result = drib1.subtract(drib2);
            break;
        case 'multiply':
            result = drib1.multiply(drib2);
            break;
        case 'divide':
            result = drib1.divide(drib2);
            break;
        default:
            result = "Неправильна операція!";
    }

    document.getElementById('result').textContent = `${drib1.toString()} ${getOperationSymbol(operation)} ${drib2.toString()} = ${result.toString()}`;
}

function getOperationSymbol(operation) {
    switch (operation) {
        case 'add':
            return '+';
        case 'subtract':
            return '-';
        case 'multiply':
            return '*';
        case 'divide':
            return '/';
        default:
            return '';
    }
}
