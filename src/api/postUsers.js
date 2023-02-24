import axios from 'axios'; 

const apiUsers = 'https://63f81d1e5b0e4a127de05510.mockapi.io/users'

const postUsers = (user) => {
    return axios
        .post(apiUsers, user)
        .then((response) => {
            console.log('Usuario añadido con éxito', response)
        })
        .catch((err) => {
        console.log('Error', err)
    })

};

export default postUsers; 