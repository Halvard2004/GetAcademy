drawForm();

function drawForm() {
    drawField('fname', 'First Name', 'text');
    drawField('lname', 'Last Name', 'text');
    drawField('zero2hundred', 'En til hundre', 'range');
    drawField('lname', 'Skriv inn et tall', 'number');
    drawField('html', 'HTML', 'radio', 'fav_language');
    drawField('css', 'CSS', 'radio', 'fav_language');
    drawField('js', 'JavaScript', 'radio', 'fav_language');
}

function drawField(id, label, type, radioGroupName) {
    let minMaxStep = '';
    let breakTag = '<br/>';
    let labelTag = '<label for="${id}">${label}:</label>';
    let fieldTag = ' <input type="${type}" ${minMaxStep} id=${id}">';
    if (type == "range") {
        minMaxStep = 'min="1" max="100" step="1"';
    }
    let html = label + breakTag + fieldTag + breakTag;
    if(type == 'radio'){
        html = /*html*/`
        <input type="${type}" name=${radioGroupName} id="${id}">
        <label for="${id}">${label}</label>
        <br/>
        `;

    }
    document.getElementById('app').innerHTML += html;   
}