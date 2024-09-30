"use client";
import { motion } from "framer-motion";

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
			<motion.div
				initial={{ opacity: 0, x: 40 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.2, ease: "easeInOut" }}
				className="relative flex flex-col items-center justify-center pt-20 md:pt-40 lg:pt-60"
			>
				<div className="heading-secondary font-[500]">
					<span className="text-white">{subtitle}</span>{" "}
					<span className="text-jaris-gold">{subtitleColored}</span>
				</div>
				<div className="title font-[700] text-white">{title}</div>
			</motion.div>
		</div>
	);
};

export default HomeHeroSlide;
