"use client"
import Header from "../../components/Header";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {useForm,SubmitHandler} from "react-hook-form"
import { useState } from "react";
import updateProfile from "@/lib/profile";

interface ProfileType{
  firstName:string,
  lastName:string,
  email:string,
  file?:File
}

const page = () => {
  const [file,setFile] = useState<File | null>(null)
  const {register,handleSubmit,reset} = useForm<ProfileType>()

  const onSubmit :SubmitHandler<ProfileType> = async(data:any)=>{
   try{
    await updateProfile(data.firstName,data.lastName,data.email,file || undefined)
    
    reset()
    setFile(null)
    alert("Profile Updated Successfully")
   }catch(err:any){
    console.log(err)
    alert(err.message)
   }
  }
  return (
    <div className="sm:max-w-screen-xl mx-auto mt-4 ">
      <Header />

      <div className="md:flex w-full gap-6 mt-4">
        {/* To become a dynamic component */}
        <div className="hidden md:block bg-white w-3/6 border-none rounded-md">
          <div className="w-1/2 mx-auto relative">
            <Image
              src={`links-preview.svg`}
              className="w-6/12 mx-auto mt-7 mb-auto"
              width={20}
              height={20}
              alt="Links preview desktop"
            />
          </div>
        </div>

        {/* Profile Details */}

        <div className="p-3">
          <div className="bg-white p-1 max-w-sm mx-auto sm:max-w-full md:w-3/6 ml-auto border-none rounded-md">
            <div className="bg-white p-3 m-2 ">
              <h2 className="font-bold text-black text-xl">Profile Details</h2>
              <p className="text-grey my-2">
                Add your details to create a personal touch to your profile{" "}
              </p>

              <div className="bg-lightGrey py-4 pr-14 pl-6 my-2 rounded-lg">
                <p className="text-lg mb-2 text-grey">Profile picture</p>

                <div className="bg-lightPurple py-16 text-center rounded-lg ">
                  <Icon
                    icon="ph:image"
                    style={{
                      color: "#633CFF",
                      fontSize: "3em",
                      margin: "0px auto",
                    }}
                  />
                  <p className="text-purple font-bold">+Upload Image </p>
                </div>

                <p className="mt-3 mb-0">
                  Image must be below 1024 * 1024.Use PNG or JPG format
                </p>
              </div>

              <div className="bg-lightGrey p-5 rounded-lg">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="" className="block text-gray-800 my-3">
                    First name*
                    <input
                      type="text"
                      className="input-style"
                      placeholder="Ben"
                      {...register("firstName",{required:true})}
                    />
                  </label>

                  <label htmlFor="" className="block text-gray-800 my-3">
                    Last name*
                    <input
                      type="text"
                      className="input-style"
                      placeholder="Wright"
                      {...register("lastName",{required:true})}

                    />
                  </label>

                  <label htmlFor="" className="block text-gray-800 my-3">
                    Email*
                    <input
                      type="email"
                      placeholder="ben@example.com"
                      className="input-style "
                      {...register("email")}
                    />
                  </label>
                    <div className="py-4">
              <div className="border border-lightGrey m-2"></div>
              <button className="text-white bg-purple p-2 border rounded-md w-full sm:w-1/5 block ml-auto">
                save
              </button>
            </div>
                </form>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
