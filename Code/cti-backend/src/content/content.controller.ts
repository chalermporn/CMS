
import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { ContentService } from './content.service';

@Controller()
export class ContentController {
  constructor(private readonly authService: AuthService, private readonly contentService: ContentService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/cti/content/create')
  createContent(@Request() req) {
    return this.contentService.createContent(req.body.id, req.body.page)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/cti/content/save')
  saveContent(@Request() req) {
    return this.contentService.saveContent(req.body.id, req.body.page)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/cti/content/delete')
  removeContent(@Request() req) {
    return this.contentService.removeContent(req.body.id)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/cti/content/get')
  getContent(@Request() req) {
    return this.contentService.getContent(req.query.id)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/cti/menu/save')
  saveMenu(@Request() req) {
    return this.contentService.saveMenu(req.body.menu)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/cti/menu/get')
  getMenu(@Request() req) {
    return this.contentService.getMenu()
  }

}