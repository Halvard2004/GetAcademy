let secretTex;
let currentTex;
let Tries = 30;
let Button = `<input id="SecretWord" type="password">
    <button onclick="DecideSecretWord()">Choose Secret word</button>`
let OnlyALetter = "";
let Alive = true;


function ShowApp(){
    if (Alive) {
        document.body.innerHTML = /*HTML*/ `
            ${Button}
            ${OnlyALetter}
            <div>Tries: ${Tries}</div>
            <h1>${currentTex}</h1>
    `} else {
        document.body.innerHTML = /*HTML*/ `
        ${Button}
        <h1> The word is ${secretTex}</h1>
        `
    }
}

function DecideSecretWord(){
    let Spaces = " ";
    secretTex = document.getElementById("SecretWord").value.toLowerCase()
    currentTex = "";
    for (i = 0; i != secretTex.length; i++){
        currentTex += "_"
    }
    if (secretTex.indexOf(Spaces) != -1){
        currentTex = evaluateHangman(secretTex, currentTex, " ")
    }
    Button = `<input id="guess">
    <button onclick="Guessletter()">Guess</button>
    <div id="app">`
    ShowApp();
}

function evaluateHangman(secretText, currentText, guessedLetter){
    const index = secretText.indexOf(guessedLetter);
    if(index == -1) {
        Tries = Tries - 1;
        return currentText;
    } else {
        const currentTextBeforeGuessedLetter = currentText.substring(0, index);     
        const currentTextAfterGuessedLetter = currentText.substring(index + 1);
        const secretTextAfterGuessedLetter = secretText.substring(index + 1);
    return currentTextBeforeGuessedLetter + guessedLetter 
        + evaluateHangman(secretTextAfterGuessedLetter, currentTextAfterGuessedLetter, guessedLetter);
    }
}

function Guessletter(){
    OnlyALetter = ""
    let guessedLette = document.getElementById("guess").value.toLowerCase()
    if (guessedLette.length != 1) {
        OnlyALetter = `<h1>Du kan bare velge enn bokstave</h1>`
        ShowApp()
    } else {
        currentTex = evaluateHangman(secretTex, currentTex, guessedLette)
    if (Tries <= 0) {
        Alive = false;
    } else {
        if (secretTex == currentTex){
            document.getElementById("app").innerHTML = /*HTML*/ `
            <h1>Congratulations you won </h1>
            <h1>${currentTex}</h1>
            ` 
            ShowApp();
        } else {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <h1>${currentTex}</h1>
    `
    ShowApp();
}
}
}
}