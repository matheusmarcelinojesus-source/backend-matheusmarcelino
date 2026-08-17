function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(10, 5));

const minArrow = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

console.log(minArrow(10, 5));