var km = 0.21
var kmMinorenni = 0.21 - (0.21*0.8)
var kmOver65 = 0.21 - (0.21*0.6)


var anni = prompt("Quanti anni hai?")
var numeroKm = prompt("quanti kilometri devi percorrere?")

if (anni < 18) {
  document.getElementById("ride").innerHTML = "Il costo della tua corsa è di " +
   (kmMinorenni*numeroKm).toFixed(2);
} else if (anni > 65) {
    document.getElementById("ride").innerHTML = "Il costo della tua corsa è di " + (kmOver65*numeroKm).toFixed(2);
} else {
  document.getElementById("ride").innerHTML = "Il costo della tua corsa è di " + (km*numeroKm).toFixed(2);
}
