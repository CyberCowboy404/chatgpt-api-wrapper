import { Router } from 'express';

import chatController from '@controllers/v1/chat.ctrl';

const chatRouter = Router();

chatRouter
    .route('/ask')
    .post(chatController.ask);

chatRouter
    .route('/token')
    .put(chatController.putChatToken);

export default chatRouter;