import { Component } from '@angular/core';

@Component({
  selector: 'power-boost-calculator',
  template: `
    <h2>Power Boost Calculator</h2>
    <div>Normal power: <input [(ngModel)]="power"></div>
    <div>Boost factor: <input [(ngModel)]="factor"></div>
    <p>
      Super Hero Power: {{power | exponentialStrengthPipe: factor}}
    </p>
    `,  
  styleUrl: './app-power-boost-calculator.component.scss'
  })
export class AppPowerBoostCalculatorComponent {
  power = 5;
  factor = 1;
}
