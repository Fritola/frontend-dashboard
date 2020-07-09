import styled from 'styled-components'

export const CardsContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
`

export const CardUserContainer = styled.div`
    background: #5a5df6;
    margin-left: 20px;
    width: 300px;
    height: 350px;
    border-radius: 10px;
    margin-top: 10px;
`
export const ClientInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ClientInfo = styled.h3`
    font-size: 14px;    
`

export const IconsContainer = styled.div`
    display: flex;    
    justify-content: space-around;

    svg{
        cursor: pointer;
    }
`