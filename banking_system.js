class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    setTimeout(() => {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Menyetor: $${amount}. Saldo saat ini: $${this.balance}`);
      } else {
        console.log("Terdapat kesalahan");
      }
    }, 3000);
  }

  withdraw(amount) {
    setTimeout(() => {
      if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Menarik: $${amount}. Saldo saat ini: $${this.balance}`);
      } else {
        console.log("Terdapat kesalahan atau Saldo tidak mencukupi");
      }
    }, 3000);
  }
}

const account = new BankAccount(1000);
account.deposit(1000);
account.withdraw(300);
