"use client"
import Link from 'next/link'
import Image from 'next/image'
import {Envelope,LockKey} from "@phosphor-icons/react";


const Register = () => {
  return (
     <div className='sm:max-w-md mx-auto p-3 md:flex md:flex-col md:gap-4 md:items-center md:justify-center h-screen'>
        <header className='flex items-center'>
            <Image src={`/devlinks-logo.svg`} alt="" width={40} height={40}/>
            <h1 className='font-bold text-2xl text-darkGrey'>devlinks</h1>
        </header>

        <div className='pt-4 sm:bg-white sm:p-9 rounded-md'>
            <h3 className='font-bold pb-2 text-darkGrey text-xl sm:text-2xl'>Create Account</h3>
            <p className='text-grey pb-2 text-sm leading-6 mb-3'>Let’s get you started sharing your links!</p>

            <form action="" className='flex flex-col gap-3'>
                <label htmlFor="" className='block text-sm text-darkGrey'>Email address
                <div className="relative w-full ">
                    <Envelope className="absolute left-3 top-1/3 -translate-y-1" size={20} color='#737373'/>
                    <input type="email" name="Email address" id="" className='input-style text-[#333333]' placeholder='e.g.alex@email.com'/>  
                </div>
                </label>

                <label htmlFor="password" className='block text-sm text-darkGrey'>Password
                <div className='relative w-full'>
                    <LockKey className='absolute top-1/3 left-3 -translate-y-1' size={20} color='#737373'/>
                <input type="password" name="Password" id="" className='input-style text-[#333333]' placeholder='At least 8 characters' />
                    
                    </div> 
               </label>

                <label htmlFor="confirm-password" className='block text-sm text-darkGrey'>Confirm Password
                <div className='relative w-full'>
                    <LockKey className='absolute top-1/3 left-3 -translate-y-1' size={20} color='#737373'/>
                <input type="password" name="Password" id="" className='input-style text-[#333333]' placeholder='At least 8 characters' />
                    
                    </div> 
               </label>
                
                <button className='text-white bg-purple w-full p-2 mt-2 mb-1 rounded-md'>Create New Account</button>
            </form>

            <div className='flex flex-col justify-center text-center mt-3 sm:flex-row gap-2'>
                <p className='text-grey'>Already have an account?</p>
                <Link href="/auth/login" className='text-purple '>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Register