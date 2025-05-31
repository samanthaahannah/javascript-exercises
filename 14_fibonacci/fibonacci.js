const fibonacci = function(n) {
    let stringToNo = 0;
    stringToNo = Number(n);
    if (stringToNo < 0){
        return "OOPS";
    }else if (stringToNo >= 0 && stringToNo < 1){
        return 0;
    }else if (stringToNo <= 2){
        return 1;
    
    }else{
        return fibonacci(stringToNo-1) + fibonacci(stringToNo-2);
    }
}

// Do not edit below this line
module.exports = fibonacci;
