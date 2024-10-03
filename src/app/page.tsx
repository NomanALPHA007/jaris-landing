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
} from "@/sections";

export default function Home() {
	return (
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
		</main>
	);
}
