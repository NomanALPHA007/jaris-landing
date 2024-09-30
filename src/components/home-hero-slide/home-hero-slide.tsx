import React from "react";

const HomeHeroSlide = ({
	subtitle,
	subtitleColored,
	title,
	imgUrl,
}: {
	subtitle: string;
	subtitleColored: string;
	title: string;
	imgUrl: string;
}) => {
	return (
		<div
			className={`relative h-full bg-cover bg-center padding flex items-center justify-center`}
			style={{ backgroundImage: `url(${imgUrl})` }}
		>
			<div className="absolute inset-0 bg-jaris-blue opacity-75 " />
			<div className="relative flex flex-col items-center justify-center pt-20 md:pt-40 lg:pt-60">
				<div className="heading-secondary font-[500]">
					<span className="text-white">{subtitle}</span>{" "}
					<span className="text-jaris-gold">{subtitleColored}</span>
				</div>
				<div className="title font-[700] text-white">{title}</div>
			</div>
		</div>
	);
};

export default HomeHeroSlide;
