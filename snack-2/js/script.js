/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//----- FUNCTIONS -----//
//get random int, inclusive
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

//var declaration
var teams = [
    {
        name : "Roma",
        goals : 0,
        fouls : 0
    },
    {
        name : "Napoli",
        goals : 0,
        fouls : 0
    },
    {
        name : "Inter",
        goals : 0,
        fouls : 0
    },
    {
        name : "Juventus",
        goals : 0,
        fouls : 0
    },
    {
        name : "Milan",
        goals : 0,
        fouls : 0
    }
];

var teamsCopy = [];

//fill goals and fouls with random ints, then copy teams to copy array without goals
for (let i = 0; i < teams.length; i++) {
    teams[i].goals = getRandomInt(30, 100);
    teams[i].fouls = getRandomInt(30, 200);

    let {name, fouls} = teams[i];
    teamsCopy.push({name,fouls});
    console.log(`${name} ha subito ${fouls} falli`);
}

console.log(teams);
console.log(teamsCopy);