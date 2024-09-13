import About from "@/components/About";
import Banner from "@/components/Banner";
import Buying from "@/components/Buying";
import Faq from "@/components/Faq";


export default function Home() {
  const value = 'EbGR8M7a5BUYpFWVeKFhFv7i2fR13PB55DKk2hmtDdFG'
  return (
    <main>
      <Banner glob={value} />
      <About glob={value} />
      <Buying />
      <Faq />
    </main>
  );
}
