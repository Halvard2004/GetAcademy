let firstCard = -1;
let secondCard = -1;
let attemptsMade = 0;
let matchedPairs = 0;
let totalPairs = 18;
let Check = true;

const cardlist = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,]
const animalList = ["cheetah", "redPanda", "frog", "screamingHairyArmadillo", "peacock", "wolf", "zebra", "panda", "duck", "lemur", "kudu", "waterDragon", "otter", "fennecFox", "tiger", "flamingo", "horse", "blobfish", "cheetah", "redPanda", "frog", "screamingHairyArmadillo", "peacock", "wolf", "zebra", "panda", "duck", "lemur", "kudu", "waterDragon", "otter", "fennecFox", "tiger", "flamingo", "horse", "blobfish"];
const randomizedAnimalList = [];

randomizeAnimalList();
showCards();

function showCards() {

    let html = "";
    for (let i = 0; i < 36; i++) {
        html += createCardHtml(i, randomizedAnimalList[i], cardlist[i])
    }


    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="gameBoard">
        ${html}
    </div>
    <br>
    <div> Antall forsøk: ${attemptsMade} </div>
    <div> Poeng: ${matchedPairs} </div>
    <button onclick="ChangeCheck()">Check</button>
    `;
}

function flipCard(cardId) {
    if (firstCard == -1) {
        firstCard = cardId;
        console.log("kort " + cardId + "  valgt som kort 1");
        showCards();       
    } else {
        secondCard = cardId;
        console.log("kort " + cardId + " valgt som kort 2");
        showCards();
        checkMatch();
    }
}

function isFlipped(id) {
    return id == firstCard || id == secondCard;
}

function createCardHtml(id, animal, isShowing) {
    let animals = "img/" + randomizedAnimalList[id] + ".jpg";
    if (Check) {
        return /*HTML*/`
        <div class="card" id="${id}"><img src="${animals}"></div>`;
        } else {
        if (isShowing) {
            if (isFlipped(id)) {
                return /*HTML*/ `
                <div class="card" id="${id}"><img src="${animals}"></div>`;
            } else {
                return /*HTML*/ `
                    <div ${secondCard > 0 ? `` : `onclick="flipCard(${id})"`}  class="card" style="font-size: 80px;" id="${id}">?</div>`;
            }  
        } else 
            return /*HTML*/ `
            <div class="card" id="${id}"><img src="${animals}"></div>`;
        
    }
}

function checkMatch() {
    attemptsMade++;
    
    if (document.getElementById(firstCard).innerHTML == document.getElementById(secondCard).innerHTML) {
        console.log('Match funnet. ' + attemptsMade + ' antall ganger trykket')
        matchedPairs++;
        
        for (let i = 0; i < 36; i++) {
            if (firstCard == i || secondCard == i) {
            cardlist[i] = false;
        }
        
    }
        
        setTimeout(gameFinished, 1500);
    } else {
        console.log('Match ikke funnet ' + attemptsMade + ' antall ganger trykket')
    }
    setTimeout(resetSelectedCards, 1000)
}

function resetSelectedCards() {
    firstCard = -1;
    secondCard = -1;
    showCards();
}

function gameFinished() {
    if(matchedPairs == totalPairs){
    document.getElementById("msgBox").innerHTML += "Du har vunnet! Du klarte det på " + attemptsMade + " forsøk!"
    }
}

function randomizeAnimalList() {

    for (let i = 0; i < 36; i++) {
        let randomNumber = Math.floor(Math.random()* animalList.length);
        let randomAnimal = animalList[randomNumber];
        animalList.splice(randomNumber, 1);
        randomizedAnimalList.push(randomAnimal);
    }
    
}

function ChangeCheck() {
    if (Check) {
        Check = false;
        showCards();
    } 
}