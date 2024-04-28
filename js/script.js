const CELSIUS_TO_FAHRENHEIT = 1.8;
const CELSIUS_TO_KELVIN = 273.15;
const FAHRENHEIT_TO_CELSIUS = 0.56;

function clearTemp() {
    let parent = document.getElementById("celsius");
    parent.style.display = "none";
    let parent2 = document.getElementById("fahrenheit");
    parent2.style.display = "none";
    let parent3 = document.getElementById("kelvin");
    parent3.style.display = "none";
}

function showCelsius() {
    clearTemp();

    let celsius = document.getElementById("celsius");
    celsius.style.display = "inline";
}

function showFahrenheit() {
    clearTemp();

    let fahrenheit = document.getElementById("fahrenheit");
    fahrenheit.style.display = "inline";
}

function showKelvin() {
    clearTemp();

    let kelvin = document.getElementById("kelvin");
    kelvin.style.display = "inline";
}

function celsiusConvert() {
    let celsius = document.getElementById("ctemp").value;
    let fahrenheit = document.getElementById("cToFdisplay");
    let kelvin = document.getElementById("cToKdisplay");

    let cToK = (celsius + CELSIUS_TO_KELVIN);
    let cToF = (celsius * CELSIUS_TO_FAHRENHEIT) + 32;

    fahrenheit.innerHTML = "Fahrenheit: " + cToF + "°F";
    kelvin.innerHTML = "Kelvin: " + cToK + "K";
}

function fahrenheitConvert() {
    let fahrenheit = document.getElementById("ftemp").value;
    let celsius = document.getElementById("fToCdisplay");
    let kelvin = document.getElementById("fToKdisplay");

    let fToC = ((fahrenheit - 32) * FAHRENHEIT_TO_CELSIUS);
    let fToK = fToC + 273.15;

    celsius.innerHTML = "Celsius: " + fToC + "°C";
    kelvin.innerHTML = "Kelvin: " + fToK + "K";
}

function kelvinConvert() {
    let kelvin = document.getElementById("ktemp").value;
    let celsius = document.getElementById("kToCdisplay");
    let fahrenheit = document.getElementById("kToFdisplay");

    if (kelvin < 0) {
        kelvin = 0;
        alert("Temperature cannot be less than 0");
    }

    let kToC = kelvin - 273.15;
    let kToF = (kToC * CELSIUS_TO_FAHRENHEIT) + 32;

    celsius.innerHTML = "Celsius: " + kToC + "°C";
    fahrenheit.innerHTML = "Fahrenheit: " + kToF + "°F";
}
