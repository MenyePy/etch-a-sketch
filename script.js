const container = document.querySelector('.container');
const mainContent = document.querySelector('.main');
let lengthUnit = 10;
let containerWidth = 600;
let containerHeight = 600;
let mode = "#000";
let grid = 'border: 1px solid lightgray;';

function isMobile(){
    if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)){
        return true;
    } else {
        return false;
    }
}

if (isMobile()){
    mainContent.style.flexDirection = 'column-reverse';
    containerHeight = 400;
    containerWidth = 400
} else {
    //nothin
}

function draw(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    let width = containerWidth/lengthUnit;
    let height  = containerHeight/lengthUnit;
    for (let i = 1; i <= lengthUnit; i++){
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.classList.add(i);
        container.appendChild(rowDiv);

        for (let j = 0; j < lengthUnit; j++){
            let colDiv = document.createElement('div');
            colDiv.classList.add('col');
            colDiv.classList.add(j);
            colDiv.setAttribute('style', 'width: ' + width + 'px; height: ' + height + 'px;' + grid);
            colDiv.addEventListener('mouseenter', (e) => {
                colDiv.style.backgroundColor = mode;
            })
            rowDiv.appendChild(colDiv);
        }
    }
}

const colorBlack = document.querySelector('.black');
const colorRed = document.querySelector('.red');
const colorYellow = document.querySelector('.yellow');
const colorBlue = document.querySelector('.blue');
const colorGreen = document.querySelector('.green');
const eraser = document.querySelector('.erase');
const gridToggle = document.querySelector('.grid');

colorBlack.addEventListener('click', () => {
    mode = 'black';
});
colorRed.addEventListener('click', () => {
    mode = 'red';
});
colorBlue.addEventListener('click', () => {
    mode = 'blue';
});
colorGreen.addEventListener('click', () => {
    mode = 'green';
});
colorYellow.addEventListener('click', () => {
    mode = 'yellow';
});

eraser.addEventListener('click', () => {
    mode = '#fff';
});

gridToggle.addEventListener('click', () => {
    grid = (grid == '') ? grid = 'border: 1px solid lightgray;' : grid = '';
    draw();
});

function setGrid(){
    const sliderValue = document.querySelector('#r').value;
    lengthUnit = sliderValue;
    draw();
}

let slider = document.querySelector('#r');
let output = document.querySelector('.selection');
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}


draw();