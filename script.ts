export {}

//Tallest Mountain
interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
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

function findNameOfTallestMountain(mount: Mountain[]): string{
    let tallest: Mountain = mountains[0];
    
    mount.forEach((m: Mountain) => {
        if(m.height > tallest.height){
            tallest = m;
        }
    });

    return tallest.name;
}

let mName: string = findNameOfTallestMountain(mountains);
console.log(mName);


//Products
interface Product {
    name: string;
    price: number;
}

let products: Product[] = [
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

function calcAverageProductPrice(items: Product[]): number{
    let total: number = 0;

    items.forEach((p: Product) => {
        total += p.price;
    });

    total = total / items.length;

    return total;
}

let average: number = calcAverageProductPrice(products);
console.log(average);


//Inventory
interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
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

function calcInventoryValue(stock: InventoryItem[]): number{
    let total: number = 0;

    stock.forEach((s: InventoryItem) => {
        total += s.product.price * s.quantity
    });

    return total;
}

let stockValue: number = calcInventoryValue(inventory);
console.log(stockValue);