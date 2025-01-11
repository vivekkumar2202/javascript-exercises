const fibonacci = function(num) {
    num = Number(num);
    if (num < 0)
        return "OOPS";
    if (num === 0 )
        return 0;
    prev = 0;
    curr = 1;
    for (let i = 1; i < num; i++) {
        let temp = prev;
        prev = curr;
        curr += temp;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
