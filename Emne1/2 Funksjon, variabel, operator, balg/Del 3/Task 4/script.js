let phase = 0;

function DrawtrafficLight(topColor, middleColor, bottomColor) {
    phase++;
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="trafficLight" onclick="Statement()">
        ${LightsCreate(topColor, middleColor, bottomColor)}
    </div>
    `;
}

Statement();




function Statement() {
    if (phase == 0) {
        DrawtrafficLight(true, false, false);
    } else if (phase == 1){
        DrawtrafficLight(true, true, false);
    } else if (phase == 2){
        DrawtrafficLight(false, false, true);
    } else if (phase == 3) {
        DrawtrafficLight(false, true, false);
        phase = 0;
    }
    

}

function LightsCreate(x, y, z) {
    if (x && y) {
        return `
        ${CreateLightsHTML("red", "yellow", "grey")}
        `
    }
    if (x) {
        return `
        ${CreateLightsHTML("red", "grey", "grey")}
        `
    } 
    if (y) {
        return `
        ${CreateLightsHTML("grey", "yellow", "grey")}
        `
    }
    if (z) {
        return `
        ${CreateLightsHTML("grey", "grey", "green")}
        `
    }

}

function CreateLightsHTML(first, second, third) {
    return /*HTML*/ `
        <div class="light" style="background-color: ${first};"></div>
        <div class="light" style="background-color: ${second};"></div>
        <div class="light" style="background-color: ${third};"></div>
        `
}
