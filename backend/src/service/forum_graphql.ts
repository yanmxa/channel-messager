import { pool } from "../common/database";
import express, { Request, Response } from "express";
import { getOffset } from "../common/helper";
import { Channel, Message } from "../model/forum_model";
import { channelMapper, messageMapper } from "../mapper/forum_mapper";

class GraphqlService {
    addChannel = async (req: Request, res: Response) => {
    }

    listChannel = async (req: Request, res: Response) => {

    }

    addMessage = async (req: Request, res: Response) => {

    }

    listMessage = async (req: Request, res: Response) => {

    }
}

export const graphqlService = new GraphqlService();

