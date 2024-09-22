import auth from './api/auth/authSlice';
import amount from './amount';

const rootReducer = {
	amount,
	auth,
};
export default rootReducer;
