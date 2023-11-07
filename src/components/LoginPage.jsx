import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginPage = () => {
  return (
    <>
        <form>
        <div className='lgdiv'>
        <div className='lgsubdiv'>
        <div className='imgdiv'>
        <div className='decor'>
        <h3>Welcome to FakeStore</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        
        </div>
        <div className='lg'>
            <h3>User Login</h3>
            <br />
            <input type='text' placeholder='Email/Username' className='inp' />
            <input type='password' placeholder='Password' className='inp'/>
            <br />
            <button className='lgbtn'> Login </button>
            <p>Doesn't Have An Account Yet ? <NavLink>SignUp</NavLink> </p>
        </div>
        </div>
        </div>
        </form>
    </>
  )
}

export default LoginPage