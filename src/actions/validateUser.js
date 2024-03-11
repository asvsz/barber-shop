import axios from "axios"

async function validateUser(name) {
    try {
        const email = await axios.get(`${url}/barbearias/${name}`)
        
        const response = await axios
            .post(`${url}/barbearias`, {
                nome: `${name}`
            })

        if (!response) throw new Error("Erro ao criar usuário")
        return response


    } catch (error) {
        console.log('Erro ao criar barbearia:', e)
    }
}