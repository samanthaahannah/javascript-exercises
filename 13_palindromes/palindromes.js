const palindromes = function (string) {
    let isPalindome = false;
    const lettersNums = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const cleaned = string
   .toLowerCase()
   .split('')
   .filter((char) => lettersNums.includes(char))
   .join('');

   let reversed = cleaned.split('').reverse().join('');

   if (cleaned === reversed){
    return isPalindome = true;
   }else{
    return isPalindome = false;
   }


};

// Do not edit below this line
module.exports = palindromes;
