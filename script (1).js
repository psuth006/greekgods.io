const greekGods = [
    "Zeus", "Hera", "Poseidon", "Demeter", "Athena", "Apollo",
    "Artemis", "Ares", "Aphrodite", "Hephaestus", "Hermes",
    "Hades", "Dionysus", "Hestia", "Persephone", "Eros"
]; // Array of Greek gods' names
const columns = 15; // Number of columns of words

// Function to create a falling word
function createFallingWord(index) {
    const word = document.createElement('div');
    word.className = 'falling-word'; // Add falling-word class
    word.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    word.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall duration between 2 and 5 seconds

    // Set the word to a random Greek god name
    const randomGod = greekGods[Math.floor(Math.random() * greekGods.length)];
    word.innerHTML = randomGod; // Set the content of the word

    document.body.appendChild(word); // Append the word to the body

    // Remove the word after it falls to avoid cluttering the DOM
    word.addEventListener('animationend', () => {
        word.remove();
    });
}

// Create a word every 500 milliseconds
setInterval(() => {
    for (let i = 0; i < columns; i++) {
        createFallingWord(i);
    }
}, 500);
