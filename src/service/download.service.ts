import {
  readFileSync, existsSync, mkdirSync, writeFileSync,
} from 'fs';
import { resolve } from 'path';
import * as fetch from 'isomorphic-fetch';

export class DownloadService {
  private tempFolder: string;

  constructor() {
    this.tempFolder = resolve(process.cwd(), 'temp');
  }

  private async folderVerification(): Promise<void> {
    if (!existsSync(this.tempFolder)) {
      mkdirSync(this.tempFolder);
    }
  }

  public async downloadFile(link: string, filename): Promise<void> {
    this.folderVerification();
    const content = await fetch(link).then((response: any) => response.buffer());
    writeFileSync(resolve(this.tempFolder, filename), content);
  }

  public async downloadBlobFile(link: string, filename): Promise<void> {
    this.folderVerification();
    const base64Data = (link.replace(/^data:image\/jpeg;base64,/, ''));

    writeFileSync(resolve(this.tempFolder, filename), base64Data, 'base64');
  }

  public readFileFromTemp(filename: string): Buffer {
    return readFileSync(resolve(this.tempFolder, filename));
  }
}
