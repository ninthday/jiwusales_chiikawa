# Implementation Plan - Backup & Restore

## Phase 1: UI Implementation
- [ ] Task: 新增備份控制區域的 HTML 結構
    - [ ] 在 `index.html` 底部或適當位置新增包含「匯出」與「匯入」按鈕的容器。
    - [ ] 新增隱藏的 `<input type="file">` 用於處理檔案上傳。
- [ ] Task: 設定備份控制區域的樣式
    - [ ] 在 `index.html` 的 `<style>` 區塊中新增按鈕樣式，確保與現有 UI (`.control-btn` 或 `.bottom-bar`) 風格一致。

## Phase 2: Export Functionality
- [ ] Task: 實作匯出邏輯
    - [ ] 撰寫 `exportData()` 函式：遍歷 LocalStorage 收集 `collectedDolls_` 資料。
    - [ ] 產生 JSON Blob 並建立下載連結。
    - [ ] 綁定「匯出」按鈕事件。
- [ ] Task: 測試匯出功能
    - [ ] 驗證下載的檔案內容是否包含正確的收藏資料。

## Phase 3: Import Functionality
- [ ] Task: 實作匯入邏輯
    - [ ] 撰寫 `importData(file)` 函式：讀取檔案內容並解析 JSON。
    - [ ] 實作資料驗證：確保 JSON 結構符合預期。
    - [ ] 實作寫入邏輯：將資料存回 LocalStorage。
    - [ ] 綁定「匯入」按鈕與檔案選擇器事件。
- [ ] Task: 測試匯入功能
    - [ ] 驗證匯入有效檔案後，頁面是否正確更新收藏狀態。
    - [ ] 驗證匯入無效檔案時是否顯示錯誤提示。

## Phase 4: Integration & Polish
- [ ] Task: 優化使用者體驗
    - [ ] 新增匯入前的確認對話框 (Confirm Dialog)。
    - [ ] 新增操作成功或失敗的提示訊息 (Alert)。
- [ ] Task: Conductor - User Manual Verification 'Integration & Polish' (Protocol in workflow.md)
