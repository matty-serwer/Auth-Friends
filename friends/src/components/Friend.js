import React from 'react'

const Friend = (props) => {

    const removeFriend = () => {
        console.log(props.friend.id);
        props.removeFriend(props.friend.id);
    }

    return (
        <div>
            <h3>{props.friend.name}</h3>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
            <p onClick={removeFriend}>X Remove Friend</p>
        </div>
    )
}

export default Friend
