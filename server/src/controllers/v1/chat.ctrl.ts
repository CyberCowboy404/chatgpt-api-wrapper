import { Request, Response } from 'express';

class ChatController {
    ask(req: Request, res: Response) {
        return res.send({ a: 1 });
    }
}

export default new ChatController();