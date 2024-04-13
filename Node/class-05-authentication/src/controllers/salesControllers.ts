import { Request, Response, NextFunction } from "express";

export const salesControllers = {
    read(_req: Request, res: Response) {
      return res.status(200).json({
        reports: {
          sales1: "10000",
          sales2: "20000",
          sales3: "30000",
        },
      });
    },
  };
