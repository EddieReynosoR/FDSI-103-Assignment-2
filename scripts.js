let ProductName, ProductPrice, ProductQty;

ProductName = prompt("Welcome!!! Please enter the name of your product: ");

ProductPrice = prompt("Now, enter the price of the product: ");

ProductQty = prompt("Finally, indicate the quantity of the product: ");

let TotalPrice = ProductPrice*ProductQty;
let taxPrice = TotalPrice * 0.10;
let Total = TotalPrice + taxPrice;

console.log("Subtotal: " + (TotalPrice));

console.log("Final Price with IVA 10%: " + (Total));



document.write(`
    <h1> Receipt </h1>
    <p> <b>Product name: </b> ${ProductName} </p>
    <p> <b>Product price: </b> ${ProductPrice} </p>
    <p> <b>Quantity: </b> ${ProductQty} </p>
    <p> <b>Total price: </b> ${TotalPrice} </p>
    <p> <b>Tax (10%): </b> ${taxPrice} </p>
    <p> <b>Total: </b> ${Total};
    `);