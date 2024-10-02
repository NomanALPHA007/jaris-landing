"use client";
import { motion } from "framer-motion";

const JoinUs = () => {
	return (
		<div className="h-[60vh] lg:h-[75vh] bg-jaris-blue flex items-center justify-center">
			<div className="title font-bold flex gap-3 md:gap-5">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
					className="text-jaris-gold"
				>
					JOIN US AT
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
					className="text-white"
				>
					JARIS
				</motion.div>
			</div>
		</div>
	);
};

export default JoinUs;
