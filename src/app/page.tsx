import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <img src="" alt="" />
          <Link href=""></Link>
          <Link href="/profile"></Link>
          <Link href="/preview"></Link>
        </nav>
      </header>

      <div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>

        <div>
          <h1>Customize your links</h1>
          <p>Add/edit/remove links below and then share all your profiles with the world!</p>

          <button>+Add new link </button>

          <div>
            <img src="" alt="" />
            <h1>Let's get you started</h1>
            <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!

            </p>
          </div>

          <button>save</button>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
}
