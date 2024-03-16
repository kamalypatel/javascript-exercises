const palindromes = function (palindromeString) {
    let newString = ''
    for (let i = palindromeString.length - 1; i >= 0; i--) {
        newString += palindromeString.charAt(i)
    }
    
    return newString == palindromeString ? true : false
    
};

// Do not edit below this line
module.exports = palindromes;
