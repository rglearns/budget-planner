import { Component, OnInit } from '@angular/core';
import { Expenses } from '../expenses.model';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  title: string;
  reasonText: string;
  amountText: string;
  clearText: string;
  addText: string;
  enteredReason: string;
  enteredAmount: number;

  expenses: Expenses[] = [];

  constructor() {}
  ngOnInit() {
    this.title = 'Budget Planner';
    this.reasonText = 'Enter expense';
    this.amountText = 'Enter Amount';
    this.clearText = 'Clear';
    this.addText = 'Add';
  }
  clear() {
    this.enteredAmount = null;
    this.enteredReason = '';
  }
  saveExpense() {
    if (this.enteredAmount && this.enteredReason && this.enteredAmount > 0) {
    const expense = new Expenses(this.enteredReason, this.enteredAmount);
    this.expenses.push(expense);
    } else {
      alertController.create({
        message: 'Please Enter Valid Reason and amount',
        header: 'Error',
        buttons:[{
          role: 'cancel',
          text: 'OK'
        }]
      }).then(alert => {
        alert.present();
      });
    }
  }

}
