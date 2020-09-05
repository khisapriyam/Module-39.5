import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email,id} = props.friend;
    let history = useHistory();
    const handleClick = (friendsId) =>{
        const url = `/friend/${friendsId}`;
        history.push(url)
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style ={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            
            <button onClick={()=> handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;