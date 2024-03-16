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

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;