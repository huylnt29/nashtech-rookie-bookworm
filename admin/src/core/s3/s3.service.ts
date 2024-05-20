import { Injectable, OnModuleInit, Req, Res } from '@nestjs/common';
import { S3 } from 'aws-sdk';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class S3Service implements OnModuleInit {
  constructor() {}
  async onModuleInit() {
    this.s3Client = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
  }

  async uploadImage(file: Express.Multer.File) {
    const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `books/${uuidv4()}-${file.originalname}`,
      Body: file.buffer,
    };

    try {
      const data = await this.s3Client.upload(uploadParams).promise();
      return data;
    } catch (error) {
      throw error;
    }
  }
  private s3Client: S3;
}
