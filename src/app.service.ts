import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {message: string} {
    return {message: 'Hello World test aut 22o deplo ыыy))!'};
  }
}
