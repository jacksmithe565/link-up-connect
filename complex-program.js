/*
   filename: complex-program.js

   This code is a complex program that simulates a virtual trading platform with various features such as user authentication, portfolio management, and transaction history. It showcases advanced concepts like object-oriented programming, asynchronous operations, and data manipulation.

   The code provided below is a simplified version for demonstration purposes only. In a real-world scenario, additional error handling, input validation, and security measures should be implemented.

*/

// Constants
const API_URL = 'https://api.example.com'; // Replace with actual API URL

// Utility Functions
function formatDate(date) {
   // Format date into 'yyyy-mm-dd' format
   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2, '0');
   const day = String(date.getDate()).padStart(2, '0');
   return `${year}-${month}-${day}`;
}

// Classes
class User {
   constructor(username, password) {
      this.username = username;
      this.password = password;
      this.portfolio = new Portfolio();
   }

   async authenticate() {
      // Simulate asynchronous authentication request
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            if (this.username === 'admin' && this.password === 'password') {
               resolve(true);
            } else {
               reject(new Error('Invalid credentials'));
            }
         }, 1000);
      });
   }
}

class Portfolio {
   constructor() {
      this.balance = 10000;
      this.stocks = [];
   }

   async buyStock(stockSymbol, quantity) {
      // Simulate stock purchase request
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            // Make API request to fetch stock price
            fetch(`${API_URL}/stocks/${stockSymbol}`)
               .then(response => response.json())
               .then(stockData => {
                  const totalPrice = stockData.price * quantity;
                  if (totalPrice <= this.balance) {
                     this.balance -= totalPrice;
                     this.stocks.push({
                        symbol: stockSymbol,
                        quantity: quantity,
                        price: stockData.price,
                     });
                     resolve(true);
                  } else {
                     reject(new Error('Insufficient funds'));
                  }
               })
               .catch(error => {
                  reject(error);
               });
         }, 1500);
      });
   }

   async sellStock(index, quantity) {
      // Simulate stock sale request
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            if (index >= 0 && index < this.stocks.length) {
               const stock = this.stocks[index];
               if (quantity > stock.quantity) {
                  reject(new Error('Not enough stocks to sell'));
               } else {
                  // Make API request to fetch stock price
                  fetch(`${API_URL}/stocks/${stock.symbol}`)
                     .then(response => response.json())
                     .then(stockData => {
                        const totalPrice = stockData.price * quantity;
                        this.balance += totalPrice;
                        if (quantity === stock.quantity) {
                           this.stocks.splice(index, 1);
                        } else {
                           stock.quantity -= quantity;
                        }
                        resolve(true);
                     });
               }
            } else {
               reject(new Error('Invalid stock index'));
            }
         }, 1000);
      });
   }
}

// Main Program
(async function () {
   try {
      const user = new User('admin', 'password');
      await user.authenticate();
      console.log('User authenticated successfully');

      await user.portfolio.buyStock('AAPL', 10);
      console.log('Stock purchased successfully');

      await user.portfolio.sellStock(0, 5);
      console.log('Stock sold successfully');

      console.log('Current Portfolio:');
      user.portfolio.stocks.forEach((stock, index) => {
         console.log(`[${index}] ${stock.symbol}: ${stock.quantity}`);
      });

      console.log('Final Balance:', user.portfolio.balance);
   } catch (error) {
      console.error('Error:', error.message);
   }
})();