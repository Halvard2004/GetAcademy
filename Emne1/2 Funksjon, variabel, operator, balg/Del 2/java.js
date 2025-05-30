let Selected;
const size = 64;
let Amounts = false;
showBoardBegining();

function showBoardBegining() {
    const lengthPart1 = size;
    const pattern = '<div></div>';
    const part1 = ''.padEnd(pattern.length * lengthPart1, pattern)

    document.getElementById("board").innerHTML = part1;
}
// function showBoard() {
//     const lengthPart1 = selectedSquareIndex;
//     const pattern = '<div></div>';
//     const part1 = ''.padEnd(pattern.length * lengthPart1, pattern)
//     const part2 = '<div class="selected"></div>'
//     const lengthPart3 = size - (selectedSquareIndex + 1)
//     const part3 = ''.padEnd(pattern.length * lengthPart3, pattern)

//     document.getElementById("board").innerHTML = part1 + part2 + part3;
// }

function MoveSelected(Moved) {
    Selected += Moved
    Parts();
    showBoard(Selected, Sizepart1, Sizepart2);
}

function showBoard(Selected, lengthPart1, lengthPart3 ) {
    const pattern = '<div></div>';
    const part1 = ''.padEnd(pattern.length * lengthPart1, pattern)
    const part2 = '<div class="selected"></div>'
    const part3 = ''.padEnd(pattern.length * lengthPart3, pattern)

    document.getElementById("board").innerHTML = part1 + part2 + part3;
}

function AmountDivs() {
    let InputDecision = document.getElementById("InputDecision").value;
    while (!Amounts){
    if (InputDecision > 64){
        InputDecision -= 64;
    } else if (InputDecision < 1){
        InputDecision += 64;
    } else {
        Amounts = true;
    }
}
    Selected = InputDecision;
    
    Parts();
    showBoard(Selected, Sizepart1, Sizepart2);
}

function Parts() {
    if (Selected > 64){
        Selected -= 64;
    } else if (Selected < 1){
        Selected += 64;
    }
    Sizepart1 = Selected - 1;
    Sizepart2 = size - Selected;
    return(Sizepart1, Sizepart2)
}