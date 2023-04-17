//create an object of key-value pairs
let contacts = {
    bff: 1234567,
    mom: 5555555,
    bro: 1592467
}
//log all
console.log(contacts);

//access a specific entry by its key (name)
console.log(contacts.bff);

//cant access if the key doesnt exist
console.log(contacts.myself);

//add a new story
contacts.sis =3456677;
console.log(contacts);

//update an entry
contacts.bff = 1111111;
console.log(contacts);

//delete an entry
delete contacts.mom;
console.log(contacts);

//is there a key called ___ in there?
console.log("bff" in contacts);
console.log("myself" in contacts);

//objects are like arrays - pass by reference (location) not by value
//notice the following
let a = {
    value:20
};
let b = a;
let c = {
    value:20
};

console.log(a=b);
console.log(a=b);
console.log(b=a);

console.log(a.value == c.value);

//create 5 objects below:
let dog = {
    dogname: 'zelda',
    breed: 'terrier',
    age: 9,
    size: 'medium',
    barks: true
}
console.log(dog);


let  person = {
    person: 'Cesar',
    breed: 'mexican',
    age: 14,
    size: '5.9',
    barks: true
}
console.log(person);

let  place = {
    place: 'Adoption center',
    breed: 'all',
    age: 11,
    kids: '20',
    needparent: true
}
console.log(place);

let  animals = {
    animals: 'monkeys',
    breed: 'The Golden Snub-nosed Monkey',
    age: 3,
    place: 'zoo',
    funny: true
}
console.log(animals);

let   dragonball= {
    character: 'Mr popo',
    size: 'big',
    age: 'unknown',
    place: 'house',
    black: true
}
console.log(dragonball);