document.getElementById("convert-button").addEventListener("click", function() {
    const tempInput = document.getElementById("temperature-input").value;
    const unitFrom = document.getElementById("unit-from").value;
    const unitTo = document.getElementById("unit-to").value;
    const resultOutput = document.getElementById("result-output");

    if (isNaN(tempInput) || tempInput === "") {
        resultOutput.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemp;

    // Convert from Celsius
    if (unitFrom === "celsius") {
        if (unitTo === "fahrenheit") {
            convertedTemp = (tempInput * 9/5) + 32;
        } else if (unitTo === "kelvin") {
            convertedTemp = parseFloat(tempInput) + 273.15;
        } else {
            convertedTemp = tempInput;
        }
    }

    // Convert from Fahrenheit
    else if (unitFrom === "fahrenheit") {
        if (unitTo === "celsius") {
            convertedTemp = (tempInput - 32) * 5/9;
        } else if (unitTo === "kelvin") {
            convertedTemp = (parseFloat(tempInput) + 459.67) * 5/9;
        } else {
            convertedTemp = tempInput;
        }
    }

    // Convert from Kelvin
    else if (unitFrom === "kelvin") {
        if (unitTo === "celsius") {
            convertedTemp = tempInput - 273.15;
        } else if (unitTo === "fahrenheit") {
            convertedTemp = (tempInput * 9/5) - 459.67;
        } else {
            convertedTemp = tempInput;
        }
    }

    resultOutput.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)}° ${unitTo.charAt(0).toUpperCase() + unitTo.slice(1)}`;
});
