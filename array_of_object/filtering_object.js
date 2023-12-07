// ARRAY OF OBJECT

// FILTERING AN ARRAY OF OBJECT
const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Headphones", price: 100, category: "Electronics" },
  { name: "Backpack", price: 50, category: "Fashion" },
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Watch", price: 200, category: "Fashion" },
];

console.log("Original Object", products);
// Original Object [
//     { name: 'Laptop', price: 1200, category: 'Electronics' },
//     { name: 'Headphones', price: 100, category: 'Electronics' },
//     { name: 'Backpack', price: 50, category: 'Fashion' },
//     { name: 'Smartphone', price: 800, category: 'Electronics' },
//     { name: 'Watch', price: 200, category: 'Fashion' }
//   ]

// Create an function with the parameters of arr & customPrice the arr is
// for carrying an our array of object and the customPrice is the name we
// provide some amount of value because we filter the object based on the
// price greater or lower then in the inner function of filter function
// the a.price (this is the actual price present in the object) and then
// using an lesser than or equal to operator to filter the amount based on our
// custom amount

function filter_funciton(arr, customPrice) {
  return arr.filter((a) => a.price <= customPrice);
}

// create an variable and callback the filter_funciton and passing the parameters
// products (the actual object) it replaces the arr
// and finally the 200 is the customPrice the filter function and the lesser than
// operator using the 200 as the filtering value
const object_passing = filter_funciton(products, 200);

// Console it : )
console.log("Filtered products", object_passing);
// Filtered products [
//     { name: 'Headphones', price: 100, category: 'Electronics' },
//     { name: 'Backpack', price: 50, category: 'Fashion' },
//     { name: 'Watch', price: 200, category: 'Fashion' }
//   ]
