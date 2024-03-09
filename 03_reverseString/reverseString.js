const reverseString = function(inputText) {

    let reverse = ''

    for (let i = inputText.length - 1; i >= 0; i--) {
        console.log(i)
        reverse = reverse + inputText.charAt(i)
        console.log(reverse)
    }
    return reverse
};

// Do not edit below this line
module.exports = reverseString;

console.log(reverseString('hello'))