import Dexie, { type Table } from 'dexie';

export interface Item {
  name: string;
  price: number;
  isChecked: boolean;
}

export interface Circle {
  id?: number;
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
  priority?: number; 
}

export interface EventFolder {
  id?: number;
  name: string;
  date: string;
  mapPdf?: Blob;
}

export class AppDB extends Dexie {
  circles!: Table<Circle>;
  events!: Table<EventFolder>;

  constructor() {
    super('ComiketManagerV5');
    this.version(1).stores({
      circles: '++id, eventId, name, isChecked, space',
      events: '++id, name'
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