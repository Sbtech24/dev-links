"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Envelope,LockKey} from "@phosphor-icons/react";

const page = () => {
  return (
    <div className='max-w-xs sm:max-w-sm mx-auto p-3 md:flex md:flex-col md:gap-3 md:items-center md:justify-center h-screen'>
        <header className='flex items-center ml-0 '>
            <Image src={`/devlinks-logo.svg`} alt="" width={40} height={40}/>
            <h1 className='font-bold text-2xl text-darkGrey'>devlinks</h1>
        </header>

        <div className='pt-4 sm:bg-white sm:p-9 rounded-md'>
            <h3 className='font-bold pb-2 text-darkGrey text-xl '>Login</h3>
            <p className='text-grey pb-2 text-sm leading-6 mb-3'>Add your details below to get back into the app</p>

            <form action="">
                <label htmlFor="" className='block text-sm text-darkGrey'>Email address</label>
                <div className="relative w-full ">
                    <Envelope className="absolute left-3 top-1/3 -translate-y-1" size={20} color='#737373'/>
                    <input type="email" name="Email address" id="" className='input-style' placeholder='e.g.alex@email.com'/>  
                </div>

                <label htmlFor="password" className='block text-sm pt-4 text-darkGrey'>Password</label>
                <div className='relative w-full'>
                    <LockKey className='absolute top-1/3 left-3 -translate-y-1' size={20} color='#737373'/>
                <input type="password" name="Password" id="" className='input-style' placeholder='Enter your password' />
                    
                    </div> 
               
                
                <button className='text-white bg-purple w-full p-2 mt-2 mb-1 rounded-md'>Login</button>
            </form>

            <div className='flex flex-col justify-center text-center mt-3'>
                <p className='text-grey'>Don't have an account?</p>
                <Link href="/auth/register" className='text-purple '>Create account</Link>
            </div>
        </div>
    </div>
  )
}

export default page