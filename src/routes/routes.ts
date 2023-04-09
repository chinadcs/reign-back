import { Router } from 'express';
import { userRoutes } from './User/UserRoutes';
import { authRoutes } from './Auth/AuthRoutes';
import { charRoutes } from './Character/CharRoutes';
const router = Router();

router.use('/user', userRoutes);
router.use('/char', charRoutes);
router.use('/auth', authRoutes);

export { router as routes };
