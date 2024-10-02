import { ExperienceCard } from "@/components";
import { homeExperiences, homePartnerSlides } from "@/data";
import { Image } from "@nextui-org/react";
import Marquee from "react-fast-marquee";

const Experience = () => {
	return (
		<div className="lg:min-h-screen bg-bg-text padding lg:px-24 lg:py-36 flex flex-col items-center justify-center gap-28">
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

			<div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap">
				{homeExperiences.map((experience: any, index: number) => (
					<ExperienceCard
            key={index}
						title={experience.title}
						subtitle={experience.subtitle}
					/>
				))}
			</div>

			<div className="w-full">
        <Marquee className="flex items-center justify-around">
          {
            homePartnerSlides.map((partner: any, index: number) => (
              <div key={index} className="h-28 min-w-28 flex items-center justify-center p-4 bg-[rgba(26,25,24,0.10)] mx-12 rounded-lg">
                <Image src={partner.imgUrl} alt={partner.title} className="h-20 w-auto" />
              </div>
            ))
          }
        </Marquee>
      </div>
		</div>
	);
};

export default Experience;
