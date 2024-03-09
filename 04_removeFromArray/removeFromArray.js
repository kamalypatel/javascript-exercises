const removeFromArray = function(inputArray, ...removeValues) {

    let arrayLength = inputArray.length - 1

    const outputArray = inputArray

    for (let value of removeValues) {
        for (let i = 0; i <= arrayLength; i++) {
            if (inputArray[i] == value) {
                outputArray.splice(i,1)
                console.log(outputArray)
                i--
                continue
            }

        }
    }

    return outputArray

};

// Do not edit below this line
module.exports = removeFromArray;