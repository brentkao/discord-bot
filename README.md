# Discord Bot

這是一個基於 TypeScript + ESM 的 Discord Bot 起始專案，整合 Discord.js v14、MongoDB（Mongoose）、ESLint、Prettier，並使用 `ts-node` 開發方式。

專案特性：

- ✅ 使用 TypeScript 編寫（支援型別與模組化）
- ✅ 使用 ESModule 模式（符合 Node 現代規範）
- ✅ ts-node + nodemon 即時開發，不需預先編譯
- ✅ 整合 MongoDB 儲存資料（Mongoose ORM）
- ✅ 使用 ESLint + Prettier 統一格式與檢查
- ✅ 支援 `.env` 管理私密設定，並使用 Zod 驗證

---

## 🚀 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 設定環境變數

請複製 `.env.example` 為 `.env`，並填寫必要的設定：

```bash
cp .env.example .env
```

`.env` 檔內容如下：

```env
DISCORD_TOKEN=your-discord-bot-token
MONGO_URI=your-mongodb-uri
DISCORD_CLIENT_BOT_ID=...
DISCORD_PUBLIC_KEY=...
DISCORD_GUILD_ID=...
GOOGLE_CALENDAR_ID=...
PORT=3000
```

所有欄位會在啟動時由 `Zod` 驗證。

---

## 📦 NPM 指令介紹

| 指令                | 說明                                                                  |
| ------------------- | --------------------------------------------------------------------- |
| `npm run dev`       | 持續編譯 TypeScript 並由 `nodemon` 監控執行編譯後的程式，實現即時開發 |
| `npm run build`     | 編譯 TypeScript 到 `dist/`                                            |
| `npm start`         | 執行編譯後的 `dist/index.js`                                          |
| `npm run lint`      | 執行 ESLint 檢查                                                      |
| `npm run lint:fix`  | 自動修復可解決的 ESLint 問題                                          |
| `npm run format`    | 使用 Prettier 格式化整個專案                                          |
| `npm run precommit` | 格式化 + 修復（通常用於 Git hook）                                    |

---

## 📁 專案結構說明

```
src/
├── index.ts                  # 主程式入口，啟動 Discord bot 與 MongoDB
├── env.ts                    # 使用 Zod 驗證的環境變數模組
├── services/                 # 業務邏輯模組（資料庫、處理流程）
├── events/                   # Discord 事件處理模組（如 ready, message, interaction）
├── commands/                 # Slash 指令模組（未來支援 / 指令）
├── types/                    # 自定義型別
├── utils/                    # 小工具與輔助方法
.env.example                  # 環境變數樣板
```

---

## 📌 技術棧版本

| 套件                 | 說明                 |
| -------------------- | -------------------- |
| `Node.js`            | v18+ 建議            |
| `TypeScript`         | 開發語言             |
| `Discord.js`         | Discord Bot SDK      |
| `ts-node`            | 即時執行 TS          |
| `nodemon`            | 檔案異動自動重啟     |
| `mongoose`           | MongoDB ODM          |
| `zod`                | schema 驗證環境變數  |
| `eslint`, `prettier` | 程式碼風格檢查與修正 |

---
