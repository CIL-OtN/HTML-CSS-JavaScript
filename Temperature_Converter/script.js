
// EventTarget.addEventListener(Typ, Reaktionsfunktion)
document.getElementById("celsius-inputfield").addEventListener("input", celsiusConverter);
document.getElementById("fahrenheit-inputfield").addEventListener("input", fahrenheitConverter);
document.getElementById("kelvin-inputfield").addEventListener("input", kelvinConverter);


function celsiusToFahrenheitConvert(celsius) {
	return celsius * 1.8 + 32;	        // formula: F = C * 1.8 + 32
}

function celsiusToKelvinConvert(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsiusConvert(fahrenheit) {
	return (fahrenheit - 32) / 1.8;     // formula: C = (F - 32) / 1.8
}

function fahrenheitToKelvinConvert(fahrenheit) {
	return (fahrenheit - 32) / 1.8 + 273.15;
}

function kelvinToCelsiusConvert(kelvin) {
	return kelvin - 273.15;
}

function kelvinToFahrenheitConvert(kelvin) {
	return (kelvin - 273.15) * 1.8 + 32;
}

function celsiusConverter(event) {
    const celsius = event.target.valueAsNumber; // value != valueAsNumber <-> "string" != number
    document.getElementById("fahrenheit-inputfield").value = celsiusToFahrenheitConvert(celsius);
    document.getElementById("kelvin-inputfield").value = celsiusToKelvinConvert(celsius);
}

function fahrenheitConverter(event) {
    const fahrenheit = event.target.valueAsNumber;
    document.getElementById("celsius-inputfield").value = fahrenheitToCelsiusConvert(fahrenheit);
    document.getElementById("kelvin-inputfield").value = fahrenheitToKelvinConvert(fahrenheit);
}

function kelvinConverter(event) {
    const kelvin = event.target.valueAsNumber;
    document.getElementById("celsius-inputfield").value = kelvinToCelsiusConvert(kelvin);
    document.getElementById("fahrenheit-inputfield").value = kelvinToFahrenheitConvert(kelvin);
}



