import {XMarkIcon} from "@heroicons/react/20/solid";
import {CloseBar} from '@/base'

export default function MobileNav({nav, closeNav}: CloseBar)  {

    const navAnimation = nav ? 'translate-x-0' : 'translate-x-[100%]'


    return (
        <div
            className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
        >
            <ul className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
                <li className="nav-link-mobile">Home</li>
                <li className="nav-link-mobile">Service</li>
                <li className="nav-link-mobile">About</li>
                <li className="nav-link-mobile">Project</li>
                <li className="nav-link-mobile">Contact</li>
            </ul>

            <div onClick={closeNav} className="absolute z-[1000000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400">
                <XMarkIcon />
            </div>
        </div>
    )
}