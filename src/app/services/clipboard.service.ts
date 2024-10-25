// src/services/clipboard.service.ts
import { Injectable } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  constructor() {}

  async copyToClipboard(text: string) {
    await Clipboard.write({
      string: text
    });
    console.log('Texto copiado al portapapeles: ', text);
  }

  async pasteFromClipboard() {
    const { value } = await Clipboard.read();
    console.log('Texto pegado desde el portapapeles: ', value);
    return value;
  }
}
