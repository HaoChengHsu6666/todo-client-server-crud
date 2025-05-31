import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPowerBoostCalculatorComponent } from './app-power-boost-calculator/app-power-boost-calculator.component';
import { ExponentialStrengthPipePipe } from './exponential-strength-pipe.pipe';
import { UnlessDirective } from './unless.directive';
import { HighlightDirective } from './highlight.directive';
import { MessageBoardComponent } from './message-board/message-board.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPowerBoostCalculatorComponent,
    ExponentialStrengthPipePipe,
    UnlessDirective,
    HighlightDirective,
    MessageBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
