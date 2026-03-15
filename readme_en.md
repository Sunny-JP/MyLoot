[日本語](https://github.com/Sunny-JP/r1c-MyLoot/blob/main/readme.md) | English
# MyLoot

An offline-capable web application that allows you to manage your shopping list while viewing event map PDFs.  
**[Open App](https://myloot.rabbit1.cc/)**

## Overview

MyLoot is a tool designed for doujinshi conventions to help you manage circle maps (PDF) and your shopping list on a single screen. Built as a PWA (Progressive Web App), it works completely offline, ensuring a smooth experience even in event venues with poor network reception.

The name "MyLoot" reflects its core purpose: helping you manage your "Route" (the most efficient path to navigate the event) and your "Loot" (the items you acquire).

## Key Features

* **Split View with Map PDF**
  * Displays the uploaded map PDF and your list side-by-side (or top-and-bottom on mobile).
  * Supports pinch-to-zoom and double-tap to zoom for easy map navigation.
* **Advanced Shopping List**
  * Register circle names, booth spaces, web links, menu images, and items (price and quantity).
  * Reorder items easily using up/down buttons and bulk-delete items via multi-select.
* **Summary & Share Image Generation**
  * Automatically calculates total costs for purchased and unpurchased items.
  * Generates a receipt-style image of your purchased items to save or share (perfect for social media).
* **Privacy-First & Data Migration**
  * All data is stored locally in your browser (IndexedDB). No data is ever sent to external servers.
  * Supports JSON export/import for easy backups and transferring data between devices.
* **Customization**
  * Supports Light, Dark, and System theme preferences.
  * Choose from 9 different accent colors (Theme Color) to personalize your app.
* **Multilingual Support**
  * Available in Japanese, English, Korean, and Simplified Chinese.

## Tech Stack

* **Frontend Framework**: [Alpine.js](https://alpinejs.dev/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Language**: TypeScript, HTML, CSS
* **Database**: [Dexie.js](https://dexie.org/) (IndexedDB wrapper)
* **PDF Rendering**: [PDF.js](https://mozilla.github.io/pdf.js/)
* **PWA**: `vite-plugin-pwa`

## Development Setup

```bash
# Clone the repository
git clone [https://github.com/Sunny-JP/r1c-MyLoot.git](https://github.com/Sunny-JP/r1c-MyLoot.git)
cd r1c-MyLoot

# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build
```

## Disclaimer
This service is an unofficial tool created by an individual and is not affiliated with any event organizers or organizations. The developer assumes no responsibility for any damages (such as data loss) resulting from the use of this application.

## Contributing
Bug reports and feature requests are welcome via Issues. Pull Requests are also highly appreciated.

<hr>
Developed by Sunny