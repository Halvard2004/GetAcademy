showGame();



function showGame(){
    document.getElementById("app").innerHTML = /*html*/ `
    <div id="Board">
    ${createBoard()}
    <h1>hello</h1>
    
    </div>
    `
}


function createBoard(){
    document.getElementById("app").innerHTML += /*html*/ `
    ${createSpace()}
      `
}



function createSpace(){
    for (let i = 0; i != 8 ; i++) {
        return("<div></div>")
      }
}