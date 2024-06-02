// StringCalculator.js
function StringCalculator() {}

StringCalculator.prototype.add = function(string_numbers) {
    const numbers = string_numbers.split(',').map(Number);
    return electronsAroundCores(numbers);
};

function electronsAroundCores(diceArray) {
    // Sort the array in ascending order
    diceArray.sort((a, b) => a - b);
    
    // Calculate the sum of the last five elements in the sorted array
    let sum = 0;
    for (let i = diceArray.length - 1; i >= diceArray.length - 5; i--) {
        sum += diceArray[i];
    }
    
    return sum;
}
