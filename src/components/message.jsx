import React from 'react';

export default function Message(props) {
return <div><h1>{props.message.author}{props.message.created_at}</h1>
            <p>{props.message.content}</p>
       </div>;
}