import React, {useState} from 'react'

import {CreateTitle, CreateCardContainer, CreateButton} from '../../StyledComponents/CreateCard'

import api from '../../Services/api'

const CreateCard = () => {

    const[user, setUser] = useState({nome: '', email: '', telefone: '', cpf: ''})
 
    const handleInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]: value})           
    }

    const createUser = async (e) => {
        e.preventDefault()
        let {nome, email, cpf, telefone} = user        
        let res = await api.post('/user', {
            nome,
            email,
            cpf,
            telefone
        })       
        
        if(res.status != 200){
            console.log(res)
            return false
        }else{            
            let user = res.data
            console.log(user)            
            // TODO => Atualizar array para novos usuarios
        }                     
    }


    return(
        <CreateCardContainer>
            <CreateTitle>Crie um novo usuário</CreateTitle>
            <form action="">
                <input name="nome" onChange={handleInput} type="text" placeholder="Nome" value={user.nome}/>
                <input name="email" onChange={handleInput} type="email" placeholder="E-mail" value={user.email}/>
                <input name="telefone" onChange={handleInput} type="phone" placeholder="Telefone" value={user.telefone}/>
                <input name="cpf" onChange={handleInput} type="text" placeholder="CPF" value={user.cpf}/>

                <CreateButton onClick={createUser}>Criar</CreateButton>
            </form>
        </CreateCardContainer>
    )
}

export default CreateCard