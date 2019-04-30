const initialState = {
    list: []
}
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_LIST':
            return { ...state, list: payload };
        default:
            return state;
    }
}