let redValue = 125
let greenValue = 125
let blueValue = 125

function Red(difference){
    redValue += difference
    ChangeBackground();
}

function Green(difference){
    greenValue += difference
    ChangeBackground();
}

function Blue(difference){
    blueValue += difference
    ChangeBackground();
}

function ChangeBackground() {
    document.body.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
}