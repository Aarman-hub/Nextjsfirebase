import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { Context } from '../context'
import styles from '../styles/Home.module.css';

export default function Home() {
  const {state} = useContext(Context);
  return (
    <>
      <div>
        <h1>Home</h1>
        {JSON.stringify(state)}
      </div>
    </>
  )
}
