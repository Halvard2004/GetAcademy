/* Model  */
let secretNumber = getRandomNumber(1, 100)
let tries = 0;
let guessedRight = false;
let guessedNumber = null;

/* View */
showApp()
function showApp(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    <h1> you have guessed ${tries}</h1>
    <h2>${findHigherLower()}</h2>
    ${guessedRight ? '<h1>You won</h1>' : '<input type="number" id="guessedNumber"> <button onclick="guessNumber()">Guess number</button>'}
    `;
}


/* Controller */
function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }


function guessNumber(){
    guessedNumber = document.getElementById("guessedNumber").value
    tries++;
    guessedRight = secretNumber == guessedNumber ? true : false;
    showApp()
}

function findHigherLower(){
    if (!guessedNumber){
        return "Guess a number"
    }
    if (guessedNumber == secretNumber){
        return "you found it"
    } else {
        return guessedNumber < secretNumber ? "Higher" : "Lower";
    }
}