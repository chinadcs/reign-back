import { Router } from 'express';
import { userRoutes } from './User/UserRoutes';
import { authRoutes } from './Auth/AuthRoutes';
import { charRoutes } from './Character/CharRoutes';
import { raidRoutes } from './Raid/RaidRoutes';
import { raidGateRoutes } from './RaidGate/RaidGateRoutes';
const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/char', charRoutes);
router.use('/raid', raidRoutes);
router.use('/raidgate', raidGateRoutes);

export { router as routes };
