import { useContext } from "react"
import { RoomContext } from "../context/roomContext"


export const JoinBtn = () => {
    const {ws} = useContext(RoomContext); 

    const joinRoom = () => {
        ws.emit('join-room'); 
    } 

    return (
        <>
            <button className="btn btn-success" onClick={joinRoom}>
                Start new Meeting 
            </button> 
        </>
    ) 
} 
