let Spaces;
createSpace();
showGame();



function showGame(){
    document.getElementById("gameBoard").innerHTML = /*html*/ `
    <div id="Board">
    ${createBoard}
    
    </div>
    `
}


function createBoard(){
    document.getElementById("gameBoard").innerHTML += /*html*/ `
    ${createSpace()}
      `
}



function createSpace(){
    for (let i = 0; i != 64 ; i++) {
       Spaces += `<div></div>`;
      }

}