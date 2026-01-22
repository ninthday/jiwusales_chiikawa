# Specification: 收藏進度匯出與匯入功能

## Goal
實作一個簡單的機制，允許使用者將目前儲存在 LocalStorage 中的收藏進度匯出為 JSON 檔案，並能上傳該檔案以恢復收藏狀態。這將確保使用者在更換裝置或清除瀏覽器資料時不會遺失進度。

## User Stories
- 作為使用者，我想要點擊「匯出備份」按鈕，下載包含所有收藏紀錄的 JSON 檔案。
- 作為使用者，我想要點擊「匯入備份」按鈕，選擇之前的備份檔案並還原我的收藏進度。
- 作為使用者，我在匯入成功後希望能看到提示，並自動重新整理頁面以顯示還原後的狀態。

## Functional Requirements
1. **匯出功能**：
   - 讀取 LocalStorage 中所有以 `collectedDolls_` 開頭的 key。
   - 將這些資料打包成一個 JSON 物件。
   - 觸發瀏覽器下載行為，檔案名稱格式建議為 `jiwu_collection_backup_YYYYMMDD.json`。
2. **匯入功能**：
   - 提供檔案選擇器 (File Input) 讓使用者上傳 JSON 檔案。
   - 解析上傳的 JSON 檔案，驗證格式是否正確。
   - 將解析後的資料寫回 LocalStorage，覆蓋舊有資料或合併（依據需求，此處採用覆蓋策略以確保一致性，但在覆蓋前應提示使用者）。
   - 匯入完成後顯示成功訊息並重新整理頁面。
3. **UI 調整**：
   - 在頁面右側新增「匯出備份」與「匯入備份」的懸浮按鈕，位置鄰近現有的「重新整理」按鈕。
   - 按鈕樣式必須與現有的 `.control-btn` 完全一致（圓形、半透明背景、固定位置）。
   - 需為這兩個新按鈕挑選適合的圖示 (Icon)。

## Technical Constraints
- 必須使用純 JavaScript (Vanilla JS) 實作，不引入額外函式庫。
- 需相容於主流瀏覽器（Chrome, Safari, Firefox, Edge）。
- 匯入時需處理 JSON 解析錯誤的異常狀況。
