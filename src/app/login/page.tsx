import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div className='max-w-xs sm:max-w-sm mx-auto p-3'>
        <header className='flex items-center ml-0 '>
            <Image src={`/devlinks-logo.svg`} alt="" width={40} height={40}/>
            <h1 className='font-bold text-lg '>devlinks</h1>
        </header>

        <div className='pt-4'>
            <h3 className='font-bold pb-2'>Login</h3>
            <p className='text-grey pb-2 leading-6 mb-3'>Add your details below to get back into the app</p>

            <form action="">
                <label htmlFor="" className='block text-sm'>Email address
                <input type="email" name="Email address" id="" className='block border-2 border-lightGrey text-sm p-2 rounded-md w-full' placeholder='e.g.alex@email.com'/> </label>

                <label htmlFor="password" className='block text-sm pt-4'>Password  
                <input type="password" name="Password" id="" className='block border-2 border-lightGrey text-sm p-2 mb-2 rounded-md w-full' placeholder='Enter your password' />
                </label>
                
                <button className='text-white bg-purple w-full p-2 mt-2 mb-1 rounded-md'>Login</button>
            </form>

            <div className='flex flex-col justify-center text-center mt-3'>
                <p className='text-grey '>Don't have an account?</p>
                <Link href="/register" className='text-purple '>Create account</Link>
            </div>
        </div>
    </div>
  )
}

export default page