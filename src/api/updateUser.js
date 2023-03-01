import axios from 'axios'

const updateUser = async (userId, infoToUpdate) => {
     
    const apiUsers = `https://63f81d1e5b0e4a127de05510.mockapi.io/users/${userId}`;

     await axios
        .put(apiUsers, infoToUpdate)
        .then((response) => {
            console.log('La información se actualizó de forma exitosa', response)
        })
        .cacth((err) => {
            console.log('No se pudo actualizar la información', err)
        })
}
    
export default updateUser;