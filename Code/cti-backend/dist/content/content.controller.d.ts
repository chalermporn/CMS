import { AuthService } from '../auth/auth.service';
import { ContentService } from './content.service';
export declare class ContentController {
    private readonly authService;
    private readonly contentService;
    constructor(authService: AuthService, contentService: ContentService);
    createContent(req: any): Boolean;
    saveContent(req: any): Boolean;
    removeContent(req: any): Object;
    getContent(req: any): Object;
    saveMenu(req: any): Boolean;
    getMenu(req: any): Object;
}
