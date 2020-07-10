import React, {useState} from 'react'

import {CreateTitle, CreateCardContainer, CreateButton} from '../../StyledComponents/CreateCard'

import api from '../../Services/api'

import { useFetch } from '../../hooks/useFetch';

const CreateCard = () => {

    const[user, setUser] = useState({nome: '', email: '', telefone: '', cpf: ''})
    const[error, setError] = useState(false)

    const { data, mutate } = useFetch('/user')

    const createUser = async (e) => {
        e.preventDefault()        
        let {nome, email, cpf, telefone} = user   

        if(!nome || !email || !cpf || !telefone){
            setError(!error)
            return false
        }else{             
            mutate('/api/user', {...data.users, user}, false)
            
            await api.post('/user', {
                nome,
                email,
                cpf,
                telefone
            })

            mutate('/api/user')
            setUser({nome: '', email: '', telefone: '', cpf: ''})
        }
    }
 
    const handleInput = e => {
        setError(false)
        const {name, value} = e.target
        setUser({...user, [name]: value})           
    }

    return(
        <CreateCardContainer>
            <CreateTitle>Crie um novo usuário</CreateTitle>
            <form action="">
                <input name="nome" onChange={handleInput} type="text" placeholder="Nome" value={user.nome}/>
                <input name="email" onChange={handleInput} type="email" placeholder="E-mail" value={user.email}/>
                <input name="telefone" onChange={handleInput} type="phone" placeholder="Telefone" value={user.telefone}/>
                <input name="cpf" onChange={handleInput} type="text" placeholder="CPF" value={user.cpf}/>
                {error && <p>*Faltam dados</p>}
                <CreateButton onClick={createUser}>Criar</CreateButton>
            </form>
        </CreateCardContainer>
    )
}

export default CreateCard