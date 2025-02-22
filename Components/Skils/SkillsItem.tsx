import {Skills} from "@/base";


export function SkillsItem({title, year}: Skills) {
    return(
        <div className="mb-[4rem] md:mb-[8rem]">
            <span className='px-[2rem] text-[#157407] py-[0.9rem] font-bold text=[18px] border-[2px] border-[#157407]'>
                {year}
            </span>
            <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
                {title}
            </h1>
            <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci animi culpa doloribus eveniet, facilis hic illo molestias, nemo obcaecati omnis quas quasi quos rerum tempore unde voluptatibus voluptatum? Maxime!
            </p>
        </div>
    )
}