import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BrowserAnimationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
