"use client"

import Image from "next/image";
import { useState,useContext} from "react";
import DevLink from "./components/Link/DevLink";
import LinkContext from "./context/LinkContext";
import Header from "./components/Header"
export default function Home() {

  const {addLink} = useContext(LinkContext)
  const [display,setDisplay] = useState(false)


  // moved to the links context 

  return (
    <div className="sm:max-w-screen-xl mx-auto mt-4 ">
      <Header/>
      <div className="md:flex w-full gap-6 mt-4">
        <div className="hidden md:block bg-white w-3/6 border-none rounded-md">
          <div className="w-1/2 mx-auto relative">
            <Image src={`links-preview.svg`} className="w-6/12 mx-auto mt-7 mb-auto" width={20} height={20} alt="Links preview desktop" />
          </div>
        </div>

        <div className="bg-white max-w-sm mx-auto sm:max-w-full w-3/6 ml-auto border-none rounded-md">
          <div className="bg-white p-3 m-2 ">
            <p className="font-bold">Customize your links</p>
            <p className="text-grey my-2">Add/edit/remove links below and then share all your profiles with the world!</p>
            <button className="text-purple p-2 border rounded-md border-purple w-full"  onClick={addLink}>+Add new link </button>

          </div>
         
         {display ? <div className="flex flex-col justify-center p-5 text-center bg-lightGrey max-width mx-auto">
            <Image src={`/started.svg`} width={150} height={150} alt="let's get you started img" className="mx-auto" />
            <h1 className="font-bold text-lg mb-2">Let's get you started</h1>
            <p className="text-grey mx-5">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
            </p>
          </div> : <DevLink/>}
          


          <div className="py-4">
            <div className="border border-lightGrey m-2"></div>
            <button className="text-white bg-purple p-2 border rounded-md w-full sm:w-1/5 block ml-auto">save</button>
          </div> 
        </div>
        
      </div>

      <div>
        
      </div>
    </div>
  );
}
