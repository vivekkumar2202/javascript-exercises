const repeatString = function(toRepeat, no_of_times) {
    let str = "";
    if (no_of_times < 0){
        return "ERROR";
    }
    for (let i=0; i<no_of_times; i++){
        str += toRepeat;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
