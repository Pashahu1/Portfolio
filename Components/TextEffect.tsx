import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                'Coder',
                1500,
                'Web developer',
                1500,
                'Designer',
                1500,
                'Programmer',
                1500,
            ]}
            wrapper="span"
            speed={50}
            className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
            repeat={Infinity}
        />
    );
};

export default TextEffect