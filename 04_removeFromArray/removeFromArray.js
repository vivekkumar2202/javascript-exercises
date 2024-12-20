const removeFromArray = function(arr, toRemove1 = null, toRemove2 = null, toRemove3 = null, toRemove4 = null) {
    let newArray = arr.filter( el => el !== toRemove1 && el !== toRemove2 && el !== toRemove3 && el !== toRemove4);
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
