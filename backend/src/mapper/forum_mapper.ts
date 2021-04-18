import { pool } from "../common/database";
import { Channel, Message } from "../model/forum_model";

class ChannelMapper {
    add = (channel: Channel): Promise<any> => {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO channel (name) VALUES (?)`;
            const { id, name } = channel;
            pool.query(sql, [name], (err: any, res: any) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res.insertId);
            })
        })
    }

    get = (offset: number, limit: number) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM channel ORDER BY id LIMIT ?,?`
            pool.query(sql, [offset, limit], (err, res) => {
                if (err) {
                    return reject(err)
                }
                return resolve(res)
            })
        })
    }
}

class MessageMapper {
    add = (message: Message): Promise<any> => {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO message (title, content, channelId, createdAt) VALUES (?, ?, ?, ?)`;
            const {
                title,
                content,
                channelId,
                createdAt,
            } = message;
            pool.query(sql, [title, content, channelId, createdAt], (err: any, res: any) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res.insertId);
            })
        })
    }

    get = (offset: number, limit: number, channelId: number) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM message WHERE channelId=? ORDER BY createdAt desc LIMIT ?,?`
            pool.query(sql, [channelId, offset, limit], (err, res) => {
                if (err) {
                    return reject(err)
                }
                return resolve(res)
            })
        })
    }
}


export const messageMapper = new MessageMapper();
export const channelMapper = new ChannelMapper();