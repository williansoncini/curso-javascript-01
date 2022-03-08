import { Router } from 'express';
import user from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', user.store);
router.get('/', loginRequired, user.index);
router.get('/:id', user.show);
router.put('/:id', user.update);
router.delete('/:id', user.delete);

export default router;
