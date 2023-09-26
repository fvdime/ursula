import AuthForm from "@/components/AuthForm";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-full w-full fixed">
      {/* <Image src="/Roman.jpg" alt="" fill className='z-[-10] object-cover'/> */}
      <div className="bg-black w-full h-full bg-opacity-25">
        <nav className="text-3xl font-semibold text-gray-100 p-3">
          <Link href="/" className="flex items-center">
            <h1 className="pr-2">✧</h1>
            <span className="self-center text-2xl font-semibold whitespace-nowrap uppercase">
              ursula
            </span>
          </Link>
        </nav>
        <div className="max-w-screen-lg mx-auto flex items-center justify-center">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default page;
