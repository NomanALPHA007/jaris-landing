import { ExperienceCard } from "@/components";
import { homeExperiences } from "@/data";

const Experience = () => {
	return (
		<div className="lg:h-screen bg-bg-text padding lg:px-24 lg:py-36 flex flex-col items-center justify-center gap-20">
			<div className="flex flex-col items-center justify-center gap-4">
				<div className="text-jaris-blue text-3xl md:text-4xl lg:text-5xl font-bold">
					Educational Experience
				</div>
				<div className="text-jaris-blue-dark subtitle tracking-wide lg:w-[85%] text-center">
					Unlock boundless potential through our immersive educational
					experience, fostering intellect, creativity, and character in every
					student.
				</div>
			</div>

			<div className="flex items-center justify-center gap-8 flex-wrap">
				{homeExperiences.map((experience: any, index: number) => (
					<ExperienceCard
            key={index}
						title={experience.title}
						subtitle={experience.subtitle}
					/>
				))}
			</div>

			<div></div>
		</div>
	);
};

export default Experience;
