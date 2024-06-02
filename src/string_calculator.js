// StringCalculator.js
function StringCalculator() {}

StringCalculator.prototype.add = function(string_numbers) {
    const numbers = string_numbers.split(',').map(Number);
    return electronsAroundCores(numbers);
};

function electronsAroundCores(diceArray) {
    // Überprüfen, ob die Eingabe leer ist oder die Anzahl der Würfel nicht innerhalb des erlaubten Bereichs liegt
    if (diceArray.length === 0 || diceArray.length < 4 || diceArray.length > 6) {
        return 0;
    }

    // Überprüfen, ob alle Zahlen im Array innerhalb des erlaubten Bereichs liegen
    for (let i = 0; i < diceArray.length; i++) {
        if (diceArray[i] < 1 || diceArray[i] > 6) {
            return 0;
        }
    }

    // Zählen der ungeraden Zahlen (außer 1) im Array und Subtraktion von 1 für jede
    let result = 0;
    for (let i = 0; i < diceArray.length; i++) {
        if (diceArray[i] % 2 !== 0 && diceArray[i] !== 1) {
            result += (diceArray[i] - 1);
        }
    }

    return result;
}
