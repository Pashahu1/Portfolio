import {CodeBracketSquareIcon, RocketLaunchIcon} from "@heroicons/react/20/solid";

export function Services() {
    return (
        <div className='bg-[#080D20] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
            <p className='heading'>
                My <span className='text-yellow-500'>Services</span>
            </p>
            <div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
                <article data-aos='fade-right' data-aos-delay='500'>
                    <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3d2d2]'/>
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Frontend</h1>
                        <p className='text-[15px] text-[#f9e9ec] font-normal'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dicta distinctio dolorem
                            dolorum ea eum explicabo itaque labore laudantium libero perferendis quae quam, quas quia
                            reiciendis repudiandae, ullam unde voluptate.
                        </p>
                    </div>
                </article>
                <article data-aos='zoom-in' data-aos-delay='300'>
                    <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3d2d2]'/>
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Designer</h1>
                        <p className='text-[15px] text-[#f9e9ec] font-normal'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dicta distinctio dolorem
                            dolorum ea eum explicabo itaque labore laudantium libero perferendis quae quam, quas quia
                            reiciendis repudiandae, ullam unde voluptate.
                        </p>
                    </div>
                </article>
                <article data-aos='fade-left' data-aos-delay='500'>
                    <div className='bg-purple-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[##d3d2d2]'/>
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Fullstake</h1>
                        <p className='text-[15px] text-[#f9e9ec] font-normal'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dicta distinctio dolorem
                            dolorum ea eum explicabo itaque labore laudantium libero perferendis quae quam, quas quia
                            reiciendis repudiandae, ullam unde voluptate.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
}
