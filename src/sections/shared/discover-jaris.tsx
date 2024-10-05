"use client";
import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";

const DiscoverJaris = () => {
	return (
		<div className="md:h-screen relative padding-x py-32 w-full flex flex-col justify-center items-center gap-8">
			<video
				className="absolute top-0 left-0 w-full h-full object-cover z-0"
				src="/videos/discover-jaris-bg.mp4"
				autoPlay
				loop
				muted
			/>
			<div className="absolute inset-0 bg-jaris-blue opacity-75 " />
			<div className="relative z-20 flex flex-col items-center justify-center gap-20">
				<div className="w-full text-center">
					<motion.h2
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						viewport={{ once: true }}
						className="heading-md font-semibold text-jaris-gold tracking-wide uppercase"
					>
						DISCOVER
					</motion.h2>
					<motion.h1
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
						viewport={{ once: true }}
						className="title font-bold text-bg-text tracking-wider uppercase"
					>
						JARIS
					</motion.h1>
				</div>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
					className="subtitle underline-animated text-bg-text uppercase font-light"
				>
					#Inspiring_Futures
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.9, ease: "easeInOut" }}
					className="flex items-center justify-start gap-11"
				>
					<Link href="#">
						<Button
							size="lg"
							variant="solid"
							className="bg-jaris-gold rounded-md lg:px-8"
						>
							<span className="subtitle text-jaris-blue font-semibold">
								Contact Us
							</span>
						</Button>
					</Link>
					<Link href="#">
						<Button
							size="lg"
							variant="solid"
							className="bg-jaris-gold rounded-md lg:px-8"
						>
							<span className="subtitle text-jaris-blue font-semibold">
								Apply Now
							</span>
						</Button>
					</Link>
				</motion.div>
			</div>
		</div>
	);
};

export default DiscoverJaris;
