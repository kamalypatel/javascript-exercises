const fibonacci = function(sequenceNumber) {
    let arr = [0, 1]
    let sum = 1
    sequenceNumber = parseInt(sequenceNumber)
    if (sequenceNumber < 0) {
            return 'OOPS'
        } else {
        for (let i = 1; i <= sequenceNumber; i++) {
            sum = arr[i] + arr[i-1];
            arr.push(sum)
        }
        return arr[arr.length-2]
    }
};

// Do not edit below this line
module.exports = fibonacci;
