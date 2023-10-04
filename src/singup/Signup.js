import React, { useState } from 'react'


export default function Signup() {

    const [text, setText] = useState({
        username: '',
        email: '',
        password: ''

    })

    const handleinput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setText({ ...text, [name]: value });
        console.log(text)
    }

    

    return (
        <>
            <form action="">
                
                <pre>{JSON.stringify(text)}</pre>
                <h1>Sign Up Form</h1>
                <div>
                    <label htmlFor="username">username : </label><br />
                    <input type="text" value={text.username} onChange={handleinput} name='username' id='username' placeholder='username'/>
                </div>
                <div>
                    <label htmlFor="email">email : </label><br />
                    <input type="email" value={text.email} onChange={handleinput} name='email' id='email'placeholder='email' />
                </div>
                <div>
                    <label htmlFor="password">password : </label><br />
                    <input type="password" value={text.password} onChange={handleinput} name='password' id='password'placeholder='password' />
                </div>
            </form>
        </>
    )
}
