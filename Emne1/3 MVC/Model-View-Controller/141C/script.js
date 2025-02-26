/* Model  */
let color;
let backgroundColor;
let colorDivs = "";


/* View */
updateView();
function updateView(){
    document.body.innerHTML = /*HTML*/ `
    <div id="app">${colorDivs}</div>
    <select oninput="color = this.value">
        <option selected value="">None</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
    </select>
    <select oninput="backgroundColor = this.value">
        <option value="">None</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
    </select>
    <button onclick="createDivHTML()">legg til div </button>
`;
}


/* Controller */
function createDivHTML(){
 
    colorDivs += `<div style="color: ${color}; background-color: ${backgroundColor};">Hello</div>`;
    color = "";
    backgroundColor = "";
    updateView();
}