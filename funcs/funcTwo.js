function isNumber(value) {
    return !isNaN(value);
}

export function funcTwo(num) {
    if (isNumber(num)) {
        numMin70 = num - 70;
        if (numMin70 < 0) {
            numMin70 *= -1;
            return numMin70;
        } else {
            return numMin70;
        }
    } else {
        throw 'we need a number cuh';
    }
}
