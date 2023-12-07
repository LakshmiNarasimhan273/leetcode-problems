// ARRAY OF OBJECTS

// GROUPING AN ARRAY OF OBJECT
const transactions = [
  { id: 1, name: "Dals", amount: 120, category: "Groceries", rating: 82 },
  {
    id: 2,
    name: " Fan Switch ",
    amount: 50,
    category: "Electronics",
    rating: 96,
  },
  { id: 3, name: "Vegetables", amount: 30, category: "Groceries", rating: 53 },
  {
    id: 4,
    name: "Men's T-Shirts",
    amount: 80,
    category: "Clothing",
    rating: 62,
  },
  {
    id: 5,
    name: "Motor Regulator",
    amount: 100,
    category: "Electronics",
    rating: 99,
  },
];

// Create a Function to group the array of object with the parameters of
// arr that hold the transactions as a parameter value then using the reduce
// method to take the each of the objects with in that the inner function holds
// the acc (accumulator) & transaction the two parameters then split the category
// and extract from our object then define the category into the acc or else it returns
// the empty array finally push the acc[category] into the transactions and returns the acc
function groupTransactionsByCategory(arr) {
  return arr.reduce((acc, transaction) => {
    const category = transaction.category;
    acc[category] = acc[category] || [];
    acc[category].push(transaction);
    return acc;
  }, {});
}

// create an variable and call back the funciton with in the function parameter
// pass the original object into it
const groupedTransactions = groupTransactionsByCategory(transactions);

// Console it : )
console.log("Grouped Transactions:", groupedTransactions);

// Grouped Transactions: {
//     Groceries: [
//       {
//         id: 1,
//         name: 'Dals',
//         amount: 120,
//         category: 'Groceries',
//         rating: 82
//       },
//       {
//         id: 3,
//         name: 'Vegetables',
//         amount: 30,
//         category: 'Groceries',
//         rating: 53
//       }
//     ],
//     Electronics: [
//       {
//         id: 2,
//         name: ' Fan Switch ',
//         amount: 50,
//         category: 'Electronics',
//         rating: 96
//       },
//       {
//         id: 5,
//         name: 'Motor Regulator',
//         amount: 100,
//         category: 'Electronics',
//         rating: 99
//       }
//     ],
//     Clothing: [
//       {
//         id: 4,
//         name: "Men's T-Shirts",
//         amount: 80,
//         category: 'Clothing',
//         rating: 62
//       }
//     ]
//   }
