import { pool } from "../common/database";
import express, { Request, Response } from "express";
import { getOffset } from "../common/helper";
import { Channel, Message } from "../model/forum_model";
import { channelMapper, messageMapper } from "../mapper/forum_mapper";

class RestService {
    addChannel = async (req: Request, res: Response) => {
        try {
            const channel: Channel = req.body as any;
            const id: any = await channelMapper.add(channel);
            res.status(200).json({
                data: { id }
            })
        } catch (e) {
            res.status(500).json({
                errmsg: e
            })
        }
    }

    listChannel = async (req: Request, res: Response) => {
        try {
            const pageNum = Number(req.query.page || 1);
            const pageSize = Number(req.query.limit || 10);
            const offset = getOffset(pageNum, pageSize);
            const channels = await channelMapper.get(offset, pageSize)
            res.status(200).json({
                data: { channels }
            })
        } catch (e) {
            res.status(500).json({
                errmsg: e,
            })
        }
    }

    addMessage = async (req: Request, res: Response) => {
        try {
            const message: Message = req.body as any;
            message.createdAt = new Date();
            const id: any = await messageMapper.add(message);
            res.status(200).json({
                data: { id }
            })
        } catch (e) {
            res.status(500).json({
                errmsg: e
            })
        }
    }

    listMessage = async (req: Request, res: Response) => {
        try {
            const pageNum = Number(req.query.page || 1);
            const pageSize = Number(req.query.limit || 10);
            const channelId = req.query.channelId as any;
            const offset = getOffset(pageNum, pageSize);
            const messages = await messageMapper.get(offset, pageSize, channelId)
            res.status(200).json({
                data: { messages }
            })
        } catch (e) {
            res.status(500).json({
                errmsg: e,
            })
        }
    }
}

export const restService = new RestService();

