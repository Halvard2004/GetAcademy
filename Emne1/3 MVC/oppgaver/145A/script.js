/* Model  */
let squares = [4, 9, 16, 25, 36];
let squareAmountSelect = 4;
let SelectedSquare = 0;

/* View */
updateView();
function updateView(){

    document.getElementById("app").innerHTML = /*HTML*/ `
    <div id="container" style="width: ${widthChoice("mainBox")}px">${createSquareHtml()}</div>
    <div id="buttonContainer" style="width: ${widthChoice("mainBox")}px">${createButtonHtml()}</div>
    `;
}

function createSquareHtml(){
let HTMLdivs = "";
    for(let i = 0; i < squares[squareAmountSelect]; i++){
        HTMLdivs += `<div id="Box" style="width: ${widthChoice("Box")}px">${Selected(i) ? "Hello" : ""}</div>`
    }
    return HTMLdivs
}

function createButtonHtml(){
    let buttons = ["Up", "Left", "Down", "Right"]
    let HTMLButtons = "";
        for (let button of buttons){
            HTMLButtons += /*HTML*/ `<button onclick="changeSelected('${button}')">${button}</button>`;
        }
         return HTMLButtons;
}

/* Controller */
function Selected(square){
    for(let i = 0; i < squares[squareAmountSelect]; i++){
        if(square == i && SelectedSquare == i){
            return true
        }
    }
}

function changeSelected(movementButton){
    const movement = convertButtonMovement(movementButton);
    SelectedSquare += movement;
    updateView();
}


function convertButtonMovement(buttonVersion){
    switch(buttonVersion){
        case "Up":
            return -Math.sqrt(squares[squareAmountSelect])
        case "Left":
            return -1
        case "Down":
            return Math.sqrt(squares[squareAmountSelect])
        case "Right":
            return 1
    }
}

function widthChoice(idType){
    if(idType == "mainBox"){
        let lineSquares = Math.sqrt(squares[squareAmountSelect]);
        widthSize = lineSquares * 200
    } else if(idType == "Box"){
        widthSize = 197
    }
    return widthSize
}