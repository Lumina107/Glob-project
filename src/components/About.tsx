'use client'
// import { AnimatedSubscribeButton } from './magicui/animated-subscribe-button';
import AboutImage from './../assets/about.png';
import Artwork from './../assets/soldout.jpg';
import Image from 'next/image'
import LetterPullup from './magicui/letter-pullup';
// import CopyToClipboard from 'react-copy-to-clipboard';


export default function About(props: { glob: string }) {
    return (
        <section
            id='about'
            className='py-20 md:py-12 
            -mt-3.5 bg-[#5C72BC] px-5 md:px-12 lg:px-16 xl:px-20 '
        >
            <div className="grid gap-10 md:grid-cols-2 max-w-screen-2xl items-center my-20">
                <div>
                    <LetterPullup
                        className="text-white text-stroke text-3xl md:text-4xl lg:text-5xl xl:text-7xl rotate-3"
                        words="ABOUT $GLOB"
                        delay={0.05} />
                    <Image
                        src={AboutImage}
                        alt='About Image'
                        sizes='100%'
                        className='h-auto w-full object-contain object-center'
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <div className="max-w-lg w-full">
                        <Image
                            src={Artwork}
                            alt='About Image'
                            sizes='100%'
                            className='h-full w-full object-contain object-center'
                        />
                        {/* <div className="-mt-4">

                            <CopyToClipboard text={props.glob}>
                                <div>
                                    <AnimatedSubscribeButton
                                        buttonColor='#738AD2'
                                        buttonTextColor='#000000'
                                        initialText={'CA:' + props.glob}
                                        changeText={'Copied'}
                                        subscribeStatus={false}
                                        classname='border-[3px] border-black rounded-2xl md:py-6 py-5 max-w-sm lg:max-w-md xl:max-w-lg'
                                    />
                                </div>
                            </CopyToClipboard>

                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}