import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}
  async getAmazonCognitoTokens(
    authorizationCodeGrant: String,
  ): Promise<AxiosResponse<any>> {
    const response = await this.httpService.axiosRef.post(
      `${process.env.AWS_COGNITO_DOMAIN}/oauth2/token`,
      {
        grant_type: 'authorization_code',
        client_id: process.env.AWS_COGNITO_CLIENT_ID,
        client_secret: process.env.AWS_COGNITO_CLIENT_SECRET,
        code: authorizationCodeGrant,
        redirect_uri: 'http://localhost:3000/auth/token-exchange',
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    return response.data;
  }

  async getUserInfo(accessToken: String): Promise<any> {
    const response = await this.httpService.axiosRef.post(
      `${process.env.AWS_COGNITO_DOMAIN}/oauth2/userInfo`,
      null,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  }
}
