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

// Created a groupedTransactions variable and select the object variable then using an reduce
// method to select the each object with the arguments of a & b -- in this case
// b is directly contacted with the transactions and access their keys
// secondly created a key variable and select the transaction category for using the
// b the check the condition if the opposite of the a[key] then returns only an
// empty array or else push a b of category into the a[key] finally returns a

const groupedTransactions = transactions.reduce((a, b) => {
  const key = b.category;

  if (!a[key]) {
    a[key] = [];
  }

  a[key].push(b);
  return a;
}, {});

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
