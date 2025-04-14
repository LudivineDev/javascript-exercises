const reverseString = function(word) {
let SplitWord = word.split(``);
let reverseword = SplitWord.reverse();
let JoinReverseSplit = reverseword.join(``);

return JoinReverseSplit

}

// Do not edit below this line
module.exports = reverseString;
