import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import autobind from 'autobind-decorator';

type IJWTString = string | JwtPayload;

class ChatController {
    private secret = process.env.SECRET_CHAT || '';

    @autobind
    ask(req: Request, res: Response) {
        let token: IJWTString = req.get('ChatApi') || '';

        if (token && this.secret) {
            token = jwt.verify(token, this.secret);
            console.log("🚀 ~ file: chat.ctrl.ts:7 ~ ChatController ~ ask ~ token:", token)
            return res.send({ a: 1 });
        }

        return res.status(401).send({ message: 'Unauthorized' });
    }

    putChatToken(req: Request, res: Response): Response {
        if (this.secret) {
            let { token } = req.body;
            token = jwt.sign(token, this.secret);
            return res.send({ token });
        }

        return res.status(500).send({ message: 'Internal Server Error' });
    }
}

export default ChatController;