import styled from 'styled-components'

export const ContainerCreation = styled.div`
@media (max-width: 836px) { 
    display: none;
}
    background: #f4f7fb;
    display: flex;
    justify-content: center;    
    margin-top: 1%;
    height: 30vw;
    width: 400px;
    min-width: 450px;
    margin-right: 50px;      
    margin-left: 50px;      
    border-radius: 10px;   
    p{
        font-size: 14px;
        color: #f00;
    }

    @media (max-width: 1200px) { 
        height: 40vw;
        width: 70%;
        margin-top: 8%;
    }
    
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
        @media (max-width: 1200px) { 
            width: 290px;
        }              
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
    outline: none;
    cursor: pointer;
    margin-top: 10px;
    background: #5457f7;
    width: 120px;
    padding: 10px;
    border: none;
    border-radius: 15px;
`