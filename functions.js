// bank account

// Task 1: Create a function to handle deposits into a bank account.
let balance = 0;

function deposit(amount){
  balance += amount;
    console.log(`Deposited: $${amount}. New balance: $${balance}`);
} 

// Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.

function withdrawl(amount){
    if (amount <= balance){
        balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${balance}`);
    }
    else{
        console.log('Insufficent funds.');
    }
}

// Task 3: Develop a function to check the current balance of the account.

function checkBalance(){
    console.log(`Current balance: $${balance}`);
}

deposit(150);
withdrawl(50);
checkBalance();