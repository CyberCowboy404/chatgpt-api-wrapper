import { Router } from 'express';

import chatRoute from './chat';

const router = Router();

const routes = [
    {
        path: '/chat',
        route: chatRoute,
    }
];

routes.forEach(r => {
    router.use(r.path, r.route);
});

export default router;
