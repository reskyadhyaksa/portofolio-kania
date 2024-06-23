import CardComponent from "../component/card";

export default function PageBig() {
    return(
        <>
            {/* About Me Description */}
            <div className="bg-[#1A2374]/50 px-8 py-5 rounded-xl">
                <p className="text-white font-semibold text-xs md:text-base h-40 lg:h-fit overflow-y-scroll scroll-trans no-scrollbar">
                Saya, Kania Ardhani Putri, adalah lulusan baru dari Telkom University dengan gelar Sarjana (S1) Informatika. 
                Saya memiliki keterampilan kuat dalam pemecahan masalah dan semangat belajar yang tinggi, serta siap untuk berkontribusi dalam lingkungan kerja kolaboratif. 
                Pengalaman saya mencakup kerja tim yang solid dan minat yang besar dalam bidang  informatika, UI/UX, pengeditan konten digital, dan bidang terkait lainnya. 
                Saya telah aktif terlibat dalam beberapa proyek perancangan antarmuka pengguna, pembuatan desain website, 
                serta pengembangan program komputer untuk klasifikasi pneumonia menggunakan GAN dan algoritma genetika, mencapai tingkat akurasi 95%. Saat ini, 
                saya sedang mencari peluang untuk mengembangkan karir profesional saya.
                </p>
            </div>

            {/* Row Description Desktop*/}
            <div className="hidden xl:flex w-full justify-between mt-16">
                <div className="flex flex-col items-center w-full">
                    <p className="font-fruktur text-white text-3xl mb-5">Education</p>
                    <CardComponent message={['Telkom University', 'S1 Informatika', 'IPK 3.47/4.00']} year={'Sep 2020 - Mei 2024'}/>
                </div>
                <div className="flex flex-col items-center w-full">
                    <p className="font-fruktur text-white text-3xl mb-5">Organization Experience</p>
                    <div className="flex gap-10">
                        <CardComponent message={['Kompilasi', 'Kumpulan Mahasiswa Pati', 'Divisi Pubdekdok dan', 'Humas']} year={'Feb 2021 - Mar 2021'}/>
                        <div className="mt-10">
                            <CardComponent message={['Spritual Student', 'LDK Al-Fath Organization', 'Divisi Kemuslimahan']} year={'Oct 2021 - Nov 2021'}/>
                        </div>
                        <CardComponent message={['ISLAH', 'Islamic Motivation and Leadership Al-Fath', 'Divisi Logistik']} year={'Oct 2021 - Nov 2021'}/>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full">
                    <p className="font-fruktur text-white text-3xl mb-5">Education</p>
                    <CardComponent message={['PT. Pindo Deli', 'Pulp and Paper   ', 'IT - Shared Service Center', 'Karawang, Indonesia']} year={'Aug 2023 - Sept 2023'}/>
                </div>
            </div>

            {/* Column Description Tablet */}
            <div className="hidden xl:hidden sm:flex flex-col w-full gap-20 mt-16 mb-20">
                <div className="flex w-full justify-evenly">
                    <div className="flex flex-col items-center scale-110">
                        <p className="font-fruktur text-white text-3xl mb-5">Education</p>
                        <CardComponent message={['Telkom University', 'S1 Informatika', 'IPK 3.47/4.00']} year={'Sep 2020 - Mei 2024'}/>
                    </div>
                    <div className="flex flex-col items-center scale-110">
                        <p className="font-fruktur text-white text-3xl mb-5 text-center">Work Experience</p>
                        <div className="">
                            <CardComponent message={['PT. Pindo Deli', 'Pulp and Paper    ', 'IT Shared', 'Service Center']} year={'Aug 2023 - Sept 2023'}/>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full">
                    <p className="font-fruktur text-white text-3xl mb-5">Organization Experience</p>
                    <div className="flex gap-10">
                        <CardComponent message={['Kompilasi', 'Kumpulan Mahasiswa Pati', 'Divisi Pubdekdok dan', 'Humas']} year={'Feb 2021 - Mar 2021'}/>
                        <div className="mt-10">
                            <CardComponent message={['Spritual Student', 'LDK Al-Fath Organization', 'Divisi Kemuslimahan']} year={'Oct 2021 - Nov 2021'}/>
                        </div>
                        <CardComponent message={['ISLAH', 'Islamic Motivation and Leadership Al-Fath', 'Divisi Logistik']} year={'Oct 2021 - Nov 2021'}/>
                    </div>
                </div>
            </div>
        </>
    )
}