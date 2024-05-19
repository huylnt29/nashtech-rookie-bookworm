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
    response.cookie('id_token', `${tokens['id_token']}`, {
      httpOnly: true,
      maxAge: 60_000,
    });
    response.redirect('/');
  }
}
