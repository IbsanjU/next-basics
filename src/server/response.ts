import type { NextApiResponse } from 'next';
import { serializeError } from 'serialize-error';

export function ok(res: NextApiResponse, data: object = {}) {
  return json(res, data);
}

export function json(res: NextApiResponse, data: object = {}) {
  return res.status(200).json(data);
}

export function redirect(res: NextApiResponse, url: string) {
  res.setHeader('Location', url);

  return res.status(303).json({});
}

export function badRequest(res: NextApiResponse, error = '400 Bad Request') {
  return res.status(400).json({ error: serializeError(error) });
}

export function unauthorized(res: NextApiResponse, error = '401 Unauthorized') {
  return res.status(401).json({ error: serializeError(error) });
}

export function forbidden(res: NextApiResponse, error = '403 Forbidden') {
  return res.status(403).json({ error: serializeError(error) });
}

export function notFound(res: NextApiResponse, error = '404 Not Found') {
  return res.status(404).json({ error: serializeError(error) });
}

export function methodNotAllowed(res: NextApiResponse, error = '405 Method Not Allowed') {
  return res.status(405).json({ error: serializeError(error) });
}

export function tooManyRequest(res: NextApiResponse, error = '429 Too Many Request') {
  return res.status(429).json({ error: serializeError(error) });
}

export function serverError(res: NextApiResponse, error = '500 Internal Server Error') {
  return res.status(500).json({ error: serializeError(error) });
}
