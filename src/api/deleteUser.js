import axios from 'axios';

const deleteUser = async (userId) => {
   
    const apiUsers = `https://63f81d1e5b0e4a127de05510.mockapi.io/users/${userId}`;
    
    return await axios
        .delete(apiUsers)
        .then((response) => {
            console.log('Usuario eliminado exitosamente', response)
        })
        .catch((err) => {
            console.log('Ups, hubo un error', err)
        })
}; 

export default deleteUser; 