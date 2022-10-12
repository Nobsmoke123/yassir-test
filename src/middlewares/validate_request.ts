import { Request, Response } from 'express';

export const ValidateRequest = (req: Request, res: Response, next: any) => {
  const { lat, long } = req.params;
  if (
    lat &&
    long &&
    isFinite(parseFloat(lat)) &&
    Math.abs(parseFloat(lat)) <= 90 &&
    isFinite(parseFloat(long)) &&
    Math.abs(parseFloat(long)) <= 180
  ) {
    next();
  } else {
    return res.status(400).json({
      status: 'failed.',
      message: 'Bad Request: please provide a valid longitude and latitude.',
    });
  }
};
