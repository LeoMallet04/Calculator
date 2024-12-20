let display = document.getElementById('conta');
let displayText = document.getElementById('contaSpan');
let displayAux = document.getElementById('contaAux');

function insert(num){
    if(displayText.innerHTML != "NaN" && displayText.innerHTML != "Error" ){
        if(displayText.innerHTML != 0 ){
            displayText.innerHTML += num;
            adjustViewWithOverflow()
           }else if(displayText.innerHTML  == 0 && !displayText.innerHTML.includes('.')){
            displayText.innerHTML = num;
           }else if(displayText.innerHTML.includes(".")){
            displayText.innerHTML += num;
            adjustViewWithOverflow()
        }
    }
 }

function insertPercent(){
    if(!(/[+\-*/]/.test(displayText.innerHTML.slice(-1))) && !(displayText.innerHTML.slice(-1).includes('.')) && displayText.innerHTML != "NaN" ){
        displayText.innerHTML = displayText.innerHTML/100;
    }
    
}

function insertCommand(str){
    if(displayText.innerHTML != "NaN" && displayText.innerHTML != "Error"){
        if(!(/[+\-*/]/.test(displayText.innerHTML.slice(-1))) && displayText.innerHTML.slice(-1) != '.'){
            displayText.innerHTML += str
            adjustViewWithOverflow()
        }else if(displayText.innerHTML == 0){
            displayText.innerHTML = 0;
        }

    }
}


function calculator(){
    if(!(/[+\-*/]/.test(displayText.innerHTML.slice(-1)))){
        displayAux.innerHTML = displayText.innerHTML;
    }
    let resultado = eval(displayText.innerHTML);
    if(eval(displayText.innerHTML) == "Infinity"){
        resultado = "Error";
    }
    if(displayText.innerHTML != "Error"){
        displayText.innerHTML = resultado;
        adjustViewWithOverflow()
    }
    
}

function inverse(){
    if(displayText.innerHTML != "Error" && !(/[+\-*/]/.test(displayText.innerHTML.slice(-1)))){
        signal = displayText.innerHTML * -1;
        displayText.innerHTML = signal;
        adjustViewWithOverflow()
    }
}

function back(){
    if(displayText.innerHTML > -10 && displayText.innerHTML < 0){
        displayText.innerHTML = 0;
    }else if(displayText.innerHTML != "Error" && displayText.innerHTML != "NaN"){
        displayText.innerHTML = displayText.innerHTML.substring(0,displayText.innerHTML.length -1);
    }
}

function comma(str){
    if (displayText.innerHTML.trim() === "") {
        displnay.innerHTML = "";
    }else if(!(/[+\-*/]/.test(displayText.innerHTML)) && (displayText.innerHTML.match(/\./g) || []).length >= 1){
        displayText.innerHTML.slice(-1);
    }else if((/[+\-*/]/.test(displayText.innerHTML)) && (displayText.innerHTML.match(/\./g) || []).length == 2){
        displayText.innerHTML = displayinnerHTML;
    }else if(displayText.innerHTML.slice(-1) !== str && (/[0-9]/.test(displayText.innerHTML.slice(-1)))) { 
        displayText.innerHTML += str;
        adjustViewWithOverflow()
    }
}
function clearDisplay(){
    displayAux.innerHTML = "";  
    displayText.innerHTML= 0;
    adjustViewDefault();
}


function hasOverflow(){
    return displayText.scrollWidth > display.scrollWidth;
}

function adjustViewWithOverflow(){
    if(hasOverflow() == true){
        let fontSize = parseInt(window.getComputedStyle(displayText, null).getPropertyValue('font-size').slice(0, -2));
        let displayTextHeight = displayText.scrollHeight;
        fontSize = fontSize - 10;
        displayTextHeight -= 7;
        displayText.style.fontSize = fontSize + "px";
        displayText.style.height = displayTextHeight + "px";
    }
}

function adjustViewDefault(){
    displayText.style.fontSize = "60px";
    displayText.style.height = "80px";
    
}