import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtRsaVerifier } from 'aws-jwt-verify';

export class AuthMiddleware implements NestMiddleware {
  constructor(private awsCognitoVerifier: any) {
    this.awsCognitoVerifier = JwtRsaVerifier.create({
      issuer: process.env.AWS_COGNITO_AUTHORITY,
      audience: process.env.AWS_COGNITO_CLIENT_ID,
      jwksUri: process.env.AWS_COGNITO_AUTHORITY + '/.well-known/jwks.json',
    });
  }
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.cookies || !req.cookies['id_token'])
      res.redirect(process.env.AWS_COGNITO_LOG_IN_PAGE);
    else {
      const verifyPromise = new Promise((onResolve, onReject) => {
        const payload = this.awsCognitoVerifier.verify(req.cookies['id_token']);
        onResolve(payload);
        onReject();
      });
      verifyPromise.then(
        (payload) => {
          console.log(payload);
          req.user = payload;
          next();
        },
        () => res.redirect(process.env.AWS_COGNITO_LOG_IN_PAGE),
      );
    }
  }
}
