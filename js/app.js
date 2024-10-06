// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
var textToSpeak = '';
var story = ''; // This will hold the full story string

// Arrays for random word generation
var nouns = ['cat', 'dog', 'robot', 'wizard', 'dragon'];
var verbs = ['runs', 'jumps', 'flies', 'dances', 'paints'];
var adjectives = ['happy', 'sad', 'angry', 'excited', 'sleepy'];
var nouns2 = ['book', 'car', 'piano', 'mountain', 'castle'];
var places = ['park', 'zoo', 'beach', 'space', 'forest'];

// Button elements
var nounButton = document.getElementById('nounButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var noun2Button = document.getElementById('noun2Button');
var placeButton = document.getElementById('placeButton');
var speakButton = document.getElementById('speakButton');
var resetButton = document.getElementById('resetButton');

// Element to display the story
var storyParagraph = document.getElementById('story');

/* Functions
-------------------------------------------------- */
// Function to speak the text
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// Function to pick a random word from an array
function getRandomWord(array) {
	return array[Math.floor(Math.random() * array.length)];
}

// Update story paragraph and concatenate new words
function updateStory(newWord) {
	story += newWord + ' ';
	storyParagraph.textContent = story;
}

// Function to reset the story
function resetStory() {
	story = '';
	storyParagraph.textContent = story;
	textToSpeak = ''; // Reset the text to speak as well
}

/* Event Listeners
-------------------------------------------------- */
// Noun button
nounButton.onclick = function() {
	var randomNoun = getRandomWord(nouns);
	updateStory(randomNoun);
};

// Verb button
verbButton.onclick = function() {
	var randomVerb = getRandomWord(verbs);
	updateStory(randomVerb);
};

// Adjective button
adjectiveButton.onclick = function() {
	var randomAdjective = getRandomWord(adjectives);
	updateStory(randomAdjective);
};

// Second Noun button
noun2Button.onclick = function() {
	var randomNoun2 = getRandomWord(nouns2);
	updateStory(randomNoun2);
};

// Place button
placeButton.onclick = function() {
	var randomPlace = getRandomWord(places);
	updateStory(randomPlace);
};

// Speak button
speakButton.onclick = function() {
	textToSpeak = story;
	speakNow(textToSpeak);
};

// Reset button
resetButton.onclick = resetStory;
