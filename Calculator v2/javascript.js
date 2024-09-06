function insert(num){
   let display = document.getElementById('conta');
   if(display.innerHTML != 0 && display.innerHTML != "Infinity"){
    display.innerHTML += num;
   }else if(display.innerHTML == 0 && !display.innerHTML.includes('.')){
    display.innerHTML = num;
   }else if(display.innerHTML.includes(".")){
    display.innerHTML += num;
   }
   
}
function insertPercent(Str){
    var display = document.getElementById('conta').innerHTML;
    strBack = display.substring(0,display.length);
    if(!(/[+\-*/]/.test(display.slice(-1))) && !(display.slice(-1).includes('.')) ){
        document.getElementById('conta').innerHTML = strBack/100;
    }
    
}

function insertCommand(str){
    let display = document.getElementById('conta');
    if(display.innerHTML != 0 && !display.innerHTML.includes(str) && !(/[+\-*/]/.test(display.innerHTML.slice(-1))) && display.innerHTML.slice(-1) != '.'    && display.innerHTML != "Infinity"){
        display.innerHTML += str
    }else if(display.innerHTML == 0){
        display.innerHTML = 0;
    }
}


function calculator(){
    var display = document.getElementById('conta').innerHTML;

    if(display){
        document.getElementById('conta').innerHTML = eval(display);
    }
}

// function retrieveNumber(display){
//     for(i = 0; i < display.length; i++){
//         if(display[i] == /[+\-*/]/)
//     }
// }

function inverse(){
    let display = document.getElementById('conta');
    if(display.innerHTML != "Infinity" && !(/[+\-*/]/.test(display.innerHTML.slice(-1)))){
        signal = display.innerHTML * -1;
        display.innerHTML = signal;
    }
}

function back(){
    var display = document.getElementById('conta').innerHTML;
    if(display > -10 && display < 0){
        document.getElementById('conta').innerHTML = 0;
    }else if(display != "Infinity"){
        document.getElementById('conta').innerHTML = display.substring(0,display.length -1);
    }
}

function comma(str){
    let display = document.getElementById('conta');
    if (display.innerHTML.trim() === "") {
        displnay.innerHTML = "";
    }else if(!(/[+\-*/]/.test(display.innerHTML)) && (display.innerHTML.match(/\./g) || []).length >= 1){
        display.innerHTML.slice(-1);
    }else if((/[+\-*/]/.test(display.innerHTML)) && (display.innerHTML.match(/\./g) || []).length == 2){
        display.innerHTML = display.innerHTML;
    }else if(display.innerHTML.slice(-1) !== str && (/[0-9]/.test(display.innerHTML.slice(-1)))) { 
        display.innerHTML += str;
    }
}
function clearDisplay(){
    document.getElementById('conta').innerHTML = 0;
}