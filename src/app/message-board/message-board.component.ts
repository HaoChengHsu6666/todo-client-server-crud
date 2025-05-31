import { Component } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrl: './message-board.component.scss'
})
export class MessageBoardComponent {
  /**
   * 綁定畫面中的「名稱」欄位
   *
   * @memberof MessageBoardComponent
   */
  name = '';

  /**
   * 綁定畫面中的「內容」欄位
   *
   * @memberof MessageBoardComponent
   */
  content = '';

  /**
   * 所有留言都放在這裡
   *
   * @type {Message[]}
   * @memberof MessageBoardComponent
   */
  messages: Message[] = [];

  /**
   * 新增留言
   *
   * @memberof AppComponent
   */
  addMessage(): void{
     
  // 防呆，避免名稱或內容是空值時也可以留言
    if(
      !this.name.trim() ||
      !this.content.trim()
    ){
      return;
    }

  // 用名稱跟內容產生一個留言的資料物件
    const message = new Message(this.name, this.content);

  // 將留言的資料物件放進容器裡
    this.messages.push(message);

  // 清空內容
    this.name= '';
    this.content = '';
  }
}
