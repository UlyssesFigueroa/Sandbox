export const PULL_DATA_PENDING = 'PULL_DATA_PENDING';
export const PULL_DATA_SUCCESS = 'PULL_DATA_SUCCESS';
export const PULL_DATA_ERROR = 'PULL_DATA_ERROR';

function pullDataPending() {
    return {
        type: PULL_DATA_PENDING
    }
}

function pullDataSuccess(products) {
    return {
        type: PULL_DATA_SUCCESS,
        homeTeam: homeTeam
    }
}

function pullDataError(error) {
    return {
        type: PULL_DATA_ERROR,
        error: error
    }
}