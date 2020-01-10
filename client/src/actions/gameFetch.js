import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from 'actions';

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('https://api.sportsdata.io/v3/nfl/pbp/json/PlayByPlay/2019REG/1/was?key=20ae0fa9e90e482f98d8799f523e3a4f')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.data.Score));
            return res.data.Score;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;