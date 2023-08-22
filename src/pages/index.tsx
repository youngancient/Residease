import Head from "next/head";
import "./tailwind.css";
import { Section, Typography } from "@/styles/rafe/home/styles";
import houseImg from "@/styles/rafe/images/hero-img.jpeg";
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
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="relative bg-brand-greenish -top-28 pt-28 text-brand-gray-100">
				<Section className="pt-20">
					<div className="flex items-center justify-between">
						<div className="w-full max-w-md space-y-2">
							<div className="px-10 py-1 text-sm rounded-full bg-brand-orange w-fit">
								Welcome
							</div>
							<Typography variant="h1">
								Experience The Value Of Stress- Free Renting
							</Typography>
							<small className="font-light">
								Say goodbye to endless searching, stressful
								showings, and piles of paperwork.
							</small>
							<div className="flex items-center overflow-hidden border rounded-xl border-brand-orange">
								<input
									type="text"
									className="w-full h-full p-2 bg-transparent border outline-none focus:outline-none"
									placeholder="Enter your email to join the wait-list"
								/>
								<button className="rounded-xl bg-brand-orange/95 p-1.5 px-6 rounded-r-none hover:bg-brand-orange transition-all duration-300">
									Submit
								</button>
							</div>
						</div>
						<div className="w-full max-w-lg overflow-hidden rounded-md ">
							<Image
								objectFit="cover"
								src={houseImg}
								height={384}
								className="object-cover w-full max-w-md transition-all duration-300 rounded-md cursor-pointer h-96 hover:scale-105 md:mr-auto"
								alt={"House Image"}
								draggable={"false"}
								priority={true}
								fetchPriority="high"
								quality={100}
							/>
						</div>
					</div>
				</Section>
				<div className="bg-brand-gray-100 text-brand-slate">
					<Section>another apple</Section>
				</div>
			</main>
		</>
	);
};

{
	/* <HeroSection>
  <Hero />
</HeroSection>
<InnerSection>
  <ListHouses />
</InnerSection> */
}
export default Home;
