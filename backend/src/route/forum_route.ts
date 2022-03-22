import express, { Request, Response } from "express";
import { restService } from '../service/forum_rest';
import * as bodyParser from "body-parser";

export const RestRouter = express.Router()
RestRouter.use(bodyParser.json())
RestRouter.post("/channel", async (req: Request, res: Response) => await restService.addChannel(req, res));
RestRouter.get("/channels", async (req: Request, res: Response) => await restService.listChannel(req, res));
RestRouter.post("/message", async (req: Request, res: Response) => await restService.addMessage(req, res));
RestRouter.get("/messages", async (req: Request, res: Response) => await restService.listMessage(req, res));


export const GraphglRouter = express.Router()
// todo implement grapgl router