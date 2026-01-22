# Implementation Plan - Backup & Restore

## Phase 1: UI Implementation [checkpoint: b12adde]
- [x] Task: 新增備份控制按鈕的 HTML 結構 717d3fc
    - [ ] 在 `index.html` 中新增兩個 `<button>`，套用 `.control-btn` 類別。
    - [ ] 分別賦予 ID 如 `#exportBtn` 與 `#importBtn`。
    - [ ] 新增隱藏的 `<input type="file" id="importInput">` 用於處理檔案上傳。
- [x] Task: 設定按鈕位置與樣式 dd4c2d8
    - [ ] 在 `index.html` 的 `<style>` 區塊中設定 `#exportBtn` 與 `#importBtn` 的位置（例如位於 `#refreshBtn` 下方，垂直排列）。
    - [ ] 尋找並套用適合的備份/還原圖示網址。

## Phase 2: Export Functionality [checkpoint: 40bc8a1]
- [x] Task: 實作匯出邏輯 97415dd
- [x] Task: 測試匯出功能 97415dd
    - [ ] 驗證下載的檔案內容是否包含正確的收藏資料。

## Phase 3: Import Functionality [checkpoint: 6269401]
- [x] Task: 實作匯入邏輯 40402ba
- [x] Task: 測試匯入功能 40402ba

## Phase 4: Integration & Polish
- [ ] Task: 優化使用者體驗
    - [ ] 新增匯入前的確認對話框 (Confirm Dialog)。
    - [ ] 新增操作成功或失敗的提示訊息 (Alert)。
- [ ] Task: Conductor - User Manual Verification 'Integration & Polish' (Protocol in workflow.md)
