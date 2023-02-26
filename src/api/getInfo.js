import axios from 'axios'; 

const apiUsers = 'https://63f81d1e5b0e4a127de05510.mockapi.io/users';

const getInfo = () => {
    return axios
        .get(apiUsers)
        .then((response) => {
            const data = response.data
            return data
        })
}

export default getInfo; 