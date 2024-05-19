import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  accessInitialRoute(@Req() req: Request, @Res() res: Response): void {
    res.redirect('/book');
  }
}
