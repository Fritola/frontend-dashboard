import React, {useState} from 'react'

import {CreateTitle, CreateCardContainer, CreateButton} from '../../StyledComponents/CreateCard'

import { useFetch } from '../../hooks/useFetch';
import api from '../../Services/api'

const EditCard = ({selectedUser}) => {    

    const[user, setUser] = useState(selectedUser)
    const[error, setError] = useState(false)
    const { data, mutate } = useFetch('/user')
    
    const editUser = async (e) => {
        e.preventDefault()        
        let {nome, email, cpf, telefone} = user  
        
        if(!nome || !email || !cpf || !telefone){
            setError(!error)
            return false
        }else{
            await api.put(`/user/${user._id}`, {
                nome,
                email,
                cpf,
                telefone
            })        
            mutate('/api/user')          
            setUser('')
        }
    }
 
    const handleInput = e => {
        setError(false)
        const {name, value} = e.target
        setUser({...user, [name]: value})           
    }
    
    return(
        <CreateCardContainer>
            <CreateTitle>Edite o usuário</CreateTitle>
            <form action="">
                <input name="nome" onChange={handleInput} type="text" placeholder="Nome" value={user.nome}/>
                <input name="email" onChange={handleInput} type="email" placeholder="E-mail" value={user.email}/>
                <input name="telefone" onChange={handleInput} type="phone" placeholder="Telefone" value={user.telefone}/>
                <input name="cpf" onChange={handleInput} type="text" placeholder="CPF" value={user.cpf}/>
                {error && <p>*Faltam dados</p>}
                <CreateButton onClick={editUser}>Editar</CreateButton>
            </form>
        </CreateCardContainer>
    )
}

export default EditCard