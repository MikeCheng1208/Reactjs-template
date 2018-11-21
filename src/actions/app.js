import { OPEN_LOGIN_FORM, CLOSE_LOGIN_FORM } from '../constants';
  
export const openLoginForm = () => ({
    type: OPEN_LOGIN_FORM,
});

export const closeLoginForm = () => ({
    type: CLOSE_LOGIN_FORM,
});