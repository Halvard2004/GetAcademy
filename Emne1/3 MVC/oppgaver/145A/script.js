/* Model  */
let squares = 4;
let SelectedSquare = 0;

/* View */
updateView();
function updateView(){

    document.getElementById("app").innerHTML = /*HTML*/ `
    ${createSquareHtml()}
    `;
}

function createSquareHtml(){
let HTMLdivs;
    HTMLdivs = `<div id="container">`
    for(let i = 0; i < squares; i++){
        HTMLdivs += `<div id="Box${i}">${Selected(i) ? "Hello" : ""}</div>`
    }
    HTMLdivs += "</div>"
    return HTMLdivs
}

/* Controller */
function Selected(){
    
}