import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get('token-exchange')
  async exchangeTokens(
    @Query('code') authorizationCodeGrant: String,
    @Res() res: Response,
  ): Promise<void> {
    console.log(authorizationCodeGrant);
  }
}
