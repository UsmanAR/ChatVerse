import { useState } from 'react';
import io from 'socket.io-client'
import Chat from './Chat';

const socket = io.connect("http://localhost:5005")




function App() {

  const [user,setUser] = useState("");
  const [room,setRoom] = useState("")

  const joinRoom=()=>{
    if(user!=="" && room!==""){
      socket.emit("join_room",room)
    }
  }
  return (
    <div  className="App">
   <h3>Join Chat </h3>
   <input type="text" placeholder='Usman' onChange={(event)=>{
  setUser(event.target.value)
   }}></input>
   <input type="text" placeholder='Room ID.' onChange={(event)=>{
    setRoom(event.target.value)
   }}></input>
   <button onClick={joinRoom}>Join Room</button>
   <Chat socket = {socket} user ={user} room = {room} />
    </div>
  );
}

export default App;
