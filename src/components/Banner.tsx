import AnimationGif from './../assets/animation.gif';
import Background from './../assets/background.png';
import BlurIn from './magicui/blur-in';
import ShinyButton from './magicui/shiny-button';
import Image from 'next/image';

export default function Banner(props: { glob: string }) {
    return (
        <section className='relative bg-gradient-to-r from-light-green to-dark-green pt-48 -pb-20'>
            <Image
                src={Background}
                alt={'Background'}
                sizes='100%'
                priority
                fill
                className='h-full w-full object-cover object-center opacity-30 z-0'
            />
            <div className="absolute h-[1.5%] md:h-[2.3%] xl:h-[3%] inset-x-0 bg-black z-0 bottom-0" />
            <div className="relative z-10 text-center max-w-screen-2xl">
                <div className="px-6 space-y-6">
                    <BlurIn
                        word=
                        {<span className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-7xl'>
                            A fat GLOB of culture on Solana.
                            <br className='hidden md:block' />
                            Nothing more. Nothing less.
                        </span>
                        }
                    />
                    <ShinyButton
                        text={props.glob}
                        className="text-black md:text-xl bg-[#5AA7FA] lg:py-6 lg:px-12 py-4 px-10 rounded-2xl border-2 border-black"
                    />
                </div>
                <Image
                    src={AnimationGif}
                    alt={'Animation Gif'}
                    sizes='100%'
                    priority
                    className='w-screen h-auto -mb-[3.5%]'
                />
            </div>
        </section>
    )
}
