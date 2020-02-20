import { verifyToken } from '../api/users';
import { routesWithoutAuthRequirement } from './config';

export const tokenValidityCheck = async (to, from, next) => {
  if (routesWithoutAuthRequirement.indexOf(to.name) === -1) {
    try {
      await verifyToken();
      next();
    } catch (err) {
      next({ name: 'login' });
    }
  } else {
    next();
  }
};
