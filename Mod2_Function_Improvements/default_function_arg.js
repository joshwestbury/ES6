//Default arguments in JS

function calculateBill (total, tax, tip) {
    return total + (total * tax) + (total * tip);

}

const totalBill = calculateBill(100, 0.13, 0.15);
console.log(totalBill);
//>>> 128


//___________________________________

//we can now set a default argument for contexts where nothing is passed in.

function calculateBill (total, tax = 0.13, tip = 0.15) {
    return total + (total * tax) + (total * tip);

}

const totalBill = calculateBill(100);
console.log(totalBill);
//>>> 128

function calculateBill (total, tax = 0.13, tip = 0.15) {
    return total + (total * tax) + (total * tip);

}

const totalBill = calculateBill(100, undefined, 0.25);
console.log(totalBill);
//>>> 138
