import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import autobind from 'autobind-decorator';
import { Configuration, OpenAIApi } from "openai";

type IJWTString = JwtPayload | null | string;

class ChatController {
    private secret = process.env.SECRET_CHAT || '';
    private defaultModel = 'gpt-3.5-turbo';

    @autobind
    public async completion(req: Request, res: Response) {
        const { openai } = await this.initOpenAI(req);
        const { message } = req.body;

        if (openai && message) {
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

    @autobind
    public async ping(req: Request, res: Response) {
        const { token } = await this.initOpenAI(req);

        res.send({
            tokenExists: !!token,
        })
    }

    @autobind
    public async getModels(req: Request, res: Response) {
        const { openai } = await this.initOpenAI(req);
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

    private async getToken(token: string): Promise<IJWTString> {
        if (token && this.secret) {
            try {
                return jwt.verify(token, this.secret);
            } catch (e) {
                return null;
            }
        }

        return null;
    }

    private getTokenHeader(req: Request) {
        return req.get('ChatApi') || '';
    }

    private async initOpenAI(req: Request) {
        const token: IJWTString = await this.getToken(this.getTokenHeader(req));

        if (!token) return { token: undefined, openai: undefined };

        const openai = this.createConfiguration(token as string)

        return { token, openai }
    }

    private createConfiguration(apiKey: string): OpenAIApi | undefined {
        try {
            const configuration = new Configuration({
                apiKey
            });

            return new OpenAIApi(configuration);
        } catch (e) {
            console.log(e);
        }
    }
}

export default ChatController;