import { get } from '../utils/http';
export const getArticalList = () => {
    return dispatch => {
        get('https://cnodejs.org/api/v1//topics', {
            page: 0,
            tab: 'share',
            limit: 10,
            mdrender: false
        })
            .then(res => {
                // debugger;
                if (res.data.success) {
                    dispatch({
                        type: 'UPDATE_LIST',
                        payload: res.data.data
                    })
                }
            })
    }
}