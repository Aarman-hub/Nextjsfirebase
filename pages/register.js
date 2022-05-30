import React, {useState} from 'react';
import firebase from '../firebase';
import {useRouter} from 'next/router';
import { toast } from 'react-toastify';


const register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();


  const registerHandler = async () =>{

    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user=>{
      console.log(user)
    })
    .catch(err=>{
      console.log(err)
      toast(err.message)
    })

  }

  return (
    <div className="container">
      <h2 className="text-center pt-2">Register</h2>
      <div className='col-md-6 col-md-offset-3'>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              className='form-control'
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
            <small>We will never share your email</small>
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
          <div className='pt-2'>
            <button onClick={registerHandler} className="btn btn-primary">Register</button>
          </div>
      </div>
    </div>
  )
}


export default register