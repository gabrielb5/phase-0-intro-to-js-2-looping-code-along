const { getModulesPluginNames } = require("@babel/preset-env");

// Code your solutions in this file


function writeCards(names,event) {
    let filledCards = [];
    for(let i = 0; i < names.length; i++)
        filledCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    return filledCards;
}

function countDown( number ) {
    while (  number > 0 ) {
      console.log(  number );
      number -= 1;
    }
    console.log(  number );
  }