import { useState, useEffect, useRef } from 'react';

import { IoCamera } from "react-icons/io5";

import Button from '../../UI/button/button';

import "./chatbox.css";

export default function ChatBox() {
    const [message, setMessage] = useState("");

    const cameraRef = useRef();

    const openCameraHandler = () => {
        cameraRef.current.click();
    }

    const sendMessageHandler = async (event) => {
        event.preventDefault();
        const response = await fetch("https://localhost:8080/message/{id}", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer + {token}"
            },
            body: JSON.stringify({ message })
        });
    };

    return (
        <div className="chatbox_wrapper">
            <div className="chatbox_user_message_right">
                <div>
                    <div>{message}</div>
                    <div>username</div>
                </div>
            </div>
            <form>
                <div className="chatbox_container">
                    <IoCamera onClick={openCameraHandler} className="chatbox_iconcamera"/>
                    <input ref={cameraRef} type="file" style={{display: "none" }} />
                    <input className="chatbox_input" type="text" placeholder="Aa" onChange={(e) => setMessage(e.target.value)} />
                    {message.trim().length !== 0 ? <Button clicked={sendMessageHandler}>send</Button>: null}
                </div>
            </form>
        </div>
    );
}