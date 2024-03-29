import { Router } from 'express';

import ChatController from '@controllers/v1/chat.ctrl';

const chatRouter = Router();
const chatController = new ChatController();

chatRouter
    .route('/completion')
    .post(chatController.completion);

chatRouter
    .route('/ping')
    .get(chatController.ping);

chatRouter
    .route('/token')
    .put(chatController.putChatToken);

export default chatRouter;