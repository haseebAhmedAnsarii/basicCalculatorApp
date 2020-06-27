function showValue(v){
    var input = document.getElementById("display");
    input.value += v;
}

function clearInput(){
    var clr = document.getElementById("display");
    clr.value = "";
}

function calculate(){
    var result = document.getElementById("display");
    result.value = eval(result.value);
}