// Array of Deck of Cards

let deck = ["agility", "agility", "boat", "boat", "citizenship", "citizenship", "hack", "hack", "nerd-rage", "nerd-rage", "nuka-cola", "nuka-cola", "robotics", "robotics", "shocked", "shocked"];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(deck) {
    var currentIndex = deck.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck[randomIndex] = temporaryValue;
    }

    return deck;
}

shuffle(deck);
console.log(deck);