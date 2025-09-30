import React from "react";
import Header from "../../components/Header";
import Image from "next/image";
import { Icon } from "@iconify/react";

const page = () => {
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
                <form action="" className="">
                  <label htmlFor="" className="block text-gray-800 my-3">
                    First name*
                    <input
                      type="text"
                      className="p-2 w-full rounded-md border border-borders "
                      placeholder="Ben"
                    />
                  </label>

                  <label htmlFor="" className="block text-gray-800 my-3">
                    Last name*
                    <input
                      type="text"
                      className="p-2 w-full rounded-md border border-borders "
                      placeholder="Wright"
                    />
                  </label>

                  <label htmlFor="" className="block text-gray-800 my-3">
                    Email*
                    <input
                      type="email"
                      placeholder="ben@example.com"
                      className="block p-2 w-full rounded-md border border-borders "
                    />
                  </label>
                </form>
              </div>
            </div>

            <div className="py-4">
              <div className="border border-lightGrey m-2"></div>
              <button className="text-white bg-purple p-2 border rounded-md w-full sm:w-1/5 block ml-auto">
                save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
