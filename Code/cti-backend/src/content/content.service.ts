import { Injectable } from '@nestjs/common';
import fs from 'fs'
import path from 'path'

@Injectable()
export class ContentService {
  constructor(

  ) {}

  createContent(id: string, content: string): Boolean {
    var filePath: string  = path.join(process.cwd(), 'data', id + '.html')
    if (fs.existsSync(filePath)){
      return false
    }
    fs.writeFileSync(filePath, content)
    return true;
  }

  getContent(id: string): Object {
    var page = fs.readFileSync(path.join(process.cwd(), 'data', id + '.html'))
    return { page };
  }

  removeContent(id: string): Object {
    fs.unlinkSync(path.join(process.cwd(), 'data', id + '.html'))
    return true;
  }

  saveContent(id: string, content: string): Boolean {
    fs.writeFileSync(path.join(process.cwd(), 'data', id + '.html'), content)
    return true;
  }

  getMenu(): Object { 
    var menu = fs.readFileSync(path.join(process.cwd(), 'data', 'menu.html'))
    return { menu };
  }

  saveMenu(menu: string): Boolean {
    fs.writeFileSync(path.join(process.cwd(), 'data', 'menu.html'), menu)
    return true;
  }

 
}