# Product Definition

# Initial Concept
JIWU寶寶圖鑑

## Target Audience
- 吉伊卡哇 (Chiikawa) 的收藏愛好者。

## Core Vision
- 提供一個直觀、可愛且易於使用的吉伊卡哇收藏清單。

## Key Features
- **多角色分類分頁瀏覽**：依據吉伊、小八、兔兔等角色進行分頁展示。
- **收藏狀態追蹤**：點擊卡片即可標記為已收藏，狀態自動儲存於 LocalStorage。
- **即時資料同步**：透過 Google Sheets API 獲取最新的角色與周邊資料。
- **進度可視化**：自動計算並顯示各類別的收藏完成度（百分比環形圖）。
- **資料備份與還原**：支援將收藏進度匯出為備份檔案，並可隨時匯入恢復資料。

## Development Priorities
- 實作資料匯出與匯入功能，讓使用者能備份本地的收藏紀錄。
