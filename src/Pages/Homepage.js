import { React, useState, useEffect } from "react";
import axios from "axios";

function Homepage() {

    const [rooms, setRooms] = useState([]);

    useEffect(async () =>{
        try {
            const data = (await axios.get('/api/rooms/getallrooms')).data;
            setRooms(data);
        } catch (error) {
            console.log(error)
        }
    });

    return (
        <div>
            <h1>👋 Welcome to Homepage!</h1>
            <h3>Number of rooms available: { rooms.length }</h3>
        </div>
    )
}

export default Homepage

 