const removeFromArray = function(arr, ...rmv) {

    const result = arr.filter(num => !rmv.includes(num));

    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
