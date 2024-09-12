'use client'
import React from 'react';
import AnimationGif from './../assets/animation.gif';
import Background from './../assets/background.png';
import BlurIn from './magicui/blur-in';
import ShinyButton from './magicui/shiny-button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Image from 'next/image';

export default function Banner(props: { glob: string }) {
    const [copied, setCopied] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    });
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
                <div className="px-6 space-y-6 mb-6">
                    <BlurIn
                        word=
                        {<span className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-7xl'>
                            A fat GLOB of culture on Solana.{' '}
                            <br className='hidden md:block' />
                            Nothing more. Nothing less.
                        </span>
                        }
                    />

                    <CopyToClipboard text={props.glob}
                        onCopy={() => setCopied(true)}>
                        <div>
                            <ShinyButton
                                text={props.glob}
                                className="text-black md:text-xl max-w-[80vw] bg-[#5AA7FA] lg:py-6 lg:px-12 py-4 px-10 rounded-2xl border-2 border-black"
                            />
                        </div>

                    </CopyToClipboard>
                </div>
                <Image
                    src={AnimationGif}
                    alt={'Animation Gif'}
                    sizes='100%'
                    priority
                    className='w-screen h-auto -mb-[3.5%]'
                />
            </div>



            <div
                className={`fixed bottom-5 transition-transform ${copied ? "translate-y-0" : "translate-y-[50vh]"
                    } z-40 ease-in-out duration-500`}
            >
                <div className="relative">
                    <div className="h-12 lg:h-20 z-20 rounded-full border-4 border-black flex flex-row items-center justify-center px-14 bg-[#5AA7FA] relative">
                        <p className="text-xs md:text-lg lg:text-[25px] text-white font-bold">
                            COPIED
                        </p>
                    </div>
                    <div className="absolute h-full w-full top-1 left-0.5 border-4 border-black rounded-full bg-black" />
                </div>
            </div>
        </section>
    )
}
