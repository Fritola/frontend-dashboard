import React, {useState} from 'react'
import {
    CardUserContainer, 
    CardsContainer, 
    IconsContainer, 
    ClientInfo, 
    ClientInfoContainer
} from '../../StyledComponents/CardUser'

import {ContainerCreation} from '../../StyledComponents/CreateCard'
import api from '../../Services/api'
import { Edit, Trash2 } from 'react-feather';
import { useFetch } from '../../hooks/useFetch';
import CreateCard from '../CreateCard'
import EditCard from '../EditCard'


const CardUser = () => { 
    const { data, mutate } = useFetch('/user') 
    const[edit, setEdit] = useState(false)
    const[selectedUser, setSelectedUser] = useState('')   
    
    const handleDelete = async (id) => {            
        await api.delete(`/user/${id}`)                
        mutate('/api/user')   
    }

    const handleEdit = (user) => {
        setSelectedUser(user)
        setEdit(!edit)
    }
    
    if(!data || !data.users){        
        return <p>Carregando...</p>
    }else{          
        console.log(data.users)          
        return(
            <>
                <ContainerCreation>
                    {edit == false && <CreateCard/>}
                    {edit == true && <EditCard selectedUser = {selectedUser}/>}
                </ContainerCreation>

                <CardsContainer>       
                    
                {data.users.map((client, i) => (
                    <CardUserContainer key={i}>
                        <h1>{client.nome}</h1>

                        <ClientInfoContainer>
                            <ClientInfo>Telefone: {client.telefone}</ClientInfo>
                            <ClientInfo>E-mail: {client.email}</ClientInfo>
                            <ClientInfo>CPF: {client.cpf}</ClientInfo>
                        </ClientInfoContainer>

                        <IconsContainer>
                            <Edit onClick={() => handleEdit(client)} color="white" size={24} />
                            <Trash2 onClick={() => handleDelete(client._id)} color="white" size={24} />
                        </IconsContainer>
                    </CardUserContainer>
                ))}
                </CardsContainer>
            </>
            
        )}
}

export default CardUser