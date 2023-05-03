
let celciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')


celciusInput.addEventListener("input", function () {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9 / 5)) + 32;
    const kTemp = cTemp + 273.15;

    fahrenheitInput.value = fTemp.toFixed(2);
    kelvinInput.value = kTemp.toFixed(2);

    updateBackground(cTemp);
});

fahrenheitInput.addEventListener("input", function () {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp + 459.67) * (5 / 9);

    celciusInput.value = cTemp.toFixed(2);
    kelvinInput.value = kTemp.toFixed(2);

    updateBackground(cTemp);
});

kelvinInput.addEventListener("input", function () {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = (kTemp * (9 / 5)) - 459.67;

    celciusInput.value = cTemp.toFixed(2);
    fahrenheitInput.value = fTemp.toFixed(2);

    updateBackground(cTemp);
});

btn.addEventListener("click", clearInputs);


function updateBackground(temperature) {
    const body = document.querySelector("body");

    if (temperature > 49) {
        body.style.backgroundImage = "url('too-hot.jpg')";
    } 
    else if (temperature > 37) {
        body.style.backgroundImage = "url('water.jpeg')";
    } else if (temperature < -30) {
        body.style.backgroundImage = "url('to-cold.jpg')";
    }else if (temperature<0) {
        body.style.backgroundImage = "url('cold.jpg')";
    }else{
        body.style.backgroundImage = "url('normal.png')"
    }
}

function clearInputs() {
    celciusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
    updateBackground(0);
}
