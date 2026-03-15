日本語 | [English](https://github.com/Sunny-JP/r1c-MyLoot/blob/main/readme_en.md)
# MyLoot

イベント会場のマップPDFを見ながら購入リストを管理できる、オフライン対応のWebアプリケーションです。  
**[アプリを開く](https://myloot.rabbit1.cc/)**

## 概要

同人誌即売会で、サークルの配置図（PDF）と購入予定リストをひとつの画面で管理・確認するためのツールです。電波の悪いイベント会場でも快適に動作するよう、PWA（Progressive Web App）として完全オフラインでの利用に対応しています。

「Route（効率よく回るための道順）」と「Loot（戦利品）」を管理するという意味を込めて名付けられました。

## 主な機能

* **マップPDFとの分割表示**
  * アップロードした配置図PDFとリストを左右（または上下）に分割して表示。
  * PDFはピンチイン・ピンチアウト、ダブルタップでの拡大縮小に対応。
* **高機能な購入リスト**
  * サークル名、配置スペース、Webリンク、お品書き画像、アイテム（価格・部数）の登録。
  * 上下ボタンでの並び替え、複数選択による一括削除。
* **明細書とシェア画像の生成**
  * 購入済み・未購入アイテムの合計金額を自動計算。
  * 購入したアイテムの一覧をレシート風の画像として生成・保存（SNSシェアに最適）。
* **プライバシーファースト＆データ移行**
  * データはすべてブラウザ内（IndexedDB）に保存され、外部サーバーへの送信は一切ありません。
  * JSON形式でのデータのエクスポート/インポートによるバックアップ・端末間連携に対応。
* **カスタマイズ**
  * ライト/ダーク/システムテーマへの追従。
  * 9種類のアクセントカラー（Theme Color）から選択可能。
* **多言語対応**
  * 日本語、英語、韓国語、簡体中文に対応。

## 技術スタック

* **Frontend Framework**: [Alpine.js](https://alpinejs.dev/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Language**: TypeScript, HTML, CSS
* **Database**: [Dexie.js](https://dexie.org/) (IndexedDB wrapper)
* **PDF Rendering**: [PDF.js](https://mozilla.github.io/pdf.js/)
* **PWA**: `vite-plugin-pwa`

## 開発環境の構築
```bash
# リポジトリのクローン
git clone [https://github.com/Sunny-JP/r1c-MyLoot.git](https://github.com/Sunny-JP/r1c-MyLoot.git)
cd r1c-MyLoot

# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build
```

## 免責事項
本サービスは個人によって制作された非公式ツールであり、イベント主催者およびいかなる団体とも一切関係ありません。本アプリの利用により生じた損害（データの消失など）について、開発者は一切の責任を負いません。

## コントリビューション
不具合の報告、機能追加の要望などはIssueにて受け付けています。Pull Requestも歓迎します。

<hr>
Developed by Sunny