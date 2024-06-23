'use client'

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import CustomNavigationBar from "../component/navigation";
import CardComponent from "../component/card";
import PageBig from "./pagebig";
import { useEffect } from "react";

export default function AboutPage() {

    return(
        <main className="min-h-screen relative flex flex-col py-5">
			<div className="w-full px-5 sm:px-20 flex justify-center">
				<CustomNavigationBar/>
			</div>
			<div className="flex flex-col px-5 sm:px-24 mt-5 sm:mt-10">
                <PageBig/>
            </div>
            <div className="pl-5 pr-8 rounded-xl">
                <div className="overflow-x-auto px-5 pb-12 no-scrollbar">
                    <div className="flex flex-row sm:hidden mt-10 justify-between gap-5 w-fit">
                        {/* Row Description Desktop*/}
                        <div className="flex flex-col items-center w-full">
                            <p className="font-fruktur text-white text-3xl mb-2">Education</p>
                            <CardComponent message={['Telkom University', 'S1 Informatika', 'IPK 3.47/4.00']} year={'Sep 2020 - Mei 2024'}/>
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <p className="font-fruktur text-white text-3xl mb-2">Organization Experience</p>
                            <div className="flex gap-5">
                                <CardComponent message={['Kompilasi', 'Kumpulan Mahasiswa Pati', 'Divisi Pubdekdok dan', 'Humas']} year={'Feb 2021 - Mar 2021'}/>
                                <div className="">
                                    <CardComponent message={['Spritual Student', 'LDK Al-Fath Organization', 'Divisi Kemuslimahan']} year={'Oct 2021 - Nov 2021'}/>
                                </div>
                                <CardComponent message={['ISLAH', 'Islamic Motivation and Leadership Al-Fath', 'Divisi Logistik']} year={'Oct 2021 - Nov 2021'}/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <p className="font-fruktur text-white text-3xl mb-2">Work Exp.</p>
                            <CardComponent message={['PT. Pindo Deli', 'Pulp and Paper   ', 'IT Shared Service Center', 'Karawang, Indonesia']} year={'Aug 2023 - Sept 2023'}/>
                        </div>
                    </div>
                </div>
            </div>
			<div/>
            <img src="/photome.png" alt="" className="absolute sm:hidden xl:inline bottom-0 left-28 h-[300px] xl:h-[300px] 2xl:h-[350px]"/>
			<Image src={'/background1.png'} fill={true} quality={100} alt='' sizes="auto" className='hidden sm:flex absolute animate-fade object-cover -z-10'/>
			<Image src={'/responsive1.png'} fill={true} quality={100} alt='' sizes="auto" className='sm:hidden absolute animate-fade object-cover -z-10'/>
		</main>
    )
}