import { Router } from 'express';

import chatController from '@controllers/v1/chat.ctrl';

const chatRouter = Router();

chatRouter
    .route('/ask')
    .get(chatController.ask)

export default chatRouter;