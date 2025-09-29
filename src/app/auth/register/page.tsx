"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {EnvelopeSimpleIcon,LockKeyIcon} from "@phosphor-icons/react";

const RegisterPage = () => {
  return (
    <div className='p-7 sm:max-w-md mx-auto md:flex md:flex-col  md:gap-4 md:items-center md:justify-center h-screen'>
        <header className='pb-4 flex items-center'>
            <Image src={`/devlinks-logo.svg`} alt="" width={40} height={40}/>
            <h1 className='font-bold text-3xl text-darkGrey'>devlinks</h1>
        </header>

        <div className='pt-4 sm:bg-white sm:p-9 rounded-md'>
            <h3 className='font-bold pb-2 text-darkGrey text-xl sm:text-2xl'>Create Account</h3>
            <p className='text-grey pb-2 text-base leading-6 mb-3'>Let's Get you started sharing your links</p>

            <form action="" className='flex flex-col gap-5'>
                <label htmlFor="" className='block text-sm text-darkGrey'>Email address
                <div className="relative w-full ">
                    <EnvelopeSimpleIcon weight='fill' className="absolute left-3 top-1/3 -translate-y-1" size={20} color='#737373'/>
                    <input type="email" name="Email address" id="" className='input-style text-[#333333]' placeholder='e.g.alex@email.com'/>  
                </div>
                </label>

                <label htmlFor="password" className='block text-sm text-darkGrey'>Password
                <div className='relative w-full'>
                    <LockKeyIcon weight='fill' className='absolute top-1/3 left-3 -translate-y-1' size={20} color='#737373'/>
                <input type="password" name="Password" id="" className='input-style text-[#333333]' placeholder='At least .8 Characters' />
                    
                    </div> 
               </label>

                <label htmlFor="confirm-password" className='block text-sm text-darkGrey '>Confirm Password
                <div className='relative w-full'>
                    <LockKeyIcon weight='fill' className='absolute top-1/3 left-3 -translate-y-1' size={20} color='#737373'/>
                <input type="password" name="confirm-password" id="" className='input-style text-[#333333]' placeholder='At least .8 Characters' />
                    
                    </div> 
               </label>
                
                <button className='text-white bg-purple w-full p-2 mt-2 mb-1 rounded-md '>Create new account</button>
            </form>

            <div className='flex flex-col justify-center text-center mt-3 sm:flex-row gap-2'>
                <p className='text-grey'>Already Have an account?</p>
                <Link href="/auth/login" className='text-purple '>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage