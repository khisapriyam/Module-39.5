import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId} = useParams();
    const[friend, setFriend] = useState({})//aikhane data ta array na but akta object pacchi taile object er default value hobe empty akta object
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))//data jokhon load kore tokhon state declare korte hoi
    }, [])
    return (
        <div>
            <p>This is friend detail component {friendId}</p>
            <h3>{friend.name}</h3>{/**destrucute kori nai tai direct liktesi */}
            <p>Email: {friend.email}</p>
            <p>phone: {friend.phone}</p>
            <p>website: {friend.website}</p>
        
        </div>
    );
};

export default FriendDetail;