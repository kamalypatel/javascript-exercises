const palindromes = function (palindromeString) {
    let newString = ''

    cleanedString = palindromeString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()/^\s+|\s+$]/g,"")

    for (let i = cleanedString.length - 1; i >= 0; i--) {
        
        newString += cleanedString.charAt(i)
    }

    return newString.toLowerCase() == cleanedString.toLowerCase() ? true : false
    
};

// Do not edit below this line
module.exports = palindromes;
