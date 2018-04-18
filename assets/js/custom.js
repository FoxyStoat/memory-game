// Array of Deck of Card Images
const deckCards = ["Agility.png", "Agility.png", "Boat.png", "Boat.png", "Citizenship.png", "Citizenship.png", "Hack.png", "Hack.png", "Nerd-Rage.png", "Nerd-Rage.png", "Nuka-Cola.png", "Nuka-Cola.png", "Robotics.png", "Robotics.png", "Shock.png", "Shock.png"];
// Global Arrays
// Access the <ul> with class of .deck
const deck = document.querySelector(".deck");
// Create an empty array to store the opened cards
let opened = [];

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
/* 
TODO: Create <img> tags and append
to <li> then add to deck <ul> with the new shuffled content
*/ 
// Iterate over deck of cards array
	for (let i = 0; i < shuffledDeck.length; i++) {
		// Access the <li> with class of .card
		const liTag = document.querySelector(".card");
		// Create the <img> tags
		const addImage = document.createElement("IMG");
 		// Append <img> to <li>
		liTag.appendChild(addImage);
		// Set the img src path with the shuffled deck
		addImage.setAttribute("src", "assets/img/" + shuffledDeck[i]);
		// Add an alt tag to the image
		addImage.setAttribute("alt", "image of vault boy from fallout");
		// Update the new <li> to the deck <ul>
		deck.appendChild(liTag);
	}

/*
TODO: Event Listener if a card is clicked
(add flip class to show the img)
*/
deck.addEventListener("click", function(evt) {
	if(evt.target.nodeName === "LI") {
	// To console if I was clicking the correct element 
	console.log(evt.target.nodeName + " Was clicked");
	// Call flipCard function
	flipCard();
	addToOpened();
}

	//TODO: Flip the card and display cards img
	function flipCard() {
		// When <li> is clicked add the class .flip to show img
		evt.target.classList.add("flip");	  
		}

	//TODO: Add the fliped cards to the empty array of opened
	function addToOpened() {
		/* If the opened array has zero or one other img push another 
		img into the array so we can compare these two to be match
		*/
		if (opened.length === 0 || opened.length === 1) {
			opened.push(evt.target.firstElementChild);
		}
	}
	console.log(opened);
}); //Event Listener