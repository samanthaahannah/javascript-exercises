const sumAll = function(a, b) {
    const array = [];
    if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"
    if (a < 0 || b < 0) return "ERROR"
    if (a > b){
        const tempNumber = a;
        a = b;
        b = tempNumber;
    }

    let total = 0;
    for (let i = a; i <= b; i++){
        total+=i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
