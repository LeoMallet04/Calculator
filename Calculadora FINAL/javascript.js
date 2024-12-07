let display= document.getElementById('conta');

function insert(num){
    if(display.innerHTML != "NaN" && display.innerHTML != "Error" ){
        if(display.innerHTML != 0 ){
            display.innerHTML += num;
           }else if(display.innerHTML  == 0 && !display.innerHTML.includes('.')){
            display.innerHTML = num;
           }else if(display.innerHTML.includes(".")){
            display.innerHTML += num;
        }
    }
 }

function insertPercent(){
    if(!(/[+\-*/]/.test(display.innerHTML.slice(-1))) && !(display.innerHTML.slice(-1).includes('.')) && display.innerHTML != "NaN" ){
        document.getElementById('conta').innerHTML = display.innerHTML/100;
    }
    
}

function insertCommand(str){
    if(display.innerHTML != "NaN" && display.innerHTML != "Error"){
        if(display.innerHTML != 0 && 
        !(/[+\-*/]/.test(display.innerHTML.slice(-1))) && display.innerHTML.slice(-1) != '.'){
            display.innerHTML += str
        }else if(display.innerHTML == 0){
            display.innerHTML = 0;
        }

    }
}


function calculator(){
    let resultado = eval(display.innerHTML);
    if(eval(display.innerHTML) == "Infinity"){
        resultado = "Error";
    }
    if(display.innerHTML != "Error"){
        display.innerHTML = resultado;
    }
    
}

function inverse(){
    if(display.innerHTML != "Error" && !(/[+\-*/]/.test(display.innerHTML.slice(-1)))){
        signal = display.innerHTML * -1;
        display.innerHTML = signal;
    }
}

function back(){
    if(display.innerHTML > -10 && display.innerHTML < 0){
        display.innerHTML = 0;
    }else if(display.innerHTML != "Error" && display.innerHTML != "NaN"){
        display.innerHTML = display.innerHTML.substring(0,display.innerHTML.length -1);
    }
}

function comma(str){
    if (display.innerHTML.trim() === "") {
        displnay.innerHTML = "";
    }else if(!(/[+\-*/]/.test(display.innerHTML)) && (display.innerHTML.match(/\./g) || []).length >= 1){
        display.innerHTML.slice(-1);
    }else if((/[+\-*/]/.test(display.innerHTML)) && (display.innerHTML.match(/\./g) || []).length == 2){
        display.innerHTML = displayinnerHTML;
    }else if(display.innerHTML.slice(-1) !== str && (/[0-9]/.test(display.innerHTML.slice(-1)))) { 
        display.innerHTML += str;
    }
}
function clearDisplay(){
    display.innerHTML= 0;
}
