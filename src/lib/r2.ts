import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';

const accessKeyId = process.env.AWS_ACCESS_KEY_ID || '';
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || '';
const endpoint = process.env.AWS_ENDPOINT_URL || '';

export const r2Client = new S3Client({
  region: 'auto',
  endpoint: endpoint,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export const R2_BUCKET = process.env.CLOUDFLARE_R2_BUCKET || 'jetinvite-media';

/**
 * Upload a file buffer directly to Cloudflare R2
 */
export async function uploadToR2(
  key: string,
  body: Buffer | Uint8Array,
  contentType: string
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
    Body: body,
    ContentType: contentType,
  });

  await r2Client.send(command);

  // Return the public URL or relative path
  const publicDomain = process.env.CLOUDFLARE_R2_PUBLIC_DOMAIN;
  if (publicDomain) {
    return `${publicDomain.replace(/\/$/, '')}/${key}`;
  }
  return `/api/media/${key}`;
}
