const findTheOldest = function(arr) {
    return arr.reduce((lastPerson, currentPerson) => {
        let lastPersonAge = getAge(lastPerson.yearOfBirth, lastPerson.yearOfDeath)
        let currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)

        return lastPersonAge < currentPersonAge ? currentPerson : lastPerson
    })
}

function getAge(birth, death) {
    if (!death) {
        death = Date.getFullYear()
        
    }
    return death - birth
}

// Do not edit below this line
module.exports = findTheOldest;