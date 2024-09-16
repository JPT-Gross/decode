export function funcTen(value){

    if (value < 0) {
    return (Math.abs(value) + 100);
    }

    else if (value < 100) {
        return ( 100 - (Math.abs(value)));
    }

    else {
        let nearestHundred = Math.round(value / 100) * 100;
        return (nearestHundred - value);
}
}
