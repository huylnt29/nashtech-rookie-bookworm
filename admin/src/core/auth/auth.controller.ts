import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('token-exchange')
  async exchangeTokens(
    @Query('code') authorizationCodeGrant: String,
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {
    const tokens = await this.authService.getAmazonCognitoTokens(
      authorizationCodeGrant,
    );
    response.cookie('access_token', `${tokens['access_token']}`, {
      httpOnly: true,
    });
    response.redirect('/');
  }
}
