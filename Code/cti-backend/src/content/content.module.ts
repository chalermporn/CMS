import { Module } from '@nestjs/common';
import { ContentService } from './content.service'
import { ContentController } from './content.controller'
import { AuthModule } from '../auth/auth.module'
import { UsersModule } from '../users/users.module'

@Module({
    imports: [AuthModule, UsersModule],
    controllers: [ContentController],
    providers: [ContentService],
    exports: [ContentService]
})
export class ContentModule {}
