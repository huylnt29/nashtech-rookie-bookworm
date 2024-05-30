import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `Request ${req.originalUrl} at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    );
    next();
  }
}
