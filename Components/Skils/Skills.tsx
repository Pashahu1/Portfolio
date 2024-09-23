import {SkillsItem} from "@/Components/Skils/SkillsItem";
import {SkillsLanguage} from "@/Components/Skils/SkillsLanguage";

export function Skills() {
    return(
        <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
           <h1 className='heading'>Education & <span className='text-yellow-500'>Skils</span></h1>
            <div
                className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
                <div>
                    <SkillsItem title='React Developer' year='2022-2024'/>
                    <SkillsItem title='Designer' year='2022-2024'/>
                    <SkillsLanguage
                        skill1='html'
                        skill2='css'
                        skill3='javascript'
                        level1='w-[91%]'
                        level2='w-[90%]'
                        level3='w-[90%]'
                    />
                </div>
                <div>
                    <SkillsItem title='Next JS' year='2023-2024' />
                    <SkillsItem title='Node Js' year='2023-2024'/>
                    <SkillsLanguage
                        skill1='React Js Developer'
                        skill2='Next JS Developer'
                        skill3='TypeScript Developer'
                        level1='w-[71%]'
                        level2='w-[60%]'
                        level3='w-[95%]'
                    />
                </div>
            </div>
        </div>
    )
}