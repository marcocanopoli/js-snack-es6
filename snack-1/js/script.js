/*
Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
*/

//var declarations
var bikes = [       //weight in kg
    {
        model: "Wilier 0 SLR",
        weight: 6.5,
    },
    {
        model: "Cannondale SuperSix EVOHi-MOD Disc Dura Ace",
        weight: 8,
    },
    {
        model: "Trek Emonda 2020",
        weight: 6.81,
    },
    {
        model: "Trek Emonda SLR",
        weight: 4.65,
    },
    {
        model: "SAVA Phantom 2.0 700C",
        weight: 8.1,
    }
]
var lightestBike = null;

//get lightest bike in bikes array
for (let i = 0; i < bikes.length; i++) { 

    if (lightestBike == null || bikes[i].weight < lightestBike.weight) {
        lightestBike = bikes[i];
    }

}

//save lightestBike properties in vars
var {model, weight} = lightestBike;

//prints lightest bike
console.log(
    `
    La bici più leggera e' la ${model} 
    con un peso di ${weight} kg
    `
);