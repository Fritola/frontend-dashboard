import React, {useEffect, useState} from 'react'
import {
    CardUserContainer, 
    CardsContainer, 
    IconsContainer, 
    ClientInfo, 
    ClientInfoContainer
} from '../../StyledComponents/CardUser'

import api from '../../Services/api'
import { Edit, Trash2 } from 'react-feather';


const CardUser = () => { 

    const[clients, setClients] = useState([])

    const getUsers = async () => {
        let res = await api.get('/user')        
        let { users } = res.data
        setClients(users)
    }    

    const deleteUser = async (id) => {        
        let res = await api.delete('/user/'+id)        
        if(res.status != 204){
            console.log("Error")
            return false
        }
    }

    useEffect(() => {
        getUsers()        
    }, [])        

    return(
        <CardsContainer>
        {clients.map((client, i) => (
            <CardUserContainer key={i}>
                <h1>{client.nome}</h1>

                <ClientInfoContainer>
                    <ClientInfo>Telefone: {client.telefone}</ClientInfo>
                    <ClientInfo>E-mail: {client.email}</ClientInfo>
                    <ClientInfo>CPF: {client.cpf}</ClientInfo>
                </ClientInfoContainer>

                <IconsContainer>
                    <Edit color="white" size={24} />
                    <Trash2 onClick={() => deleteUser(client._id)} color="white" size={24} />
                </IconsContainer>
            </CardUserContainer>
        ))}        
        </CardsContainer>
        
    )
}

export default CardUser