import { Router } from 'express';

import ChatController from '@controllers/v1/chat.ctrl';

const chatRouter = Router();
const chatController = new ChatController();

chatRouter
    .route('/ask')
    .post(chatController.ask);

chatRouter
    .route('/token')
    .put(chatController.putChatToken);

export default chatRouter;