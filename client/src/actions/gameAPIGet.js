import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from 'actions';
import API from "../utils/API";

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

export const SearchMovies = query => dispatch => {
    axios
        .post("/api/users/register", userData)
        .then(res => history.push("/login")) // re-direct to login on successful register
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

searchMovies = query => dispatch => {
    API.search(query)
      .then(res => res.json())
      .then(res => {
        if(res.error) {
            throw(res.error);
        }
        dispatch(pullDataSuccess(res.data.Score));
    })
        return res.data.Score;
      .then(res => this.setState({ result: res.data, score: res.data.Score, quarters: res.data.Quarters, plays: res.data.Plays }))
      .catch(err => console.log(err));
  };