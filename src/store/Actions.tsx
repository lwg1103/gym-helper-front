const ACTION_SET_TOKEN = 'SET_TOKEN',
    ACTION_CLEAR_TOKEN = 'CLEAR_TOKEN';

const
    setToken = (token: string) => {
        return {
            type: ACTION_SET_TOKEN,
            data: token
        };
    },
    clearToken = () => {
        return {
            type: ACTION_CLEAR_TOKEN
        }
    };

export {
    ACTION_SET_TOKEN,
    ACTION_CLEAR_TOKEN,
    setToken,
    clearToken
}