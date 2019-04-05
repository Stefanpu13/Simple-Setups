var toClosestEvenInteger = n => Math.round(n / 2) * 2;

let toggleCase = (str) => {
    return str === str.toUpperCase() ?
        str.toLowerCase() :
        str.toLocaleUpperCase();
};

export { toClosestEvenInteger, toggleCase };