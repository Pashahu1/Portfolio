import Particle from "@/Components/Particle";
import TextEffect from "@/Components/TextEffect";
import Image from "next/image";
import {ArrowDownIcon, PlayCircleIcon} from "@heroicons/react/20/solid";



export default function Hero() {
    return(
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center ">
            <Particle />
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                <div>
                    <h1 className='text-[35px] md:text-[50px] text-white font-bold '>
                        HI, i'M<span className='text-yellow-500 '>PAVLO!</span>
                    </h1>
                    <TextEffect/>
                    <p className='mt-[1.5rem] mb-[1.5rem] text-[20px] text-[#ffffff92]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deleniti hic quis,
                        reprehenderit
                        tenetur unde! Ad amet architecto at distinctio eius esse facilis, libero minima natus nemo, quam
                        quis unde!
                    </p>
                    <div className='flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            Download Cv
                            <ArrowDownIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                        </button>
                        <button className='flex items-center  space-x-2'>
                            <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]'/>
                            <p className='text-[20px] font-semibold text-white'>Watch The Video</p>
                        </button>
                    </div>
                </div>
                <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
                    <Image src="/images/u1.jpg" alt='user' layout="fill" className='object-cover rounded-full'/>
                </div>
            </div>
        </div>
    )
}