import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../Investment.Model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private investmentService: InvestmentService){}
  ngOnInit(): void {
    this.investmentData = {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0
    };
  }

  investmentData!: InvestmentData;

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.investmentData.initialInvestment,
      duration: +this.investmentData.duration,
      annualInvestment: +this.investmentData.annualInvestment,
      expectedReturn: +this.investmentData.expectedReturn
    });
  }
}
