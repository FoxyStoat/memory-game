// Array of Deck of Card Images
const deckCards = ["Agility.png", "Agility.png", "Boat.png", "Boat.png", "Citizenship.png", "Citizenship.png", "Hack.png", "Hack.png", "Nerd-Rage.png", "Nerd-Rage.png", "Nuka-Cola.png", "Nuka-Cola.png", "Robotics.png", "Robotics.png", "Shock.png", "Shock.png"];
// Global Arrays
// Access the <ul> with class of .deck
const deck = document.querySelector(".deck");
// Create an empty array to store the opened cards
let opened = [];
// Create an empty array to store the matched cards
const matched = [];
// Create variable for moves counter, start the count at one
let movesCount = 0;

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
TODO: Event Listener if a card <li> is clicked
call flipCard()
*/
deck.addEventListener("click", function(evt) {
	if (evt.target.nodeName === "LI") {
	// To console if I was clicking the correct element 
	console.log(evt.target.nodeName + " Was clicked");
	// Call flipCard() function
	flipCard();
	}

	//TODO: Flip the card and display cards img
	function flipCard() {
		// When <li> is clicked add the class .flip to show img
		evt.target.classList.add("flip");
		// Call addToOpened() function
		addToOpened();  
	}
	 
	//TODO: Add the fliped cards to the empty array of opened
	function addToOpened() {
		/* If the opened array has zero or one other img push another 
		img into the array so we can compare these two to be matched
		*/
		if (opened.length === 0 || opened.length === 1) {
			// Push that img to opened array
			opened.push(evt.target.firstElementChild);
		}
		// Call compareTwo() function
		compareTwo();
	}
}); //Event Listener

/*
TODO: Compare two cards to see if they match or not
*/
function compareTwo() {
	// Compare the two images src
	if (opened.length === 2 && opened[0].src === opened[1].src) {
		// If matched call match()
		match();
		console.log("It's a Match!");
	} else if (opened.length === 2 && opened[0].src != opened[1].src) {
		// If No match call noMatch()
		noMatch();
		console.log("NO Match!");
	}
}

/*
TODO: If the two cards match, keep the cards open and
apply class of match
*/ 
function match() {
	/* Access the two cards in opened array and add
	the class of match to the imgages parent: the <li> tag
	*/
	setTimeout(function() {
		opened[0].parentElement.classList.add("match");
		opened[1].parentElement.classList.add("match");
		// Push the matched cards to the matched array
		matched.push(...opened);
		// Check to see if there are 8 pairs of matched cards
		winGame();
		// Clear the opened array
		opened = [];
	}, 600);
	// Call movesCounter to increment by one
	movesCounter();
}

/*
TODO: If the two cards do not match, remove the cards
from the opened array and flip the cards back over by
removing the flip class.
*/
function noMatch() {
	/* After 700 miliseconds the two cards open will have
	the class of flip removed from the images parent element <li> */
	setTimeout(function() {
		// Remove class flip on images parent element
		opened[0].parentElement.classList.remove("flip");
		opened[1].parentElement.classList.remove("flip");
		// Remove the cards from opened array
		opened = [];
	}, 700);
	// Call movesCounter to increment by one
	movesCounter();
}

/*
TODO: Increment the moves counter.  To be called at each
comparison for every two cards compared add one to the count
*/
function movesCounter() {
	// Select the class moves-counter and change it's HTML  
	let movesCounter = document.querySelector(".moves-counter");
	// Update the html for the moves counter
	movesCounter.innerHTML ++;
	// Keep track of the number of moves for every pair checked
	movesCount ++;
}

/*
TODO: Check the length of the matched array and if there
are 8 pairs then the game is won
*/
function winGame() {
	if (matched.length === 16) {
		console.log("you have won");
		// Display the modal
		displayModal();
	}
}

/*
TODO: Display the modal on winning the game
Help with the modal from:
https://www.w3schools.com/howto/howto_css_modals.asp
*/
function displayModal() {
	// Access the modal
	const modal = document.getElementById("win-game-modal");
	// Access the modal <span> element that closes the modal
	const modalClose = document.getElementsByClassName("close")[0];
	// When the game is won set modal to display block to show it
	modal.style.display = "block";
	// When the user clicks on <span> (x), close the modal
	modalClose.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}

// Debugging console.logs
console.log(matched.length);
console.log(opened);
console.log(opened.length);
