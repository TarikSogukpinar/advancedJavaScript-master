//rest
//params
//varArgs
let showProducts = function name(id, ...products) {
    console.log(id)
    console.log(products[0]);
}

//console.log(typeof showProducts());
//showProducts(10, ["Elma", "Armut", "Karpuz"]);

//spread
let points = [1, 2, 3, 4, 5, 6, 60, 14]
console.log(...points);
console.log(Math.max(...points));
console.log(...
    "ABC", "D", ...
    "EFG", "H");