const readLine = require('readline-sync');

let diceRolled = [];
let character1={
//empty to start
}

createChar(character1, diceRolled);

function rolld6(){
    return Math.ceil(Math.random()*6);
}

function rollDice(amount, list){
    for (let i =0; i<amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll);
    }
}

function sum(list){
    let sum = 0;
    for (let i=0; i<list.length; i++){
        sum+=list [1]
    }
    return sum;
}

function rollStat(list){
    list=[];
    rollDice(4, list);
    return sum(list);
}

function createChar(character, list){
    character.name = readLine.question("Enter character name: ");
    console.log("Rolling STR");
    character.strength = rollStat(diceRolled);
    console.log("Rolling DEX");
    character.dexerity = rollStat(diceRolled);
    console.log("Rolling CON");
    character.constitution = rollStat(diceRolled);
    console.log("Rolling INT");
    character.intelligence = rollStat(diceRolled);
    console.log("Rolling WIS");
    character.wisdom = rollStat(diceRolled);
    console.log("Rolling CHA");
    character.charisma = rollStat(diceRolled);
    console.log(character)
}

function displayChar(Char){
    console.log(`------------------------`)
    console.log(`name: ${Char.name}`);
    console.log(`str: ${Char.strength }`);
    console.log(`dex: ${Char.dexerity}`);
    console.log(`con: ${Char.constitution}`);
    console.log(`int: ${Char.intelligence}`);
    console.log(`wis: ${Char.wisdom}`);
    console.log(`cha: ${Char.charisma}`);
    console.log(`------------------------`)

}