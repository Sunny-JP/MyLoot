import Dexie, { type Table } from 'dexie';

export interface Item {
  name: string;
  price: number;
  quantity: number;
  isChecked: boolean;
}

export interface Circle {
  uuid: string;
  eventId: number;
  name: string;
  space: string;
  genre?: string;
  link?: string;
  links?: string[];
  image?: string;
  images?: string[];
  items: Item[];
  isChecked: boolean;
}

export interface EventFolder {
  id?: number;
  name: string;
  date: string;
  mapPdf?: Blob;
}

export interface EventOrder {
  eventId: number;
  circleUuids: string[];
}

export class AppDB extends Dexie {
  circles!: Table<Circle, string>;
  events!: Table<EventFolder, number>;
  eventOrders!: Table<EventOrder, number>;

  constructor() {
    super('MyLootDB');
    this.version(1).stores({
      circles: 'uuid, eventId',
      events: '++id',
      eventOrders: 'eventId'
    });
  }
}

export const db = new AppDB();

export const processImage = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        
        const MAX_SIZE = 4000;
        let targetWidth = img.width;
        let targetHeight = img.height;

        if (targetWidth > MAX_SIZE || targetHeight > MAX_SIZE) {
          if (targetWidth > targetHeight) {
            targetHeight = Math.round(targetHeight * (MAX_SIZE / targetWidth));
            targetWidth = MAX_SIZE;
          } else {
            targetWidth = Math.round(targetWidth * (MAX_SIZE / targetHeight));
            targetHeight = MAX_SIZE;
          }
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext('2d');
        
        ctx?.drawImage(img, 0, 0, targetWidth, targetHeight);
        
        resolve(canvas.toDataURL('image/webp', 0.8));
      };
    };
  });
};