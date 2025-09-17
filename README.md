# Electron 学習リポジトリ

このリポジトリは、Electronの学習用サンプルです。  

---

## 📦 セットアップ

1. リポジトリをクローン
```bash
git clone https://github.com/iwasakiterukazuimpl/electron-lesson.git

cd リポジトリ名
```

2. 依存関係をインストール
```bash
npm install
```

3. アプリを起動
```bash
npm start
```

---

## 🚀 実装内容

### ステップ1: 基本画面
- 名前入力欄とボタンを作成
- 入力した名前を画面に表示

### ステップ2: IPC通信
- Renderer から Main にデータを送信
- Main 側でメッセージを生成
- Renderer 側に返却して画面に表示

---

## 📂 ディレクトリ構成

```bash
project-root/
├── package.json
├── package-lock.json
├── main.js
├── preload.js
└── index.html
```
