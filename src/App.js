import React, { useState } from 'react';
import List from './components/datalist';

const App = () => {
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        uphone: '',
        interest: ''
    });

    const [newData, setNewData] = useState({
        fname: '',
        lname: '',
        email: '',
        uphone: '',
        interest: ''
    });

    const inputValue = (e) => {
        const { name, value } = e.target;

        setData(preValue => {
            return {
                ...preValue,
                [name]: value
            }

            // if (name === 'fname') {
            //     return {
            //         ...data,
            //         fname: value
            //     }
            // }
            // else if (name === 'lname') {
            //     return {
            //         ...data,
            //         lname: value,
            //     }
            // }
            // else if (name === 'email') {
            //     return {
            //         ...data,
            //         email: value,
            //     }
            // }
            // else if (name === 'uphone') {
            //     return {
            //         ...data,
            //         uphone: value
            //     }
            // }
        });
    }

    const whenSubmit = (e) => {
        e.preventDefault();
        setNewData({
            ...data
        });
        window.alert('Form Submitted!');
    }

    return (
        <>
            <form onSubmit={whenSubmit}>
                <div>
                    <h1>Hello</h1>
                    {newData.fname !== "" ? <List datas={newData} /> : ''}
                    <input type="text" placeholder='Enter Your FullName' name='fname' onChange={inputValue} required />
                    <input type="text" placeholder='Enter Your LastName' name='lname' onChange={inputValue} required />
                    <input type="email" placeholder='Enter Your Email' name='email' onChange={inputValue} required />
                    <input type="number" placeholder='Enter Your Number' name='uphone' onChange={inputValue} required />
                    <input type="text" placeholder='Enter Your Interest' name='interest' onChange={inputValue} required />
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    );
}

export default App;