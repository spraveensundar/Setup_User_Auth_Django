import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetData, submitLogin, submitRegister } from "../actions/crud";

function useSetup() {
    const dispatch = useDispatch();
    const crud = useSelector(state => state.crud);

    const handleSubmitLogin = useCallback((payload) => {
        dispatch(submitLogin('login', payload));
    }, []);

    const handleResetData = useCallback((attribute) => {
        dispatch(resetData(attribute));
    }, []);

    const handleSubmitRegister = useCallback((payload) => {
        dispatch(submitRegister('register', payload));
    }, []);

    return {
        crud,
        submitLogin: handleSubmitLogin,
        resetData: handleResetData,
        submitRegister: handleSubmitRegister
    }
}

export default useSetup;