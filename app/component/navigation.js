/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

/* eslint-disable @next/next/no-img-element */
export default function CustomNavigationBar() {
    const [ activeSend, setActiveSend ] = useState(false)
    const [ active, setActive ] = useState(false)
    const [ current, setCurrent ] = useState('');

    const path = usePathname();

    function checkpath(){
        const cleanedPath = path.replace(/^\/|\/$/g, '').replace(/\//g, '');
        if(path == '/'){
            setCurrent('home')
        }
        if(cleanedPath == 'about'){
            setCurrent('about')
        }
        if(cleanedPath == 'services'){
            setCurrent('services')
        }
        if(cleanedPath == 'portofolio'){
            setCurrent('portofolio')
        }
        console.log(current);
    }

    useEffect(() => {    
        return () => {
            checkpath()
        }
    }, [])
    

    return(
        <>
            <div className="sm:hidden flex flex-row justify-between place-items-center px-5 h-10 w-full bg-[#F9F9F9] rounded-full">
                <button onClick={() => setActive(!active)} className="flex flex-col gap-[2px] justify-center">
                    <hr className="h-1 w-5 outline-none border-none bg-[#9A00B3] rounded-full"/>
                    <hr className="h-1 w-5 outline-none border-none bg-[#9A00B3] rounded-full"/>
                    <hr className="h-1 w-5 outline-none border-none bg-[#9A00B3] rounded-full"/>
                </button>
                <div className="text-[#9A00B3] font-bold ml-2">
                    {current === 'home' && <p>Home</p>}
                    {current === 'about' && <p>About Me</p>}
                    {current === 'services' && <p>Services</p>}
                    {current === 'portofolio' && <p>Portofolio</p>}
                </div>
                <button onClick={() => setActiveSend(!activeSend)} className="bg-[#9A00B3] rounded-full font-bold text-white flex justify-center items-center px-[4px] py-[5px]">
                    <img src="/send.png" alt="" className="mr-[2px]"/>
                </button>
            </div>

            {/* Button Send Message */}
            {activeSend && <div className="absolute animate-zoomin flex flex-col left-[18%] top-[15%] py-3 rounded-lg items-center bg-white px-5">
                <h1 className="text-[#323991] font-bold mb-3">Send me a Message</h1>
                <div className="mb-2">
                    <p className="text-xs font-semibold ml-[1px]">Name</p>
                    <input type="text" className="outline-none bg-gray-200 rounded-md px-2 py-1 text-sm"/>
                </div>
                <div className="mb-2">
                    <p className="text-xs font-semibold ml-[1px]">Topic</p>
                    <input type="text" className="outline-none bg-gray-200 rounded-md px-2 py-1 text-sm"/>
                </div>
                <div className="w-full mb-2">
                    <p className="text-xs font-semibold ml-[1px]">Message</p>
                    <textarea type="text" className="outline-none w-full resize-none bg-gray-200 rounded-md px-2 py-1 text-sm"/>
                </div>
                <button className="bg-[#323991] mb-2 rounded-3xl font-bold text-white text-xs px-2 py-[4px]">
                    Send Message
                </button>
            </div>}

            {/* Button Tray Menu */}
            {active && <div className="bg-white animate-translateIn border-[#9A00B3] rounded-md left-7 top-16 border-[1px] flex flex-col absolute w-[140px] items-center text-base font-bold text-[#9A00B3]">
                <a href="/" className="border-b-2 border-b-gray-400 w-full text-center">Home</a>
                <a href="/about" className="border-b-2 border-b-gray-400 w-full text-center">About Me</a>
                <a href="/services" className="border-b-2 border-b-gray-400 w-full text-center">Services</a>
                <a href="/portofolio" className="w-full text-center">Portofolio</a>
            </div>}

            {/* Navigation Desktop */}
            <div className="hidden sm:flex w-full flex-col gap-3">
                <div className="hidden sm:flex bg-[#F9F9F9]/50 place-items-center w-full justify-between rounded-full px-2 py-1">
                    <div className="flex flex-row gap-2">
                        <img src="/photonav.png" alt="" className="h-14"/>
                        <div className="flex flex-col justify-center font-bold text-white text-xs lg:text-sm">
                            <p className="flex">Kania <span className="sm:hidden lg:flex ml-1">Ardhani Putri</span></p>
                            <p className="text-gray-300">Personal</p>
                        </div>
                    </div>
                    <div className="flex justify-center place-items-center sm:gap-5 md:gap-8 lg:gap-24 sm:text-xs md:text-sm font-medium text-white animate-fade">
                        <a href="/" className={`${ path === '/' ? 'text-[#9A00B3] font-extrabold' : 'text-white font-medium'} hover:font-extrabold hover:scale-105 flex flex-col place-items-center`}>
                            <p>Home</p>
                            { path === '/' && <hr className="animate-scale w-[30px] border-[#9A00B3] border-2 rounded-full"/>}
                        </a>
                        <a href="/about" className={`${ path === '/about' ? 'text-[#9A00B3] font-extrabold' : 'text-white font-medium'} hover:font-extrabold hover:scale-105 flex flex-col place-items-center`}>
                            <p>About Me</p>
                            { path === '/about' && <hr className="animate-scale w-[30px] border-[#9A00B3] border-2 rounded-full"/>}
                        </a>
                        <a href="/services" className={`${ path === '/services' ? 'text-[#9A00B3] font-extrabold' : 'text-white font-medium'} hover:font-extrabold hover:scale-105 flex flex-col place-items-center`}>
                            <p>Services</p>
                            { path === '/services' && <hr className="animate-scale w-[30px] border-[#9A00B3] border-2 rounded-full"/>}
                        </a>
                        <a href='/portofolio' className={`${ path === '/portofolio' ? 'text-[#9A00B3] font-extrabold' : 'text-white font-medium'} hover:font-extrabold hover:scale-105 flex flex-col place-items-center`}>
                            <p>Portofolio</p>
                            { path === '/portofolio' && <hr className="animate-scale w-[30px] border-[#9A00B3] border-2 rounded-full"/>}
                        </a>
                    </div>
                    <a className="flex h-fit justify-center place-items-center text-white px-2 lg:px-4 py-2 text-xs lg:text-sm gap-1 bg-[#FB33FF]/50 rounded-2xl">
                        <p>Text Me</p>
                        <img src="/send.png" alt="" className="h-4 lg:h-5"/>
                    </a>
                </div>
                <div className="px-7">
                    <hr className="w-full"/>
                </div>
            </div>
        </>
    )
}