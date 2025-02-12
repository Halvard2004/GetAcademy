/* Model  */



/* View */
UpdateView();
function UpdateView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${createDiv('Hei', 'blue', 'black')}
    `;
}



/* Controller */
function createDiv(text, foregroundColor, backgroundColor){
    return /*HTML*/ `
    <div style="color:${foregroundColor};background-color:${backgroundColor}">${text}</div>
    `;
}