import { Bars3Icon } from "@heroicons/react/20/solid";
import {OpenBar} from '@/base'

export default function Nav({openNav}: OpenBar): JSX.Element {
    return (
        <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-mb">
            <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
                <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold text-yellow-500">
                    WEB
                    <span className="text-white">DEV</span>
                </h1>
                <div className="nav-link">Home</div>
                <div className="nav-link">Service</div>
                <div className="nav-link">About</div>
                <div className="nav-link">Project</div>
                <div className="nav-link">Contact</div>
                <div onClick={openNav}>
                    <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-500" />
                </div>
            </div>
        </div>
    )
}