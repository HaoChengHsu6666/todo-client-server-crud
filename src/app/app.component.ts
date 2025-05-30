import { Component } from '@angular/core';
import { stationList } from './station-list-const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:'',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-client-server-crud';
  list = stationList;
  // isVisible = true; // show選擇1
  condition = true; // show選擇2
}
