const removeFromArray = function(ArrayList, ...popped) {

  return ArrayList.filter(item => !popped.includes(item))

}

// Do not edit below this line
module.exports = removeFromArray;
