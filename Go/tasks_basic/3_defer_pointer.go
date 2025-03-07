package main

import "fmt"

type Account struct {
	Balance int
}

func main() {
	initialBalance := 1000
	account := &Account{Balance: initialBalance}

	defer printBalance("Start balance ", account.Balance)
	defer printBalance("Current balance ", account.Balance)
	defer printAccountBalance("Pointer to balance ", account) // on moment registering defer we put copy on current pointer

	account.Balance += 500
	updateBalance(account, 200)
	account = &Account{Balance: 300}

}

func updateBalance(acc *Account, amount int) {
	acc.Balance -= amount
}

func printBalance(label string, balance int) {
	fmt.Printf("%s: %d\n", label, balance)
}

func printAccountBalance(label string, acc *Account) {
	fmt.Printf("%s: %d\n", label, acc.Balance)
}

// "pointer to balance " 300
// current balance 300
// 300
