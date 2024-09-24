import Image from "next/image";
import pic from "../images/pic.jpg"

export default function Home() {
  return (
    <div className="flex justify-center">
    <div className="h-[600px] w-[800px] bg-gradient-to-r from-purple-200 to-slate-300 bg-gradient-to-l 
    hover:bg-gradient-to-r">
    <div className="flex justify-between items-center">
      <div className="">
        <h1 className="pl-6 text-5xl font-bold text-gray-600 italic	italic hover:not-italic"> Farah Shabir</h1>
        <h1 className="pl-6 text-4xl text-gray-800">Shabir Ahmed</h1>
        <h1 className="pl-6 text-3xl text-purple-400 text-slate-500 hover:text-gray-400 font-bold">Certified Cloud
            <br></br>
            Applied Generative AI
            <br></br>
            Engineer (GenEng)</h1>
            <br></br>
            <p className="pl-6 text-1xl text-fuchsia-950 font-bold">
              I m a Web Developer
            </p>
      </div>
      <div className="bg-gradient-to-r from-gray-300 to-gray-500 h-[auto] mr-4">
        <div>
          <Image 
          src={pic}
          alt="pic"
          className="w-[200px] h-[200px] rounded-full rounded hover:rounded-lg" />
        </div>
        </div>
    </div>
    </div>
    </div>
  );
}
