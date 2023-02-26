import axios from "axios";


const getUserToEdit = async (userId) => {

    const apiUsers = `https://63f81d1e5b0e4a127de05510.mockapi.io/users/${userId}`;

        return await axios
        .get(apiUsers)
        .then((response) => {
            const data = response.data
            return data
        })
        .catch((err) => {
        console.log('No se pudieron editar los datos el usuario', err)    
        })
}

export default getUserToEdit;
