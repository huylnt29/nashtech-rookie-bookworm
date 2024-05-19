import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(@Req() req: Request, @Res() res: Response): void {
    if (req.user) res.redirect('/book');
    else res.redirect(process.env.AWS_COGNITO_DOMAIN);
  }
}
