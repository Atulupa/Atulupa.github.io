let result = '';

function appendToResult(value) {
    result += value;
    document.getElementById('result').value = result;
}

function clearResult() {
    result = '';
    document.getElementById('result').value = result;
}

function calculateResult() {
    try {
        const calculationResult = eval(result);
        document.getElementById('result').value = result + ' = ' + calculationResult;
        result = calculationResult.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// Listen for the Enter key press to calculate the result
document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        calculateResult();
    }
});
