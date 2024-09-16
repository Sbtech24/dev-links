import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="bg-white p-3">
        <nav className="flex justify-between items-center">
          <Image src={`/dev-link-mobile.svg`} className="sm:hidden" alt="" width={30} height={30} />
          <Image src={`/devlink-desktop.svg`} className="hidden sm:block" alt="" width={100} height={100} />
         
          <div className="flex gap-2 items-center">
            <div className="flex items-center">
            <Link href=""><Image src={`/clip-img.svg`} width={30} height={30} alt="links"/></Link>
            <p className="hidden sm:block" >Links</p>
          </div>
          <div className="flex items-center">
            <Link href="/profile"><Image src={`/user-circle.svg`} width={30} height={30} alt="user"/> </Link>
            <p className="hidden sm:block">Profile details</p>
          </div>
          </div>
          <Link href="/preview"><Image src={`/preview.svg`} width={30} height={30} alt="preview"/></Link>
        </nav>
      </header>

      <div className="md:flex">
        <div className="hidden md:block">
          <div>
            <Image src={`links-preview.svg`} width={100} height={100} alt="Links preview desktop" />
          </div>
        </div>

        <div className="bg-white max-w-sm mx-auto">
          <div className="bg-white p-3 m-2 ">
            <h1 className="font-bold ">Customize your links</h1>
            <p className="text-grey my-2">Add/edit/remove links below and then share all your profiles with the world!</p>
            <button className="text-purple p-2 border rounded-md border-purple w-full">+Add new link </button>

          </div>
          <div className="flex flex-col justify-center p-5 text-center bg-lightGrey max-width mx-auto">
            <Image src={`/started.svg`} width={150} height={150} alt="let's get you started img " className="mx-auto" />
            <h1 className="font-bold text-lg mb-2">Let's get you started</h1>
            <p className="text-grey mx-5">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
            </p>
          </div>
          <div className="py-4">
            <div className="border border-lightGrey m-2"></div>
            <button className="text-white bg-purple p-2 border rounded-md w-full">save</button>
          </div> 
        </div>
        
      </div>

      <div>
        
      </div>
    </div>
  );
}
