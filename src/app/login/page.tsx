import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div className='max-w-xs sm:max-w-sm mx-auto p-4 '>
        <header className='flex items-center'>
            <Image src={`/devlinks-logo.svg`} alt="" width={40} height={40}/>
            <h1 className='font-bold'>devLinks</h1>
        </header>

        <div>
            <h3 className='font-bold'>Login</h3>
            <p className='text-grey'>Add your details below to get back into the app</p>

            <form action="">
                <label htmlFor="" className='block'>Email address
                <input type="email" name="Email address" id="" className='block border-2 border-lightGrey' placeholder='e.g.alex@email.com'/> </label>

                <label htmlFor="password" className='block'>Password  
                <input type="password" name="Password" id="" className='block border-2 border-lightGre' placeholder='Enter your password' />
                </label>
                
                <button className='text-white bg-purple w-full p-1'>Login</button>
            </form>

            <div className='flex flex-col justify-center text-center'>
                <p className='text-grey '>Don't have an account?</p>
                <Link href="/register" className='text-purple '>Create account</Link>
            </div>
        </div>
    </div>
  )
}

export default page