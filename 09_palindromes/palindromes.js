const palindromes = function (str) {
    new_str = '';
    for (let i = 0; i < str.length; i++) {
        ascii = str[i].charCodeAt(0);
        if (ascii > 64 && ascii < 91) {
            new_str += str[i].toLowerCase();
        }
        else if ((ascii > 96 && ascii < 123) ||(ascii > 47 && ascii < 58)) {
            new_str += str[i];
        }
    }
    let i = 0;
    let j = new_str.length - 1;
    while (i < j) {
        if (new_str[i] !== new_str[j]) {
            return false;
        }
        i ++;
        j --;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
