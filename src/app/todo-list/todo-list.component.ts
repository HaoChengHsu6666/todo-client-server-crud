import { Component } from '@angular/core';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  
 constructor(private todoListService: TodoListService) { }

  ngOnInit() {}

 /**
 * 新增代辦事項
 *
 * @param {string} value - 輸入框內容文字
 * @memberof TodoListComponent
 */
addTodo(value: string): void {
  const todo = value.trim();

  if (todo) {
    this.todoListService.add(todo);
  }
}

  /**
   * 取得待辦事項清單
   *
   * @returns {string[]}
   * @memberof TodoListComponent
   */
  getList(): string[] {
    return this.todoListService.getList();
  }

}
