"use client";

import Image from "next/image";
import { useState, useContext } from "react";
import DevLink from "../components/Link/DevLink";
import LinkContext from "../context/LinkContext";
import Header from "../components/Header";
import { empty } from "@/assets";

export default function Home() {
  const { addLink } = useContext(LinkContext);
  const [display, setDisplay] = useState(true);

  // moved to the links context
  const handleAddLink = ()=>{
    addLink()
    setDisplay(false)
  }

  return (
    <div className="sm:max-w-screen-xl mx-auto mt-4 ">
      <Header />
      <div className="md:flex w-full gap-6 mt-4">
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

        <div className="p-3">
          <div className="bg-white pb-4 mx-auto sm:max-w-full md:w-3/6 ml-auto border-none rounded-md">
            <div className="bg-white p-3 m-2 ">
              <p className="font-bold">Customize your links</p>
              <p className="text-grey my-2">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
              <button
                className="text-purple p-2 border rounded-md border-purple w-full"
                onClick={handleAddLink}
              >
                +Add new link{" "}
              </button>
            </div>

            {display ? (
              <div className="py-4">
              <div className="border border-lightGrey m-2"></div>
              <section className="p-5 ">
                <div className="bg-lightGrey p-2 flex flex-col gap-3 rounded-md">

               
                <Image src={empty} alt="empty image" className="mx-auto" />

                <h2 className="text-darkGrey text-lg font-semibold text-center">Let's Get you Started</h2>

                <p className="text-sm text-center pb-4">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </p>
                 </div>
              </section>

            
            </div>
            ) : (
              <DevLink />
            )}

             <button className="text-white bg-purple p-2 border rounded-md mx-auto w-[90%] sm:w-1/5 block  hover:bg-[#BEADFF]">
                save
              </button>
          </div>
        </div>
      </div>

 
    </div>
  );
}
