/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("#btn-convert")
const convertInput = document.querySelector("#input-el")
let metersEl = document.querySelector("#meters-el")
let litersEl = document.querySelector("#liters-el")
let kilosEl = document.querySelector("#kilos-el")
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204


convertBtn.addEventListener("click", function() {
    metersEl.innerHTML = convertInput.value * Math.round((meterToFeet + Number.EPSILON) * 100) / 100 + " Feet"
    litersEl.innerHTML = convertInput.value * Math.round((literToGallon + Number.EPSILON) * 100) / 100  + " Gallons"
    kilosEl.innerHTML = convertInput.value * Math.round((kiloToPound + Number.EPSILON) * 100) / 100 + " Pounds"
})