// Array of Deck of Card Images
const deckCards = ["Agility.png", "Agility.png", "Boat.png", "Boat.png", "Citizenship.png", "Citizenship.png", "Hack.png", "Hack.png", "Nerd-Rage.png", "Nerd-Rage.png", "Nuka-Cola.png", "Nuka-Cola.png", "Robotics.png", "Robotics.png", "Shock.png", "Shock.png"];

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

// Store new shuffled array to a new variable and call shuffle()
const shuffledDeck = shuffle(deckCards);
// TODO: Create <li> tags and <img> tags and append
// to the deck <ul> with the new shuffled content 
// Iterate over deck of cards array
	for (let i = 0; i < deckCards.length; i++) {
		// Create the <li> tags
		const liTag = document.createElement('LI');
		// Give <li> class of card
		liTag.classList.add('card');
		// Create the <img> tags
		const addImage = document.createElement('IMG');
		// Append img to <li>
		liTag.appendChild(addImage);
		// Set the img src path with the shuffled deck
		addImage.setAttribute('src', 'assets/img/' + shuffledDeck[i]);
		// Access the <ul> with class of .deck
		const deck = document.querySelector('.deck');
		// Append <li> tags along with <img> tags to the deck <ul>
		deck.appendChild(liTag);
  	} // End Of For Loop
console.log(deckCards);