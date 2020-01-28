const API_URL = "https://test.kewirus.com/api/widgets"


export const sendData = (name, price, description) => {
    return dispatch => {
        return fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                Accept: 'applications/json',
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify({ name, price, description })
        })
            .then((response) => response.json())
            .then((responseAdd) => {
                console.log('dataRes>', responseAdd)
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
}

export const getData = () => {
    return dispatch => {
        return fetch(`${API_URL}`, {
            method: 'GET',
            headers: {
                Accept: 'applications/json',
                'Content-Type': 'applications/json'
            },
            
        })
            .then((response) => response.json())
            .then((responseGetData) => {
                console.log('dataRes>', responseGetData)
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
}

export const deleteData = (id) => {
    return dispatch => {
        return fetch(`${API_URL}`, {
            method: 'DELETE',
            headers: {
                Accept: 'applications/json',
                'Content-Type': 'applications/json'
            },
            
        })
            .then((response) => response.json())
            .then((responseGetData) => {
                console.log('dataRes>', responseGetData)
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
}

export const putData = (id) => {
    return dispatch => {
        return fetch(`${API_URL}`, {
            method: 'PUT',
            headers: {
                Accept: 'applications/json',
                'Content-Type': 'applications/json'
            },
            
        })
            .then((response) => response.json())
            .then((responseGetData) => {
                console.log('dataRes>', responseGetData)
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
}