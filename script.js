var colorArray = ["black"]; 
var i = 0; 
var colorArray1 = ["white"]; 
var i = 0; 
function changeColor(){
    document.body.style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}
function changeColor1(){
    document.body.style.background = colorArray1[i]; 
    i++;
    if( i > colorArray1.length - 1){
        i = 0;
    }
}



