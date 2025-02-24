/* Model  */
let valg = ["stein", "saks", "papir"]
let robotAnswear;
let humanAnswear;
let winsRow = 0;
let winLoose = "";
let combo = 0;
/* View */
showApp()
function showApp(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    <h2>${valg[robotAnswear]}</h2>
    <h2>${valg[humanAnswear]}</h2>
    <button onclick="guessAnswear(0)">stein</button>
    <button onclick="guessAnswear(1)">saks</button>
    <button onclick="guessAnswear(2)">papir</button>
    <h3> Wins in a row: ${winsRow}</h3>
    <h3>${winLoose}</h3>
    <h1>Highest win combo: ${combo}</h1>
    `;
}


/* Controller */
function getRandomNumber() {
    return robotAnswear = 0 + Math.floor(Math.random() * (2 - 0 + 1));
  }


function guessAnswear(guessed){
    humanAnswear = guessed
    getRandomNumber()
    findWinner()
    showApp()
}

function findWinner(){
    if (robotAnswear == humanAnswear){
        winLoose = "It is a Tie"
        return
    } else if (robotAnswear == 0 & humanAnswear == 2 || robotAnswear == 1 & humanAnswear == 0 || robotAnswear == 2 & humanAnswear == 1 ){
        winLoose = "You Won"
        winsRow++;
        checkCombo()
        return
    } else if (robotAnswear == 2 & humanAnswear == 0 || robotAnswear == 0 & humanAnswear == 1 || robotAnswear == 1 & humanAnswear == 2 ){
        winLoose = "You Lost"
        winsRow = 0;
        return
    }
}

function checkCombo(){
    if (combo < winsRow){
        combo = winsRow
    }
}