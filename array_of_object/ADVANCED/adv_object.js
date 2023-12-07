// ARRAY OF OBJECT

// THESE PROGRAM TAKES THE SORTING, FILTERING & GROUPING AN ARRAY OF OBJECT
// WITH AN REAL TIME EXAMPLE OF THE PAYMENT HISTROY

const payment_history = [
  {
    id: 1,
    merchant_name: "AAA - company",
    amount: 5000,
    payment_for: "Buying Clothes",
    category: "UPI",
    date: new Date("2023-11-30, 4:31:36"),
  },
  {
    id: 2,
    merchant_name: "BBB - company",
    amount: 3553,
    payment_for: "Buying Electronics",
    category: "Net Banking",
    date: new Date("2023-10-23, 12:43:56"),
  },
  {
    id: 3,
    merchant_name: "CCC - company",
    amount: 10735,
    payment_for: "Buying Accessories",
    category: "Net Banking",
    date: new Date("2023-12-03,1:12:23"),
  },
];

// Sorting

function sorting(arr) {
  return arr.sort((a, b) => b.date - a.date);
}

const sorted = sorting(payment_history);
console.log("Sorting based on the recent payment based on the date");
console.log(sorted);
// ------------------------------------------
// Filtering

function filtering(arr, filtering_amount) {
  return arr.filter((a) => a.amount >= filtering_amount);
}

const filtered = filtering(payment_history, 5000);
console.log("Filtering based on the amount that higher and equal to 5K");
console.log(filtered);
// ------------------------------------------
// Grouping

function grouping(arr) {
  return arr.reduce((acc, payment_category) => {
    const category = payment_category.category;
    acc[category] = acc[category] || [];
    acc[category].push(payment_category);
    return acc;
  }, {});
}

const grouped = grouping(payment_history);
console.log("Grouped based on the Payment Categories", grouped);
// ------------------------------------------
