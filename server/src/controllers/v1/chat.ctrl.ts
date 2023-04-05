import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

class ChatController {
    ask(req: Request, res: Response) {
        return res.send({ a: 1 });
    }

    putChatToken(req: Request, res: Response): Response {
        const secret = process.env.SECRET_CHAT;

        if (secret) {
            let { token } = req.body;
            token = jwt.sign(token, process.env.SECRET_CHAT as string);
            return res.send({ token });
        }

        return res.status(500).send({ message: 'Internal Server Error' });
    }
}

export default new ChatController();