import React from 'react';

const list = (props) => {
    return (
        <ul>
            <li>{props.datas.fname}</li>
            <li>{props.datas.lname}</li>
            <li>{props.datas.email}</li>
            <li>{props.datas.uphone}</li>
            <li>{props.datas.interest}</li>
        </ul>
    );
}

export default list;