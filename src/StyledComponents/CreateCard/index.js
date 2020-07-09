import styled from 'styled-components'

export const ContainerCreation = styled.div`
    background: #f4f7fb;
    display: flex;
    justify-content: center;    
    height: 25vw;
    margin-top: 2%;
    margin-left: 2%;
    border-radius: 10px;   

    width: 30%;
    margin-right: 50px;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    input{
        margin-top: 15px;
        margin-bottom: 5px;
        outline: none;
        width: 250px;
        padding: 15px;
        background: #eee;
        border: none;
        border-radius: 15px;        
    }
`

export const CreateCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const CreateTitle = styled.span`
    font-size: 24px;
    color: #abb1b7;    
`

export const CreateButton = styled.button`
    color: #fff;
    cursor: pointer;
    margin-top: 10px;
    background: #5457f7;
    width: 120px;
    padding: 10px;
    border: none;
    border-radius: 15px;
`