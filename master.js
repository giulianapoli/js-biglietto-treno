var km = 0.21
var kmMinorenni = 0.21*0.8
var kmOver65 = 0.21*0.6

var anni = prompt("Quanti anni hai?")
var numeroKm = prompt("quanti kilometri devi percorrere?")

if (anni < 18) {
  console.log("Il costo della tua corsa è di " + kmMinorenni*numeroKm);
} else if (anni > 65) {
    console.log("Il costo della tua corsa è di " + kmOver65*numeroKm);
} else {
  console.log("Il costo della tua corsa è di " + km*numeroKm)
}
