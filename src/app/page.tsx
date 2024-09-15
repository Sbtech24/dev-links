import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="bg-white p-3">
        <nav className="flex justify-between items-center">
          <Image src={`/dev-link-mobile.svg`} alt="" width={30} height={30} />
          <div className="flex gap-2 items-center">
          <Link href=""><Image src={`/clip-img.svg`} width={30} height={30} alt="links"/></Link>
          <Link href="/profile"><Image src={`/user-circle.svg`} width={30} height={30} alt="user"/> </Link>
          </div>
          
          <Link href="/preview"><Image src={`/preview.svg`} width={30} height={30} alt="preview"/></Link>
        </nav>
      </header>

      <div>
        <div className="hidden">
          <div>
            <img src="" alt="" />
          </div>
        </div>

        <div className="bg-white">
          <div className="bg-white p-3 m-2 ">
            <h1 className="font-bold ">Customize your links</h1>
            <p className="text-grey my-2">Add/edit/remove links below and then share all your profiles with the world!</p>
            <button className="text-purple p-2 border rounded-md border-purple w-full">+Add new link </button>

          </div>
          <div className="flex flex-col justify-center p-3 bg-lightGrey">
            <Image src={`/started.svg`} width={150} height={150} alt="let's get you started img " />
            <h1 className="font-bold text-lg">Let's get you started</h1>
            <p className="text-grey">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
            </p>
          </div>

          <button className="text-white bg-purple p-2 border rounded-md w-full">save</button>
        </div>
        
      </div>

      <div>
        
      </div>
    </div>
  );
}
