import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: '[appUnless]'})
export class UnlessDirective {
  private hasView = false; //用來追蹤「目前這段 template 是否已經被插入畫面中」

  constructor(
    private templateRef: TemplateRef<any>, // 掛在 *appUnless 上的那段 template
    private viewContainer: ViewContainerRef) { } //Angular 可以用它 .createEmbeddedView() 插入 template，或 .clear() 把它從 DOM 拿掉

  @Input() set appUnless(condition: boolean) { //這是一個 setter。每當畫面上改變 (也就是condition的值改變時) 就會觸發這個函式
    if (!condition && !this.hasView) {
      // 如果 condition 是 false，且目前畫面上還沒顯示這段 template：
      this.viewContainer.createEmbeddedView(this.templateRef);
      // 則插入 template（顯示這段 HTML）
      this.hasView = true;
    } else if (condition && this.hasView) {
      // 如果 condition 是 true，且目前畫面上有這段 template
      this.viewContainer.clear();
      // 則移除 template（從畫面上刪除該段 HTML）
      this.hasView = false;
    }
  }
}