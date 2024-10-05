import {
	Discover,
	Hero,
	JoinUs,
	Mission,
	CTACommunity,
	Experience,
	Counts,
	CTASchools,
	HomeGallery,
	Explore,
	DiscoverJaris,
	Header,
} from "@/sections";

export default function Home() {
	return (
		<>
		<Header />
		<main className="">
			<Hero />
			<Discover />
			<JoinUs />
			<Mission />
			<CTACommunity />
			<Experience />
			<Counts />
			<CTASchools />
			<HomeGallery />
			<Explore />
			<DiscoverJaris />
		</main>
		</>
	);
}
