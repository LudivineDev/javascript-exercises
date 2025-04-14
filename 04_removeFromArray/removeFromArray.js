const removeFromArray = function(ArrayList, ...popped) {
    let index = ArrayList.indexOf(...popped);//Determine index number of the things to be deleted from the array
    let removedIndex = ArrayList.splice(index,1);//Index to be removed
    
    return ArrayList;

}

// Do not edit below this line
module.exports = removeFromArray;
