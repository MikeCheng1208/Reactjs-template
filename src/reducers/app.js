import { OPEN_LOGIN_FORM, CLOSE_LOGIN_FORM } from '../constants';

const initialState = {
    isOpenLoginForm: false,         /** 是否開啟登入視窗 */
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_LOGIN_FORM:
            return {
                ...state,
                isOpenLoginForm: true,
            }
        case CLOSE_LOGIN_FORM:
            return {
                ...state,
                isOpenLoginForm: false,
            }
        default:
            return state 
    }
  }