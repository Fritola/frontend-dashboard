import styled from 'styled-components'

export const MenuContainer = styled.div`
    width: 200px;    
    background: #212d4f;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 5px;
    @media (max-width: 480px) { 
        width: 30%;
    }
`

export const MenuUserContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    height: 30%;
`

export const AvatarMenu = styled.img`    
    border-radius: 60px;    
`

export const NameMenu = styled.span`
    font-size: 14px;
    color: #FFF;
`

export const MenuAdminStatus = styled.div`
    width: 80px;    
    background: #24b729;
    border-radius: 70px;
    margin-top: 10px;
`

export const MenuOptionsContainer = styled.div`
    padding: 20px;
    background: #181f36;
    color: #fff;
`