import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

const ExperienceCard = ({
	title,
	subtitle,
}: {
	title: string;
	subtitle: string;
}) => {
	return (
		<Card className="bg-bg-primary lg:px-6 lg:py-8 w-[90%] md:w-[400px] lg:w-[700px] flex flex-col justify-center items-center">
			<CardHeader className="w-[50%] m-auto">
        <div className="text-lg md:text-xl lg:text-2xl font-semibold text-center text-jaris-blue">{title}</div>
      </CardHeader>
			<CardBody>
				<p className="text-base md:text-lg text-center text-jaris-gold-dark">{subtitle}</p>
			</CardBody>
		</Card>
	);
};

export default ExperienceCard;
