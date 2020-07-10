import React, {useState, useEffect} from 'react';
import LateralMenu from './Components/LateralMenu'
import CardUser from './Components/CardUser'
import CreateCard from './Components/CreateCard'

import {ContainerCreation} from './StyledComponents/CreateCard'

import api from './Services/api'
import './App.css';

function App() {
	
	const[user, setUser] = useState([])
    const[loading, setLoading] = useState(false)

    const generateUser = async () =>{
        let {data} = await api.get('https://randomuser.me/api/?nat=br')        
        const {results} = data
        setUser((results[0]))        
        setLoading(!loading)        
	}
	
	useEffect(() => {
		generateUser()
	},[])
	
	return (
		<div className="App">
			{loading != false &&
			<>
				<LateralMenu user={user}/>
				<div className="ContentContainer">					
					<CardUser/>
				</div>
				{/* <ContainerCreation>
					<CreateCard/>
				</ContainerCreation> */}
			</>}			
		</div>
	);
}

export default App;
