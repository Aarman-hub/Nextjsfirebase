import React, {useState} from 'react';
import firebase from '../firebase';
import {useRouter} from 'next/router';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';


const login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();


  const loginHandler = async () =>{
    
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user=>{
      console.log(user)
    })
    .catch(err=>{
      console.log(err)
      toast.error(err.message)
    })
  }

  return (
    <div className="container">
      <h2 className="text-center pt-2">Login</h2>
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
            <button onClick={loginHandler} className="btn btn-primary">Login</button>
          </div>
      </div>
    </div>
  )
}


export default login