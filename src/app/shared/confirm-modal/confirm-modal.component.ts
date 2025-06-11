// src/app/shared/confirm-modal/confirm-modal.component.ts (概念程式碼)
import { Component, Inject } from '@angular/core';
// 如果您使用 Angular Material 或其他 UI 庫，這裡的導入會有所不同
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: `./confirm-modal.component.html`,
  styleUrls: [`./confirm-modal.component.scss`]
})
export class ConfirmModalComponent {
  // constructor(
  //   @Inject(MAT_DIALOG_DATA) public data: { message: string },
  //   public dialogRef: MatDialogRef<ConfirmModalComponent>
  // ) {}

  // 為了沒有 Material 的情況，這裡只做概念性處理
  data: { message: string } = { message: '您有未儲存的內容，確定要離開嗎？' }; // 假定訊息

  onConfirm(result: boolean): void {
    // 實際應用中，這裡會關閉模態視窗並回傳結果
    // 例如：this.dialogRef.close(result);
    console.log('Modal Result:', result);
    // 在沒有真實模態視窗系統下，這不會實際關閉 UI
  }
}