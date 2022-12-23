import { createContext } from 'react'; 
import socketIOClient from 'socket.io-client'; 

const wsURL = 'http://localhost:8080'; 

export const RoomContext = createContext(null); 
const ws = socketIOClient(wsURL); 

export const RoomProvider = ({children}) => {
    return ( 
        <RoomContext.Provider value={{ws}}> 
            {children} 
        </RoomContext.Provider> 
    ) 
} 
