"use client"
import Link from 'next/link'

import { useAuth } from '@/context/AuthContext'
import { useLinks } from '@/context/LinkContext'


const Preview =  () => {

  const {user }= useAuth()
  const {links} = useLinks()
 
  return (
    <div className='bg-white '>
        <div className='flex justify-between mx-auto gap-2 items-center m-2 p-2'>
            <Link href="/"><button className='text-purple border-2 border-solid border-purple bg-white rounded-md w-32 p-2 text-sm'>Back to Editor</button></Link>
            <Link href="/"><button className='text-white bg-purple rounded-md w-32 p-2 '>Share Link</button></Link>
        </div>

        <div className='max-w-sm flex flex-col justify-center text-center py-3 mx-auto '>
            <img src="./user.svg" className='max-w-1/2 mx-auto' alt="" />
            <h3 className='text-2xl text-gray-950 font-semibold'>{user?.first_name}</h3>
            <p className='text-sm text-grey'>{user?.email}</p>


            <div className='flex flex-col py-5'>
           {links.map((item,i)=>{
            return(
            <>
            <div className='text-black' key={i}>{item.url}</div>
            
            </>
            )
          })}
            </div>
        </div>
        
    </div>
  )
}

export default Preview