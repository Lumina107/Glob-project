import LetterPullup from "./magicui/letter-pullup";
import WordPullUp from './magicui/word-pull-up'
import BlurIn from './magicui/blur-in'
import Chart from './../assets/chart.png';
import Image from "next/image";


export default function Buying() {
    return (
        <section id="how-to-buy" className='pb-24 pt-32 bg-gradient-to-r
         from-light-green to-dark-green px-5 md:px-12 lg:px-16 xl:px-20'>
            <div className='max-w-screen-2xl'>
                <div className="space-y-8">
                    <LetterPullup
                        className="text-white text-stroke text-3xl md:text-4xl lg:text-5xl xl:text-7xl"
                        words="BUY $GLOB"
                        delay={0.05} />
                    <WordPullUp
                        className="text-base md:text-2xl mx-auto text-white font-normal max-w-5xl font-chivo"
                        words="wen? wen? wen? wen? wen? wen? wen? wen? wen? wen? wen? wen? wen? wen? wen? wen? wen? wen? wen? wen? wen? wen?"
                    />
                </div>
                <div className="flex items-center justify-center flex-wrap gap-5 md:gap-7 my-10">
                    <button className="relative inline-block before:block before:absolute before:inset-0 before:bg-black before:z-0 max-w-xs w-full before:rounded-3xl before:-bottom-1.5 before:-right-0.5 -rotate-2">
                        <div className="relative py-4 md:py-6 lg:py-7 border-4 border-black px-7 bg-[#0B917B] rounded-3xl">
                            <BlurIn
                                word="Raydium"
                                className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-black font-chivo font-black"
                            />
                        </div>
                    </button>
                    <button className="relative inline-block before:block before:absolute before:inset-0 before:bg-black before:z-0 max-w-xs w-full before:rounded-3xl before:-bottom-1.5 before:-right-0.5 rotate-3">
                        <div className="relative py-4 md:py-6 lg:py-7 border-4 border-black px-7 bg-[#0B917B] rounded-3xl">
                            <BlurIn
                                word="Tier 2 exchanges"
                                className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-black font-chivo font-black"
                            />
                        </div>
                    </button>
                    <button className="relative inline-block before:block before:absolute before:inset-0 before:bg-black before:z-0 max-w-xs w-full before:rounded-3xl before:-bottom-1.5 before:-right-0.5 -rotate-1">
                        <div className="relative py-4 md:py-6 lg:py-7 border-4 border-black px-7 bg-[#0B917B] rounded-3xl">
                            <BlurIn
                                word="Tier 1 exchange"
                                className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-black font-chivo font-black"
                            />
                        </div>
                    </button>
                </div>
                <div className="mt-32 py-20 min-h-96 space-y-16 px-6 md:px-10 lg:px-16 xl:px-20 border-[11px] border-black rounded-[30px] lg:rounded-[40px] xl:rounded-[50px] bg-gradient-to-br from-[#738AD2] to-[#5C72BC]">
                    <LetterPullup
                        className="text-white text-stroke text-3xl md:text-4xl lg:text-5xl xl:text-7xl"
                        words="Distroobuttttion"
                        delay={0.05} />

                    <div className="grid md:grid-cols-2 items-center justify-center gap-12">
                        <div>
                            <Image
                                src={Chart}
                                alt="Chart"
                                sizes="100%"
                                className="h-full w-full object-contain object-center"
                            />
                        </div>
                        <div>
                            <ul className="space-y-7">
                                {ChartInfo.map((items, key) => {
                                    return (
                                        <li key={key}
                                            className="flex items-start gap-2">
                                            <span className={`inline-block ${items.color} h-3 w-3 rounded-full shrink-0 mt-2 md:mt-2.5`}></span>
                                            <div className="">
                                                {items.value.map((i, idx) => {
                                                    return (
                                                        <span key={idx} className="font-chivo block font-light text-xl md:text-2xl text-white">{i}</span>
                                                    )
                                                })}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


const ChartInfo = [
    {
        color: 'bg-[#055349]',
        value: [
            '60% to presale participants'
        ]
    },
    {
        color: 'bg-[#056F60]',
        value: [
            '15% of Supply to LP'
        ]
    },
    {
        color: 'bg-[#169583]',
        value: [
            '5% for CEX'
        ]
    },
    {
        color: 'bg-[#31CEB8]',
        value: [
            '5 % for Market Making'
        ]
    },
    {
        color: 'bg-[#31EDD3]',
        value: [
            '10 % Marketing',
            '5 % Strategic Partnerships(Top communities)',
            '5 % KOLs / Influencers'
        ]
    },
    {
        color: 'bg-[#82FFED]',
        value: [
            '5 % Team / Advisors',
            '3 % Team(Vested for 6 months)',
            '2 % Cabal'
        ]
    },
]
