import { Hero } from "@/components/Homepage/Homepage";
import { HeroSection } from "@/styles/PageStyles/SectionStyles";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Rentease is a platform which makes renting and buying houses seamless"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection>
          <Hero />
        </HeroSection>
      </main>
    </>
  );
};

export default Home;
