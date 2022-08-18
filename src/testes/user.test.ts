import axios from 'axios'
import { serve } from 'swagger-ui-express'

const server = axios.create({
    baseURL: 'http://localhost:5001'
})

describe('/user', () => {
    it('deve retornar o status 200', async () =>{
        const user = await server.post('/user', {
            name: 'Qual usuário',
            email:'email@dio.ex'
        })

        expect(user.status).toBe(201)
    })
})