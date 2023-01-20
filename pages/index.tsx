import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/login-card'

const Home: NextPage = () => {
  return (
    <div className='p-4'>
      <div className=' hidden flex flex-col rounded-lg filter drop-shadow-md bg-white
      flex-1 p-4  w-full p-3   text-base text-white bg-info hover:scale-110 gap-2 gap-3 flex-row w-full align-middle
      text-left font-normal font-semibold text-sm border-primary border rounded-lg p-3 
      grid grid-cols-2 grid-cols-4  rounded-lg p-3   text-base text-secondary bg-primary hover:scale-110
      text-primary bg-secondary
      ' />
      <Login handleSubmit={() => {}}/>
    </div>
  )
}

export default Home
