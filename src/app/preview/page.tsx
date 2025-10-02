
import Link from 'next/link'
import { getProfile } from '@/lib/fetchProfile'



const Preview = async () => {
  const profile = await getProfile()
  console.log(profile)


  return (
    <div className='bg-white '>
        <div className='flex justify-between mx-auto gap-2 items-center m-2 p-2'>
            <Link href="/"><button className='text-purple border-2 border-solid border-purple bg-white rounded-md w-32 p-2 text-sm'>Back to Editor</button></Link>
            <Link href="/"><button className='text-white bg-purple rounded-md w-32 p-2 '>Share Link</button></Link>
        </div>

        <div className='max-w-sm flex flex-col justify-center text-center py-3 mx-auto '>
            <img src="./user.svg" className='max-w-1/2 mx-auto' alt="" />
            <h3 className='text-2xl text-gray-950 font-semibold'>{profile.first_name}</h3>
            <p className='text-sm text-grey'>{profile?.email}</p>


            <div className='flex flex-col py-5'>
            <Link href="/"><button className='text-white bg-black p-4 w-1/2 rounded-md my-3'>Github</button></Link>
            <Link href="/"><button className='text-white bg-red p-4 w-1/2 rounded-md my-3' >Youtube</button></Link>
            <Link href="/"><button className='text-white bg-blue-500 p-4 w-1/2 rounded-md my-3'>Linkedn</button></Link>
            </div>
        </div>
        
    </div>
  )
}

export default Preview