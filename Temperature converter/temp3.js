document.getElementById('convertBtn').addEventListener('click', function() {
    let inputTemperature = document.getElementById('inputTemperature').value;
    let inputUnit = document.getElementById('inputUnit').value;
    
    if (!inputTemperature || isNaN(inputTemperature)) {
        alert('Please enter a valid temperature!');
        return;
    }

    let convertedTemperature;
    if (inputUnit === 'celsius') {
        convertedTemperature = (inputTemperature * 9 / 5) + 32;
        document.getElementById('result').textContent = `${inputTemperature} Celsius is ${convertedTemperature.toFixed(2)} Fahrenheit.`;
    } else if (inputUnit === 'fahrenheit') {
        convertedTemperature = (inputTemperature - 32) * 5 / 9;
        document.getElementById('result').textContent = `${inputTemperature} Fahrenheit is ${convertedTemperature.toFixed(2)} Celsius.`;
    }
});
