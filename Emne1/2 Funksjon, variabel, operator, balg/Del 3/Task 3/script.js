ShowSlider();
function ShowSlider(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    <input type="range" id="1" onchange="BackgroundColor()">`
}

function BackgroundColor() {
    x = document.getElementById("1").value
    if (x < 30) {
        document.body.style.background = "Green"
    } else if (x > 30 && x < 70) {
        document.body.style.background = "Blue"
    } else {
        document.body.style.background = "Yellow"
    }
}