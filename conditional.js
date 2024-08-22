// cart

// Task 1: Implement a conditional statement to check if a user is logged in before 
// allowing them to add items to the cart.
let isLoggedin= true;

if (isLoggedin) {
    console.log("You are logged in! Add items to your cart");
}
else {
    console.log("Please log in first.");
}


// Task 2: Use a loop to display the list of available products to the user and 
// add functionality for users to add products to their cart.

const products = [
    {id: 1, name: "Apple", price: 1.29},
    {id: 2, name: "Pineapple", price: 3.99},
    {id: 3, name: "Milk", price: 2.99}
];

console.log("Available Products: ");
products.forEach(product => {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
});

let shoppingCart = [];

function addCart(productid) {
    if (isLoggedin) {
        const product = products.find(p => p.id === productid);
        if (product){
            shoppingCart.push(product);
            console.log(`${product.name} has been added to your cart.`);
        } else{
            console.log("Product not found. Enter the correct product.");
        } 
    } else {
            console.log("Login to add products to your cart.");
        }
}

addCart(2)
addCart(3)

// Task 3: Calculate the total cost of the items in the cart and display it to the user.

function calculateTotal() {
    let total = shoppingCart.reduce((sum, product) => sum + product.price, 0);
    console.log("Total cost of your cart: $" + total)
}

calculateTotal()