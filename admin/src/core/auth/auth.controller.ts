import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('token-exchange')
  async exchangeTokens(
    @Query('code') authorizationCodeGrant: String,
    @Res() res: Response,
  ): Promise<void> {
    const tokens = await this.authService.getAmazonCognitoTokens(
      authorizationCodeGrant,
    );
    console.log(tokens);
  }
}
