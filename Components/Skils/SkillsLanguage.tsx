import {Skillslanguage} from "@/base";

export function SkillsLanguage({skill1, skill2, skill3, level1, level2, level3}: Skillslanguage) {
    return(
        <div>
            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text=[20px] font-bold'>
                    {skill1}
                </h1>
                <span className={`${level1} bottom-0 h-[6px] absolute bg-[#031AC6]`}></span>
            </div>
            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text=[20px] font-bold'>
                    {skill2}
                </h1>
                <span className={`${level2} bottom-0 h-[6px] absolute bg-[#031AC6]`}></span>
            </div>
            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text=[20px] font-bold'>
                    {skill3}
                </h1>
                <span className={`${level3} bottom-0 h-[6px] absolute bg-[#031AC6]`}></span>
            </div>
        </div>
    )
}