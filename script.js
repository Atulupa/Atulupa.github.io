let displayValue = "0";

function appendToDisplay(value) {
    if (displayValue === "0" && value !== "C") {
        displayValue = value;
    } else if (displayValue !== "0" || /[0-9]/.test(value)) {
        displayValue += value;
    }
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    document.getElementById("display").value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        displayValue = "Error";
        document.getElementById("display").value = displayValue;
    }
}
