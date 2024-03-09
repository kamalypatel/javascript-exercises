const repeatString = function(textInput, numberOfTextInputs) {
    let textOutput = textInput
    for (let i = 1; i < numberOfTextInputs; i++) {
        textOutput = textOutput + textInput
      }

      return textOutput
};

// Do not edit below this line
module.exports = repeatString;
