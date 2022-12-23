
export const roomHandler = (socket) => {
    socket.on('join-room', () => { // a new room 
        console.log("Meeting Started - user joined the room");
    })
}
