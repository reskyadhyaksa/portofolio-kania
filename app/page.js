import Image from "next/image";
import CustomNavigationBar from "./component/navigation";

export default function Home() {
   const linkresume = 'https://drive.google.com/uc?id=1Uk9N0GTRGY1jQuVJ3jVncKizJIfY6oAx&export=download'
   const linkporto = 'https://drive.usercontent.google.com/u/0/uc?id=1Z7TDDyJVq0-LWjAJQcj03ZE1mZSSqeP2&export=download'
   return (
      <main className="min-h-screen justify-between relative flex flex-col py-5">
			<div className="w-full px-5 sm:px-20 flex justify-center ">
				<CustomNavigationBar/>
			</div>
			{/* Mobile Text */}
			<div className="flex flex-col items-center place-content-center mb-28">
				<a className="font-fruktur bg-[#32399190] sm:bg-transparent rounded-full px-10 py-2 md:mb-4 text-4xl md:text-10xl xl:text-11xl text-white">Portofolio</a>
				<a className="button-background text-white px-16 text-xl py-1 mt-2 rounded-full">Hire Me</a>
				<a href={linkporto} target="_blank" className="button-background text-white px-12 text-xl py-1 mt-2 rounded-full" >Download Portofolio</a>
				<a href={linkresume} target="_blank" className="button-background text-white px-10 text-xl py-1 mt-2 rounded-full">Download Resume</a>
			</div>
			<div/>
			<Image src={'/background1.png'} fill={true} quality={100} alt='' sizes="auto" className='hidden sm:flex absolute animate-fade object-cover -z-10'/>
			<Image src={'/responsive1.png'} fill={true} quality={100} alt='' sizes="auto" className='sm:hidden absolute animate-fade object-cover -z-10'/>
		</main>
   );
}
