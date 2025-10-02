"use client"
import Link from 'next/link'
import Image from 'next/image'
import {EnvelopeSimpleIcon,LockKeyIcon} from "@phosphor-icons/react";
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/superbase/client';
import { useForm,SubmitHandler } from 'react-hook-form';
import { FormType } from '@/types';


const superbase = createClient()

const LoginPage = () => {
    const {register,handleSubmit} = useForm<FormType>()
    const router = useRouter()

    const onsubmit: SubmitHandler<FormType> = async (data)=>{
            const {error} = await superbase.auth.signInWithPassword({
                email:data.email,
                password:data.password
            })
            if(error){
                 alert(error.message);
            }else{
                router.push("/")
            }
            
    }

  return (
    <>
    <div className='p-7 sm:max-w-md mx-auto md:flex md:flex-col md:gap-4 md:items-center md:justify-center h-screen'>
        <header className='pb-4 flex items-center'>
            <Image src={`/devlinks-logo.svg`} alt="" width={40} height={40}/>
            <h1 className='font-bold text-3xl text-darkGrey'>devlinks</h1>
        </header>

        <div className='pt-4 sm:bg-white sm:p-9 rounded-md'>
            <h3 className='font-bold pb-2 text-darkGrey text-xl sm:text-2xl'>Login</h3>
            <p className='text-grey pb-2 text-base leading-6 mb-3'>Add your details below to get back into the app</p>

            <form className='flex flex-col gap-5' onSubmit={handleSubmit(onsubmit)}>
                <label htmlFor="email" className='block text-sm text-darkGrey'>Email address
                <div className="relative w-full ">
                    {/* <EnvelopeSimpleIcon weight='fill' className="absolute left-3 top-1/3 -translate-y-1" size={20} color='#737373'/> */}
                    <input type="email" {...register("email",{required:true})} className='input-style text-[#333333]' placeholder='e.g.alex@email.com'/>  
                </div>
                </label>

                <label htmlFor="password" className='block text-sm text-darkGrey'>Password
                <div className='relative w-full'>
                    {/* <LockKeyIcon weight='fill' className='absolute top-1/3 left-3 -translate-y-1' size={20} color='#737373'/> */}
                <input type="password" {...register("password",{required:true,max:8})} id="password" className='input-style text-[#333333]' placeholder='Enter your password' />
                    
                    </div> 
               </label>
                
                <button className='text-white bg-purple w-full p-2 mt-2 mb-1 rounded-md'>Login</button>
            </form>

            <div className='flex flex-col justify-center text-center mt-3 sm:flex-row gap-2'>
                <p className='text-grey'>Don't have an account?</p>
                <Link href="/auth/register" className='text-purple '>Create account</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoginPage