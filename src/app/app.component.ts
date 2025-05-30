import { Component } from '@angular/core';
import { stationList } from './station-list-const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-client-server-crud';
  list = stationList;
}
