"use strict";
exports.__esModule = true;
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(mount) {
    var tallest = mountains[0];
    mount.forEach(function (m) {
        if (m.height > tallest.height) {
            tallest = m;
        }
    });
    return tallest.name;
}
var mName = findNameOfTallestMountain(mountains);
console.log(mName);
var products = [
    {
        name: "Burger",
        price: 5
    },
    {
        name: "Fries",
        price: 3
    },
    {
        name: "Soda",
        price: 1
    }
];
function calcAverageProductPrice(items) {
    var total = 0;
    items.forEach(function (p) {
        total += p.price;
    });
    total = total / items.length;
    return total;
}
var average = calcAverageProductPrice(products);
console.log(average);
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];
function calcInventoryValue(stock) {
    var total = 0;
    stock.forEach(function (s) {
        total += s.product.price * s.quantity;
    });
    return total;
}
var stockValue = calcInventoryValue(inventory);
console.log(stockValue);
