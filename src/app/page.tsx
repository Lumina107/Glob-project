import About from "@/components/About";
import Banner from "@/components/Banner";
import Buying from "@/components/Buying";
import Faq from "@/components/Faq";


export default function Home() {
  const value = 'D1AGWBJoD7oSSaUAgtFm5fRJPhZyJmqW8KSZp666jwJK'
  return (
    <main>
      <Banner glob={'WEN $GLOB'} />
      <About glob={value} />
      <Buying />
      <Faq />
    </main>
  );
}
