import { Router } from 'express';
import { userRoutes } from './User/UserRoutes';
import { authRoutes } from './Auth/AuthRoutes';
import { charRoutes } from './Character/CharRoutes';
import { raidRoutes } from './Raid/RaidRoutes';
import { raidGateRoutes } from './RaidGate/RaidGateRoutes';
import { taskRoutes } from './Task/TaskRoutes';
const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/char', charRoutes);
router.use('/raid', raidRoutes);
router.use('/raidgate', raidGateRoutes);
router.use('/task', taskRoutes);

export { router as routes };
