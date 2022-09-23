let primaryScreen=document.getElementById('primaryScreen');
let secondaryScreen=document.getElementById('secondaryScreen');

primaryScreen.innerText="";
secondaryScreen.innerText="";
let firstNumber=0;
let secondNumber=0;
let result=0;
let operation="NULL";

function zero(){
    let flag=limitcheck();
    if(flag){
        primaryScreen.innerText+="0";
    }
}
function one(){
    let flag=limitcheck();
    if(flag){
        primaryScreen.innerText+="+";
    }
}
function two(){
    let flag=limitcheck();
    if(flag){
        primaryScreen.innerText+="2";
    }
}
function three(){
    let flag=limitcheck();
    if(flag){
        primaryScreen.innerText+="3";
    }
}
function four(){
    let flag=limitcheck();
    if(flag){
        primaryScreen.innerText+="4";
    }
}
function five(){
    let flag=limitcheck();
    if(flag){
        primaryScreen.innerText+="5";
    }
}
function six(){
    let flag=limitcheck();
    if(flag){
        primaryScreen.innerText+="6";
    }
}
function seven(){
    let flag=limitcheck();
    if(flag){
        primaryScreen.innerText+="7";
    }
}
function eight(){
    let flag=limitcheck();
    if(flag){
        primaryScreen.innerText+="8";
    }
}
function nine(){
    let flag=limitcheck();
    if(flag){
        primaryScreen.innerText+="9";
    }
}
function add(){
    if(primaryScreen.innerText!==''){
        firstNumber=parseInt(primaryScreen.innerText);
        secondaryScreen.innerText=firstNumber+"+";
        primaryScreen.innerText="";
        operation="+";
    }
}
function subtract(){
    if(primaryScreen.innerText!==''){
        firstNumber=parseInt(primaryScreen.innerText);
        secondaryScreen.innerText=firstNumber+"-";
        primaryScreen.innerText="";
        operation="-";
    }
}
function multiply(){
    if(primaryScreen.innerText!==''){
        firstNumber=parseInt(primaryScreen.innerText);
        secondaryScreen.innerText=firstNumber+"*";
        primaryScreen.innerText="";
        operation="*";
    }
}
function divide(){
    if(primaryScreen.innerText!==''){
        firstNumber=parseInt(primaryScreen.innerText);
        secondaryScreen.innerText=firstNumber+"/";
        primaryScreen.innerText="";
        operation="/";
    }
}

function equal(){
    if(secondaryScreen.innerText!==""){
        if(firstNumber!==""){
            secondNumber=parseInt(primaryScreen.innerText);
            if(operation==="+"){
                result=firstNumber+secondNumber;
                secondaryScreen.innerText="";
                let flag=limitcheck();
                if(flag){
                    primaryScreen.innerText=result;
                }
            }
            if(operation==="-"){
                result=firstNumber-secondNumber;
                secondaryScreen.innerText="";
                let flag=limitcheck();
                if(flag){
                    primaryScreen.innerText=result;
                }
            }
            if(operation==="*"){
                result=firstNumber*secondNumber;
                secondaryScreen.innerText="";
                let flag=limitcheck();
                if(flag){
                    primaryScreen.innerText=result;
                }
            }
            if(operation==="/"){
                result=firstNumber/secondNumber;
                secondaryScreen.innerText="";
                let flag=limitcheck();
                if(flag){
                    primaryScreen.innerText=result;
                }
            }
        }
    }
}

function clearScreen(){
    primaryScreen.innerText="";
    secondaryScreen.innerText="";
    firstNumber=0;
    secondNumber=0;
    result=0;
    operation="NULL";
}

function erase(){
    primaryScreen.innerText=primaryScreen.innerText.substring(0,primaryScreen.innerText.length-1);
    if(primaryScreen.innerText===""){
        secondaryScreen.innerText="";
    }
}

function limitcheck(){
    if((primaryScreen.innerText.length)>12||(secondaryScreen.innerText.length)>12){
        secondaryScreen.innerText="";
        primaryScreen.innerText="Limit Exceeds"
        return false;
    }else{
        return true;
    }
}