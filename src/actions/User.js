export const fetchCurrentUser = () => {

    return (dispatch) => {
        return new Promise((resolve, reject) => {
            console.log()
            fetch("account", {
                headers: {
                    "accepts": "application/json"
                }
            })
                .then(r => r.json())
                .then(JSONResponse => {
                    if (JSONResponse.msg === "Failed to authenticate") {
                        dispatch(failedAuth())
                    } else {
                        dispatch(setCurrentUser(JSONResponse))
                        resolve(JSONResponse.id)
                    }
                })
        })
    }
}

export const fetchChessData = (steamID) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            fetch(`getRank/${steamID}`, {
                headers: {
                    "accepts": "application/json"
                }
            })
                .then(r => r.json())
                .then(JSONResponse => {
                    if (JSONResponse.msg === "Failed to authenticate") {
                        dispatch(failedAuth())
                    } else {
                        dispatch(setChessData(JSONResponse))
                    }
                })
        })
    }
}

export const setCurrentUser = (userData) => ({
    type: 'SET_CURRENT_USER',
    payload: userData
})

export const setChessData = (chessData) => ({
    type: 'SET_CHESS_DATA',
    payload: chessData
})

export const failedAuth = () => ({
    type: 'FAILED_AUTH'
})