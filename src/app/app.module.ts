import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TodoListModule } from './todo-list/todo-list.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppPowerBoostCalculatorComponent } from './app-power-boost-calculator/app-power-boost-calculator.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

import { UnlessDirective } from './unless.directive';
import { HighlightDirective } from './highlight.directive';

import { ExponentialStrengthPipePipe } from './exponential-strength-pipe.pipe';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    AppPowerBoostCalculatorComponent,
    ExponentialStrengthPipePipe,
    UnlessDirective,
    HighlightDirective,
    MessageBoardComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    LayoutComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TodoListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
