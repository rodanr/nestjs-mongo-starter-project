import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): string {
    return '<h1>Healthy 😃</h1>';
  }
}
