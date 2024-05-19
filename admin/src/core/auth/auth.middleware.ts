import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtRsaVerifier } from 'aws-jwt-verify';

export class AuthMiddleware implements NestMiddleware {
  constructor(private awsCognitoVerifier: any) {
    this.awsCognitoVerifier = JwtRsaVerifier.create({
      issuer: process.env.AWS_COGNITO_AUTHORITY,
      audience: process.env.AWS_COGNITO_COGNITO_CLIENT_ID,
      jwksUri: process.env.AWS_COGNITO_AUTHORITY + '/.well-known/jwks.json',
    });
  }
  use(req: Request, res: Response, next: NextFunction) {
    if (req.cookies) {
      req.user = this.awsCognitoVerifier.verify(req.cookies['access-token']);
    }
    next();
  }
}
