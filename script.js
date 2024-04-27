//domácí úkol číslo 1
const stupneFahrenheita = Number(prompt("Zadej teplotu ve stupních Fahrenheita"))
document.body.innerHTML = "<p> Požadovaná teplota na Celsiově stupnici je: " + Math.round(5*(stupneFahrenheita - 32)/9) + "°C</p>"