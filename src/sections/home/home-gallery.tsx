import { Button, Image, Link } from "@nextui-org/react";
import React from "react";

const HomeGallery = () => {
	return (
		<div className="md:h-screen padding lg:px-48 xl:p-64 lg:py-28 flex items-center justify-center gap-8">
			<div className="flex flex-col items-start gap-12 flex-1">
				<div className="flex flex-col gap-1">
					<h4 className="heading-secondary font-bold text-jaris-blue">
						Photo Gallery
					</h4>
					<p className="subtitle text-jaris-gold-dark">
						Discover exciting events held at school in our gallery.
					</p>
				</div>
				<Link href="#">
					<Button
						size="lg"
						variant="solid"
						className="border-jaris-blue bg-transparent border-3 rounded-md lg:px-8"
					>
						<span className="subtitle text-jaris-blue font-semibold">
							View Gallery
						</span>
					</Button>
				</Link>
			</div>
			<div className="flex gap-4">
				<Image
					src="/images/home/gallery1.jpeg"
					alt="Gallery"
					className="w-[300px] h-full object-cover object-right flex-shrink-0"
				/>
				<div className="h-full flex flex-col gap-4 ">
					<Image
						src="/images/home/gallery2.jpeg"
						alt="Gallery"
						className="h-[240px]"
					/>
					<Image
						src="/images/home/gallery3.jpeg"
						alt="Gallery"
						className=" h-[240px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeGallery;
