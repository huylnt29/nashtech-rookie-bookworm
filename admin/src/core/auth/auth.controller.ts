import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('AUTH')
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
    response.cookie('access_token', tokens['access_token'], {
      httpOnly: true,
    });

    const user = await this.authService.getUserInfo(tokens['access_token']);
    response.cookie('user', JSON.stringify(user), {
      maxAge: 86400 * 90,
    });

    response.redirect('/');
  }
}
