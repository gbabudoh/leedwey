// @ts-ignore
import * as Minio from 'minio';

const minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT || 'localhost',
  port: parseInt(process.env.MINIO_PORT || '9000'),
  useSSL: process.env.MINIO_USE_SSL === 'true',
  accessKey: process.env.MINIO_ACCESS_KEY || '',
  secretKey: process.env.MINIO_SECRET_KEY || '',
});

const BUCKET_NAME = process.env.MINIO_BUCKET || 'leedwey-docs';

/**
 * Ensures the MinIO bucket exists.
 */
export async function ensureBucket() {
  const exists = await minioClient.bucketExists(BUCKET_NAME);
  if (!exists) {
    await minioClient.makeBucket(BUCKET_NAME, 'us-east-1');
  }
}

/**
 * Uploads a file to MinIO.
 */
export async function uploadToMinio(
  fileName: string,
  buffer: Buffer,
  metaData: Record<string, any> = {}
) {
  await ensureBucket();
  const objInfo = await minioClient.putObject(
    BUCKET_NAME,
    fileName,
    buffer,
    buffer.length,
    metaData
  );
  return {
    ...objInfo,
    url: `${process.env.MINIO_USE_SSL === 'true' ? 'https' : 'http'}://${process.env.MINIO_ENDPOINT}/${BUCKET_NAME}/${fileName}`,
  };
}

/**
 * Gets a presigned URL for a file in MinIO.
 */
export async function getPresignedUrl(fileName: string) {
  return await minioClient.presignedGetObject(BUCKET_NAME, fileName, 24 * 60 * 60); // 24 hours
}

export default minioClient;
