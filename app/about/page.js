/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import CustomNavigationBar from "../component/navigation";
import CardComponent from "../component/card";

export default function AboutPage() {
    return(
        <main className="min-h-screen relative flex flex-col py-5">
			<div className="w-full px-5 sm:px-20 flex justify-center">
				<CustomNavigationBar/>
			</div>
			<div className="flex flex-col px-5 sm:px-24 mt-5 sm:mt-10">
                {/* About Me Description */}
                <div className="bg-[#1A2374]/50 px-8 py-5 rounded-xl">
                    <p className="text-white font-semibold text-lg">
                    Saya, Kania Ardhani Putri, adalah lulusan baru dari Telkom University dengan gelar Sarjana (S1) Informatika. 
                    Saya memiliki keterampilan kuat dalam pemecahan masalah dan semangat belajar yang tinggi, serta siap untuk berkontribusi dalam lingkungan kerja kolaboratif. 
                    Pengalaman saya mencakup kerja tim yang solid dan minat yang besar dalam  bidang  informatika, UI/UX, pengeditan konten digital, dan bidang terkait lainnya. 
                    Saya telah aktif terlibat dalam beberapa proyek perancangan antarmuka pengguna, pembuatan desain website, 
                    serta pengembangan program komputer untuk klasifikasi pneumonia menggunakan GAN dan algoritma genetika, mencapai tingkat akurasi 95%. Saat ini, 
                    saya sedang mencari peluang untuk mengembangkan karir profesional saya.
                    </p>
                </div>

                {/* Row Description */}
                <div className="flex w-full justify-between mt-16">
                    <div className="flex flex-col items-center w-full">
                        <p className="font-fruktur text-white text-3xl">Education</p>
                        <CardComponent message={['Telkom University', 'S1 Informatika', 'IPK 3.47/4.00']} year={'Sep 2020 - Mei 2024'}/>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <p className="font-fruktur text-white text-3xl">Organization Experience</p>
                        <div className="flex gap-10">
                            <CardComponent message={['Kompilasi', 'Kumpulan Mahasiswa Pati', 'Divisi Pubdekdok dan', 'Humas']} year={'Feb 2021 - Mar 2021'}/>
                            <div className="mt-10">
                                <CardComponent message={['Spritual Student', 'LDK Al-Fath Organization', 'Divisi Kemuslimahan']} year={'Oct 2021 - Nov 2021'}/>
                            </div>
                            <CardComponent message={['ISLAH', 'Islamic Motivation and Leadership Al-Fath', 'Divisi Logistik']} year={'Oct 2021 - Nov 2021'}/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <p className="font-fruktur text-white text-3xl">Education</p>
                        <div>Education 1</div>
                    </div>
                </div>
            </div>
			<div/>
            <img src="/photome.png" alt="" className="absolute bottom-0"/>
			<Image src={'/background1.png'} fill={true} quality={100} alt='' sizes="auto" className='hidden sm:flex absolute animate-fade object-cover -z-10'/>
			<Image src={'/responsive1.png'} fill={true} quality={100} alt='' sizes="auto" className='sm:hidden absolute animate-fade object-cover -z-10'/>
		</main>
    )
}