export declare class ContentService {
    constructor();
    createContent(id: string, content: string): Boolean;
    getContent(id: string): Object;
    removeContent(id: string): Object;
    saveContent(id: string, content: string): Boolean;
    getMenu(): Object;
    saveMenu(menu: string): Boolean;
}
