import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello World'});
});

export default router;