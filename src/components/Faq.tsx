import Image from 'next/image'
import Tokens from './../assets/artwork.gif';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
    return (
        <section className='px-5 md:px-12 lg:px-16 xl:px-20 pt-20 bg-gradient-to-r
         from-light-green to-dark-green' id='faq'>
            <div className="grid md:grid-cols-2 max-w-screen-2xl items-end gap-5">
                <div className='flex items-end justify-center order-2 md:order-1'>
                    <Image
                        src={Tokens}
                        alt='Art Animation'
                        sizes='100%'
                        className='h-full w-full object-contain object-bottom'
                    />
                </div>
                <div className='space-y-8 pb-14 order-1 md:order-2'>
                    <h3 className='text-3xl lg:text-4xl xl:text-5xl'>Frequently asked questions</h3>
                    <div className="px-6 md:px-10 py-6 border-[7px] border-black rounded-[30px] lg:rounded-[40px] xl:rounded-[50px] bg-gradient-to-br from-[#738AD2] to-[#5C72BC]">

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='text-lg md:text-xl lg:text-2xl text-left font-black font-chivo'>
                                    Is this a cabal play?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Your mom.
                                </AccordionContent>
                            </AccordionItem>
                            <div className="h-0.5 w-full bg-gradient-to-r from-black/0 via-black to-black/0"></div>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className='text-lg md:text-xl lg:text-2xl text-left font-black font-chivo'>
                                    <span>   Is this <span className='underline'>$MUMU</span> dev?</span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    Your mom.
                                </AccordionContent>
                            </AccordionItem>
                            <div className="h-0.5 w-full bg-gradient-to-r from-black/0 via-black to-black/0"></div>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className='text-lg md:text-xl lg:text-2xl text-left font-black font-chivo'>
                                    Is this going to evolve modern
                                    finance, changing the industrial
                                    complex?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yezurrr.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>
            </div>
        </section>
    )
}
