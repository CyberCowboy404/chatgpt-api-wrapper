import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import autobind from 'autobind-decorator';
import { Configuration, OpenAIApi } from "openai";

type IJWTString = string | JwtPayload;

class ChatController {
    private secret = process.env.SECRET_CHAT || '';
    private openai!: OpenAIApi;
    private defaultModel = 'gpt-3.5-turbo';

    @autobind
    public async chat(req: Request, res: Response) {
        const token: IJWTString = this.getToken(this.getHeader(req));
        const { message } = req.body;
        const openai = this.createConfiguration(token as string);

        if (token && openai && message) {
            const response = await openai.createChatCompletion({
                model: this.defaultModel,
                messages: [{
                    role: 'user',
                    content: message,
                }],
            });
            console.log("🚀 ~ file: chat.ctrl.ts:28 ~ ChatController ~ chat ~ response:", response.data)
            return res.send({ data: response.data });
        }

        return res.status(401).send({ message: 'Unauthorized' });
    }

    public async getModels(req: Request, res: Response) {
        const token: IJWTString = this.getToken(this.getHeader(req));
        const openai = this.createConfiguration(token as string);
        const response = await openai!.listModels();

        return res.send(response);
    }

    @autobind
    public putChatToken(req: Request, res: Response): Response {
        if (this.secret) {
            let { token } = req.body;
            token = jwt.sign(token, this.secret);
            return res.send({ token });
        }

        return res.status(500).send({ message: 'Internal Server Error' });
    }

    private getToken(token: string): IJWTString {
        let result: IJWTString = '';

        if (token && this.secret) {
            result = jwt.verify(token, this.secret);
        }

        return result;
    }

    private createConfiguration(apiKey: string): OpenAIApi | undefined {
        try {
            const configuration = new Configuration({
                apiKey
            });
            this.openai = new OpenAIApi(configuration);

            return this.openai;
        } catch (e) {
            console.log(e);
        }
    }

    private getHeader(req: Request) {
        return req.get('ChatApi') || '';
    }
}

export default ChatController;