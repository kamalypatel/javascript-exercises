const sumAll = function(firstRangeValue, lastRangeValue) {
    let sum = 0

    if (firstRangeValue < 0 || lastRangeValue < 0 || typeof firstRangeValue != 'number' || typeof lastRangeValue != 'number') {
        
        return 'ERROR'

    } else if (lastRangeValue < firstRangeValue) {

        for (let i = lastRangeValue; i <= firstRangeValue; i++) {
            sum += i
        }

        return sum
    } else {

        for (let i = firstRangeValue; i <= lastRangeValue; i++) {
            sum += i
        }
        
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
