import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Register = () => {
  return (
    <div className='max-w-xs sm:max-w-sm mx-auto p-3'>
    <header className='flex items-center ml-0 '>
        <Image src={`/devlinks-logo.svg`} alt="" width={40} height={40}/>
        <h1 className='font-bold text-2xl text-darkGrey '>devlinks</h1>
    </header>

    <div className='pt-4'>
        <h3 className='font-bold pb-2 text-darkGrey text-lg'>Create account </h3>
        <p className='text-grey pb-2 leading-6 mb-3'>Let’s get you started sharing your links!</p>

        <form action="">
            <label htmlFor="" className='block text-sm text-darkGrey '>Email address
            <input type="email" name="Email address" id="" className='input-style' placeholder='e.g.alex@email.com'/> </label>

            <label htmlFor="create-password" className='block text-sm pt-4 text-darkGrey '>Create password  
            <input type="password" name="create-password" id="" className='input-style' placeholder='At Least .8 characters ' />
            </label>

            <label htmlFor="confirm-password" className='block text-sm pt-4 text-darkGrey '>Confirm password  
            <input type="password" name="confirm-password" id="" className='input-style' placeholder='At Least .8 characters' />
            <p>Password must contain at least 8 characters</p>
            </label>
            
            <button className='text-white bg-purple w-full p-2 mt-2 mb-1 rounded-md'>Create new account</button>
        </form>

        <div className='flex flex-col justify-center text-center mt-3'>
            <p className='text-grey '>Already have an account?</p>
            <Link href="/login" className='text-purple '>Login</Link>
        </div>
    </div>
</div>
  )
}

export default Register