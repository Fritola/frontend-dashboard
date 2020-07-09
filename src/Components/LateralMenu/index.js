import React, {useState, useEffect} from 'react'
import {
    MenuContainer,
    AvatarMenu, 
    NameMenu,
    MenuUserContainer,
    MenuAdminStatus,
    MenuOptionsContainer
} from '../../StyledComponents/LateralMenu'
import api from '../../Services/api'
const LateralMenu = ({user}) => {  
    
    console.log(user)
    return(
        <>
        <MenuContainer>     
            <MenuUserContainer>
                <AvatarMenu src={user.picture.medium} alt=""/>
                <NameMenu>
                    Olá {user.name.first}
                </NameMenu>
                <MenuAdminStatus>Admin</MenuAdminStatus>
            </MenuUserContainer>
         
        </MenuContainer>
        </>
    )
}

export default LateralMenu