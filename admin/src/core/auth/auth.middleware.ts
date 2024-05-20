import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CognitoJwtVerifier, JwtRsaVerifier } from 'aws-jwt-verify';

export class AuthMiddleware implements NestMiddleware {
  constructor(private awsCognitoVerifier: any) {
    this.awsCognitoVerifier = CognitoJwtVerifier.create({
      userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
      tokenUse: 'access',
      clientId: process.env.AWS_COGNITO_CLIENT_ID,
    });
  }
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.cookies || !req.cookies['access_token']) {
      res.redirect(process.env.AWS_COGNITO_LOG_IN_PAGE);
    } else {
      const tokenVerificationPromise = new Promise<void>(
        (onResolve, onReject) => {
          this.awsCognitoVerifier.verify(req.cookies['access_token']);
          onResolve();
          onReject();
        },
      );
      tokenVerificationPromise.then(
        () => next(),
        () => res.redirect(process.env.AWS_COGNITO_LOG_IN_PAGE),
      );
    }
  }
}
