// Array of Deck of Cards
const deck = ["agility", "agility", "boat", "boat", "citizenship", "citizenship", "hack", "hack", "nerd-rage", "nerd-rage", "nuka-cola", "nuka-cola", "robotics", "robotics", "shocked", "shocked"];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
shuffle(deck);
console.log(deck);
